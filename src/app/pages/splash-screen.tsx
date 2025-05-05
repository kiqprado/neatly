'use client'

import { useRef, useEffect } from 'react'

import gsap from 'gsap'

export function SplashScreen() {
  const title = useRef(null)

  useEffect(() => {
    if(title.current) {
      gsap.fromTo(title.current, {
        opacity: 0,
        scale: 0.5,
        ease: 'power3.inOut'
      }, {
        opacity: 1,
        scale: 1,
        duration: 1.1,
        ease: 'power3.inOut'
      })
    }
  }, [])

  return (
    <div className='h-screen flex'>
      <h1 ref={title} className='m-auto tracking-widest font-bold'>Neatly</h1>
    </div>
  )
}