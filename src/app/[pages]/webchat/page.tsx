'use client'

import { useState } from 'react'

import Image from 'next/image'

import { useMediaRange } from '@/app/utils/breakpoint-hook'

import botResponse from '@/app/utils/bot-response-example'

import { LinkIcon } from '@/app/elements/link-icon'

interface IWebChatPage {
  params: string
}

export default function WebChatPage({ params }: IWebChatPage) {
  const [ messages, setMessages ] = useState<string[]>([])
  const [ textValue, setTextValue ] = useState('')

  //Query's
  const isMobileSM = useMediaRange('mobileSM')
  const isMobileMD = useMediaRange('mobileMD')
  const isMobileLG = useMediaRange('mobileLG')
  const isTabletMD = useMediaRange('tabletMD')
  const isTabletLG = useMediaRange('tabletLG')
  
  const mobileRangeFull = isMobileSM || isMobileMD || isMobileLG
  const tabletRangeFull = isTabletMD || isTabletLG

  function HandleMessageChat() {
    if(!textValue.trim()) return

    setMessages(prev => [...prev, textValue])

    setTextValue('')

    const randomResponse =  botResponse[Math.floor(Math.random() * botResponse.length)]

    setTimeout(() => {
      setMessages(prev => [...prev, randomResponse])
    }, 1000)
  }
  
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
          <div className='flex-1 border border-red-400'>
            {messages.map((message, index) => (
              <span
                key={index}
              >
                {message}
              </span>
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