'use client'

import { useState, useRef, useEffect } from 'react'

import Image from 'next/image'

import { useMediaRange } from '@/app/utils/breakpoint-hook'

import { FetchMessageOnChat } from '@/app/utils/fetch-bot-responses'

import { LinkIcon } from '@/app/elements/link-icon'

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
    <div className='h-screen inset-0 flex bg-neutral-950/50'>
      <div className={`m-auto ${mobileRangeFull || tabletRangeFull ? 'w-full h-screen' : 'h-[93%] w-[36%]'} px-3 py-2 relative rounded-md border bg-neutral-900`}>
        <LinkIcon
          href={'/'}
        >
          <Image
            src={'/close.svg'}
            alt='Close Tag Icon'
            width={26}
            height={26}
          />
        </LinkIcon>
        <div 
          className='h-full flex flex-col bg-center bg-no-repeat bg-cover border brightness-75 rounded-md'
          style={{ backgroundImage: "url('/bg-chat.jpg')"}}
        >
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
          <div className='flex gap-3 py-1.5 bg-neutral-500/30 rounded-b-md'>
            <input 
              type='text'
              value={textValue}
              placeholder='type you message...'
              onChange={(e) => setTextValue(e.target.value)}
              className='flex-1 px-3 outline-0 placeholder:text-zinc-100'
            />
            <button 
              className='min-w-26'
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