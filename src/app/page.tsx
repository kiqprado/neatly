'use client'

import Image from 'next/image'

import { useMediaRange } from './utils/breakpoint-hook'

import { LinkBtn } from './elements/link-btn'
import { LinkWithIcon } from './elements/link-with-icon'

import { Footer } from './components/footer'

export default function Home() {
  //const textRef = useRef(null)
  //Query's
  const isMobileSM = useMediaRange('mobileSM')
  const isMobileMD = useMediaRange('mobileMD')
  const isMobileLG = useMediaRange('mobileLG')
  const isTabletMD = useMediaRange('tabletMD')
  const isTabletLG = useMediaRange('tabletLG')
  
  const mobileRangeFull = isMobileSM || isMobileMD || isMobileLG
  const tabletRangeFull = isTabletMD || isTabletLG

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
        <h2 className='text-center text-2xl tracking-widest hover:text-zinc-50 transition-all duration-300 ease-in-out'>Neatl<span className='leading-none hover:text-emerald-300 transition-all duration-700 ease-in-out cursor-grab'>y</span></h2>
      </header>
      <main className={`flex-1 flex flex-col gap-12 items-center`}>
        <div className={`flex flex-col gap-3 items-center ${mobileRangeFull ? 'mt-26' : 'mt-36'}`}>
          <h3 className={`${mobileRangeFull ? 'hidden' : 'block'} text-xl tracking-wide`}>Tame the chaos in seconds</h3>
          <p 
            className={`text-center ${mobileRangeFull || tabletRangeFull ? 'text-lg' : 'text-md'}`}
          >
            Neatly’s AI bot sorts your to-dos, reminders, and errands—so you don’t have to. Fewer clicks, zero mess.
          </p>
          <h2 className='text-2xl tracking-widest text-center mb-4'>Tap. Sort. Done.</h2>
          <LinkBtn
            href={'/pages/usage'}
          >
            <span className={`${mobileRangeFull || tabletRangeFull ? 'text-xl' : ''}`}>Learn how to use</span>
          </LinkBtn>
        </div>
        
        <div 
          className={`flex ${mobileRangeFull || tabletRangeFull ? 'w-full flex-col px-6' : 'flex-row'} gap-3 justify-center`}
        >
          <LinkWithIcon
            href={'#'}
            colors='wpp'
          >
            <Image
              src={'/whatsapp.png'}
              alt=""
              width={mobileRangeFull  || tabletRangeFull ? 96 : 66}
              height={mobileRangeFull  || tabletRangeFull ? 96 : 66}
            />
            <span className={`${mobileRangeFull ? 'text-xl' : 'text-md'}`}>WhatsApp Bot</span>
          </LinkWithIcon>
  
          <LinkWithIcon
            href={'https://t.me/NeatlyApp_bot'}
            colors='tel'
          >
            <Image
              src={'/telegram.png'}
              alt=""
              width={mobileRangeFull  || tabletRangeFull ? 96 : 66}
              height={mobileRangeFull  || tabletRangeFull ? 96 : 66}
            />
            <span className={`${mobileRangeFull ? 'text-xl' : 'text-md'}`}>WhatsApp Bot</span>
          </LinkWithIcon>

          <LinkWithIcon
            href={'https://discord.com/oauth2/authorize?client_id=1372559159316185209'}
            colors='dis'
          >
            <Image
              src={'/discord.png'}
              alt=""
              width={mobileRangeFull  || tabletRangeFull ? 96 : 66}
              height={mobileRangeFull  || tabletRangeFull ? 96 : 66}
            />
            <span className={`${mobileRangeFull ? 'text-xl' : 'text-md'}`}>WhatsApp Bot</span>
          </LinkWithIcon>
        </div>
        
        <div className={`flex justify-center ${mobileRangeFull || tabletRangeFull ? 'mb-16' : ''}`}>
          <LinkWithIcon 
            href={`/pages/webchat`} 
          >
            <Image
              src={'/logo-dark-mode.png'}
              alt='App logo Image'
              width={mobileRangeFull  || tabletRangeFull ? 68 : 46}
              height={mobileRangeFull  || tabletRangeFull ? 68 : 46}
            />
            <span className={`${mobileRangeFull ? 'text-xl' : 'text-md'}`}>Try it now.</span>
          </LinkWithIcon>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
