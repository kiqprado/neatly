import { useEffect, useRef } from 'react'

import gsap from 'gsap'

export function Footer() {
  const slogan = useRef(null)

  const sloganPhrase = 'Neatly: Tap. Sort. Live Better.'

  useEffect(() => {
    if(slogan.current) {
      gsap.from(slogan.current, {
        text: '',
        opacity: 0,
        duration: 1,
        ease: 'power2.inOut'
      })
      gsap.to(slogan.current, {
        text: sloganPhrase,
        opacity: 1,
        duration: 1,
        ease: 'power2.inOut'
      })
    }
  }, [])
  return (
    <footer className='h-8 text-center'>
      <span ref={slogan}>{sloganPhrase}</span>
    </footer>
  )
}