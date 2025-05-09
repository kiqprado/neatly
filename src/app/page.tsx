'use client'

import { useState } from 'react'

import Image from 'next/image'

import { useMediaRange } from './utils/breakpoint-hook'

import { LinkWithIcon } from './elements/link-with-icon'

import { Footer } from './components/footer'

export default function Home() {
  //const textRef = useRef(null)

  const [ chatWebModal, setChatWebModal ] = useState(false)

  //Query's
  const isMobileSM = useMediaRange('mobileSM')
  const isMobileMD = useMediaRange('mobileMD')
  const isMobileLG = useMediaRange('mobileLG')
  const isTabletMD = useMediaRange('tabletMD')
  const isTabletLG = useMediaRange('tabletLG')
  
  const mobileRangeFull = isMobileSM || isMobileMD || isMobileLG
  const tabletRangeFull = isTabletMD || isTabletLG

  function ToggleChatWebModal() {
    setChatWebModal(prev => !prev)
  }
 
  /*useEffect(() => {
    const elements = textRef.current.children

    gsap.from(elements, {
      opacity: 0,
      stagger: 0.5,
      duration: 1,
      ease: 'power3.inOut'
    })
  }, [])*/
  return (
    <div className={`h-screen flex flex-col ${mobileRangeFull || tabletRangeFull ? 'px-6' : ''}`}>
      <header className='h-16 w-full flex items-center justify-center gap-1'>
        <Image
          src={'/logo-dark-mode.png'}
          alt={`Logo Application`}
          width={46}
          height={46}
        />
        <h2 className='text-center text-2xl tracking-widest hover:text-zinc-50 transition-all duration-300 ease-in-out'>Neatly</h2>
      </header>
      <main className={`flex-1 flex flex-col ${mobileRangeFull ? 'gap-16' : 'gap-12'} items-center`}>
        <div className={`flex flex-col gap-3 items-center ${mobileRangeFull ? 'mt-30' : 'mt-36'}`}>
          <h3 className={`${mobileRangeFull ? 'hidden' : 'block'} text-xl tracking-wide`}>Tame the chaos in seconds</h3>
          <p 
            className={`text-center ${mobileRangeFull || tabletRangeFull ? 'text-lg' : 'text-md'}`}
          >
            Neatly’s AI bot sorts your to-dos, reminders, and errands—so you don’t have to. Fewer clicks, zero mess.
          </p>
          <h2 className='text-2xl tracking-widest text-center mb-6'>Tap. Sort. Done.</h2>
          <LinkWithIcon
            href={'/pages/usage'}
          >
            Learn how to use
          </LinkWithIcon>
        </div>
        
        <div 
          className={`flex ${mobileRangeFull || tabletRangeFull ? 'flex-col' : 'flex-row'} gap-3 justify-center`}
        >
          <LinkWithIcon
            href={'#'}
            colors='wpp'
          >
            <Image
              src={'/whatsapp.png'}
              alt=""
              width={66}
              height={66}
            />
            <span className={`${mobileRangeFull ? 'text-lg' : 'text-md'}`}>WhatsApp Bot</span>
          </LinkWithIcon>
  
          <LinkWithIcon
            href={'#'}
            colors='tel'
          >
            <Image
              src={'/telegram.png'}
              alt=""
              width={66}
              height={66}
            />
            <span className={`${mobileRangeFull ? 'text-lg' : 'text-md'}`}>Telegram Bot</span>
          </LinkWithIcon>

          <LinkWithIcon
            href={'#'}
            colors='dis'
          >
            <Image
              src={'/discord.png'}
              alt=""
              width={66}
              height={66}
            />
            <span className={`${mobileRangeFull ? 'text-lg' : 'text-md'}`}>Discord Bot</span>
          </LinkWithIcon>
        </div>
        
        <div className='flex justify-center'>
          <LinkWithIcon 
            href={`/pages/webchat`} 
          >
            <Image
              src={'/logo-dark-mode.png'}
              alt='App logo Image'
              width={46}
              height={46}
            />
            <span>Try it Now!</span>
          </LinkWithIcon>
        </div>

        { chatWebModal && (
          <div className='fixed inset-0 flex bg-neutral-950/50'>
            <div className='min-w-96 h-126 m-auto bg-neutral-900'>
              <button
                onClick={ToggleChatWebModal}
              >
                X
              </button>
            </div>
          </div>
        )}
      </main>
      <Footer/>
    </div>
  );
}
