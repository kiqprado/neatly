import Image from 'next/image'

import { ButtonIcon } from '@/app/elements/button-icon'

interface IWebChatPage {
  params: string
}

export default function WebChatPage({ params }: IWebChatPage) {
  return (
    <div className='h-screen inset-0 flex bg-neutral-950/50'>
      <div className='m-auto h-[93%] w-[36%] px-3 py-2 relative rounded-md border bg-neutral-900'>
        <ButtonIcon
          href={'/'}
        >
          <Image
            src={'/close.svg'}
            alt='Close Tag Icon'
            width={26}
            height={26}
          />
        </ButtonIcon>
        <div 
          className='h-full relative bg-center bg-no-repeat bg-cover border brightness-75 rounded-md'
          style={{ backgroundImage: "url('/bg-chat.jpg')"}}
        >
          <div className='absolute left-0 bottom-0 right-0 flex gap-3 py-1.5 bg-neutral-500/30 rounded-b-md'>
            <input 
              type='text'
              placeholder='type you message...'
              className='flex-1 px-3 outline-0 placeholder:text-zinc-100'
            />
            <button className='min-w-26'>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}