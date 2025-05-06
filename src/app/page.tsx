'use client'

import { useEffect, useState, useRef } from 'react'

import gsap from 'gsap'

import Image from 'next/image'

import WebChatPage from './pages/[webchat]/page'
import { Button } from './elements/button'
import { ButtonLink } from './elements/button-link'

import { Footer } from './components/footer'

export default function Home() {
  //const textRef = useRef(null)

  const [ chatWebModal, setChatWebModal ] = useState(false)

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
    <div className='h-screen flex flex-col'>
      <header className='h-16 flex items-center justify-center'>
        <Image
          src={'/logo-dark-mode.png'}
          alt={`Logo Application`}
          width={46}
          height={46}
        />
        <h2 className='text-center text-2xl tracking-widest hover:text-zinc-50 transition-all duration-300 ease-in-out'>Neatly</h2>
      </header>
      <main className='flex-1 m-auto space-y-12'>
        <div className='flex flex-col gap-12'>
          <div className='flex flex-col items-center gap-3 mt-16'>
            <h4 className='text-xl text-center tracking-wide'>Tame the chaos in seconds</h4>
            <p className='text-justify'>Neatly’s AI bot sorts your to-dos, reminders, and errands—so you don’t have to. Fewer clicks, zero mess.</p>
            <h3 className=' text-2xl tracking-widest text-center mb-12'>Tap. Sort. Done.</h3>
            <Button>
              Learn how to use
            </Button>
          </div>

          <div className='flex gap-3 justify-center'>
          <ButtonLink
            href={'#'}
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
            href={'#'}
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
            href={'#'}
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
        <div className='px-16 mt-26 flex justify-center'>
          <ButtonLink 
            href={`/pages/webchat`} 
          >
            <Image
              src={'/logo-dark-mode.png'}
              alt='App logo Image'
              width={46}
              height={46}
            />
            <span>Try it Now!</span>
          </ButtonLink>
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
