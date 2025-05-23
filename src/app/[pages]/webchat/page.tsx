'use client'

import { useState, useRef, useEffect } from 'react'

import Image from 'next/image'

import Link from 'next/link'

import { useMediaRange } from '@/app/utils/breakpoint-hook'

import { FetchMessageOnChat } from '@/app/utils/fetch-bot-responses'

import { ChevronLeft } from 'lucide-react'

interface IWebChatPage {
  params: string
  autoScroll: boolean
}

type Message = {
  sender: 'user' | 'bot'
  content: string
}

export default function WebChatPage({ params, autoScroll = true }: IWebChatPage) {
  const messagesViewChatRef = useRef(null)

  const [ messages, setMessages ] = useState<Message[]>([])
  const [ textValue, setTextValue ] = useState('')

  const [ isDragging, setIsDragging ] = useState(false)

  //Query's
  const isMobileSM = useMediaRange('mobileSM')
  const isMobileMD = useMediaRange('mobileMD')
  const isMobileLG = useMediaRange('mobileLG')
  const isTabletMD = useMediaRange('tabletMD')
  const isTabletLG = useMediaRange('tabletLG')
  
  const mobileRangeFull = isMobileSM || isMobileMD || isMobileLG
  const tabletRangeFull = isTabletMD || isTabletLG

  async function HandleMessageChat() {
    if (!textValue.trim()) return

    const userMessage: Message = { sender: 'user', content: textValue}
    setMessages(prev => [...prev, userMessage])

    try {
      const botReply = await FetchMessageOnChat(textValue, 'pt')
      const botMessage: Message = {
        sender: 'bot',
        content: botReply?.content || 'Erro ao gerar resposta'
      }
      setMessages(prev => [...prev, botMessage])
      setTextValue('')
    } catch (err) {
      console.error(err)
    }
  }

  function ChatViewScroll() {
    messagesViewChatRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  function HandleKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if( e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      e.preventDefault()
      
      const scrollAmount = e.key === 'ArrowUp' ? -50 : 50

      e.currentTarget.scrollBy({ 
        top: scrollAmount, 
        behavior: 'smooth'
      })
    }
  }

  function HandleMouseDown() {
    setIsDragging(true)
    document.body.style.cursor = 'grabbing'
  }

  function HandleMouseUp() {
    setIsDragging(false)
    document.body.style.cursor = ''
  }

  useEffect(() => {
    if(autoScroll) {
      ChatViewScroll()
    }
  }, [ messages, autoScroll ])
  
  return (
    <div className='h-[100svh] inset-0 flex bg-neutral-950/50'>
      <div className={`m-auto ${mobileRangeFull || tabletRangeFull ? 'w-full h-[100svh]' : 'h-[93%] w-[36%]'} rounded-md border bg-neutral-900`}>
        <div 
          className='h-full flex flex-col bg-center bg-no-repeat bg-cover border brightness-75 rounded-md'
          style={{ backgroundImage: "url('/bg-chat.jpg')"}}
        >
          <div className='w-full px-1.5 py-1.5 flex items-center gap-3  bg-neutral-700/90'>
            <Link
              href={'/'}
            >
              <ChevronLeft
                className={`${mobileRangeFull || tabletRangeFull ? 'size-9' : 'size-7'} 
                  -mr-2 hover:text-zinc-50 hover:brightness-200`}
              />
            </Link>
            <Image
              src={'/logo-dark-mode.png'}
              alt='App Logo Profile Pic'
              width={mobileRangeFull || tabletRangeFull ? 46 : 36}
              height={16}
              className='rounded-[50%] border border-zinc-500'
            />
            <div 
              className={`flex flex-col justify-center ${mobileRangeFull || tabletRangeFull ? '' : 'mt-1 leading-3'}`}
            >
              <h3 className={`${mobileRangeFull || tabletRangeFull ? 'font-bold tracking-widest' : 'tracking-wider'}
                brightness-150 hover:brightness-200`}
              >
                Neatly
              </h3>
              <span className='text-sm brightness-125'>online</span>
            </div>
          </div>
          <div 
            className='py-1.5 flex-1 flex flex-col gap-3 overflow-y-hidden text-zinc-50'
            style={{
              cursor: isDragging ? 'grabbing' : 'grab',
              WebkitOverflowScrolling: 'touch',
              overscrollBehavior: 'contain',
            }}
            tabIndex={0}
            onKeyDown={HandleKeyDown}
            onMouseUp={HandleMouseUp}
            onMouseDown={HandleMouseDown}
            onMouseLeave={HandleMouseUp}
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex px-1.5 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <span
                  className={`max-w-[66%] px-3 rounded-lg shadow-md hover:shadow-lg ${
                    message.sender === 'user' 
                      ? 'bg-neutral-800 border border-neutral-700'
                      : 'bg-zinc-800 border border-zinc-700'
                  }`}
                >
                  {message.content}
                </span>
                <div ref={messagesViewChatRef} />
              </div>
            ))}
          </div>
          <div className='flex gap-3 p-1.5 bg-neutral-700/90  rounded-b-md'>
            <input 
              type='text'
              value={textValue}
              placeholder='type you message...'
              onChange={(e) => setTextValue(e.target.value)}
              className={`flex-1 px-3 outline-0 ${ mobileRangeFull || tabletRangeFull ? 'text-lg' : 'text-md' } bg-zinc-900 rounded-2xl placeholder:text-zinc-100`}
            />
            <button 
              className={`min-w-22 ${ mobileRangeFull || tabletRangeFull ? 'text-lg' : 'text-md'}`}
              onClick={HandleMessageChat}  
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}