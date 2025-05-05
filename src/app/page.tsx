'use client'

import { useEffect, useState, useRef } from 'react'

import gsap from 'gsap'

import Image from 'next/image'

//import { SplashScreen } from './pages/splash-screen'
import { ButtonLink } from './elements/button-link'

export default function Home() {
  const textRef = useRef(null)

  const [ chatWebModal, setChatWebModal ] = useState(false)

  function ToggleChatWebModal() {
    setChatWebModal(prev => !prev)
  }
 
  useEffect(() => {
    const elements = textRef.current.children

    gsap.from(elements, {
      opacity: 0,
      stagger: 0.5,
      duration: 1,
      ease: 'power3.inOut'
    })
  }, [])
  return (
    <div className='h-screen flex flex-col'>
      <header className='h-16 flex items-center justify-center'>
        <Image
          src={'/logo-dark-mode.png'}
          alt={`Logo Application`}
          width={46}
          height={46}
        />
        <h2 className='text-center'>Neatly</h2>
        <Image
          src={'/logo-light-mode.png'}
          alt={`Logo Application`}
          width={46}
          height={46}
        />
      </header>
      <main className='flex-1 m-auto space-y-12'>
        <div className='flex flex-col gap-12 mt-12'>
          <div ref={textRef} className='space-y-3 mt-16'>
            <h4 className='text-xl text-center'>Tame the chaos in seconds</h4>
            <p className='text-justify'>Neatly’s AI bot sorts your to-dos, reminders, and errands—so you don’t have to. Fewer clicks, zero mess.</p>
            <h3 className='text-2xl tracking-widest text-center'>Tap. Sort. Done.</h3>
          </div>
          <div className='flex gap-3 justify-center'>
          <ButtonLink
            colors='wpp'
          >
            <Image
              src={'/whatsapp.png'}
              alt=""
              width={66}
              height={66}
            />
            <span>WhatsApp Bot</span>
          </ButtonLink>
  
          <ButtonLink
            colors='tel'
          >
            <Image
              src={'/telegram.png'}
              alt=""
              width={66}
              height={66}
            />
            <span>Telegram Bot</span>
          </ButtonLink>

          <ButtonLink
            colors='dis'
          >
            <Image
              src={'/discord.png'}
              alt=""
              width={66}
              height={66}
            />
            <span>Discord Bot</span>
          </ButtonLink>
          </div>
         
        </div>
        <div className='px-16'>
          <ButtonLink href={'#'} onClick={ToggleChatWebModal}>Try it Now!</ButtonLink>
        </div>

        { chatWebModal && (
          <div className='fixed inset-0 flex bg-neutral-950/50'>
            <div className='min-w-96 h-126 m-auto bg-neutral-800'>
              <button
                onClick={ToggleChatWebModal}
              >
                X
              </button>
            </div>
          </div>
        )}
      </main>
      <footer className='h-8 text-center'>
        <span>Neatly: Tap. Sort. Live Better.</span>
      </footer>
    </div>
  );
}
