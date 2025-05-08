'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { LinkBtn } from '@/app/elements/link-btn'

gsap.registerPlugin(ScrollTrigger)

interface IUsage {
  params: string
}

export default function Usage({ params }: IUsage) {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])
  const dividersRefs = useRef<(HTMLDivElement | null)[]>([])
  const titleRefs = useRef<(HTMLHeadingElement | null)[]>([])
  const textRefs = useRef<(HTMLParagraphElement | HTMLLIElement | null)[]>([])

  useEffect(() => {
    ScrollTrigger.defaults({
      toggleActions: 'play none none none',
      start: 'top 80%',
      end: 'top 30%'
    })

    dividersRefs.current.forEach((divider, index) => {
      if (!divider) return

      const directions = [
        { transformOrigin: 'left center' }, 
        { transformOrigin: 'right center' },   
        { transformOrigin: 'center center' }   
      ]

      gsap.fromTo(divider, 
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 2,
          transformOrigin: directions[index].transformOrigin,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: divider,
            scrub: 0.5
          }
        }
      )
    })

    titleRefs.current.forEach((title) => {
      if (!title) return

      gsap.fromTo(title, 
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: title,
            start: 'top 85%'
          }
        }
      )
    })

    textRefs.current.forEach((text, index) => {
      if (!text) return

      gsap.fromTo(text, 
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,  
          delay: index * 0.15,
          ease: 'sine.out',
          scrollTrigger: {
            trigger: text.parentElement!,
            start: 'top 75%'
          }
        }
      )
    })

    sectionRefs.current.forEach((section) => {
      if (!section) return

      gsap.fromTo(section, 
        { opacity: 0 },
        {
          opacity: 1,
          duration: 2,
          ease: 'sine.inOut',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%'
          }
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  function addToRefs(ref: HTMLElement | null, refArray: React.RefObject<(HTMLElement | null)[]>) {
    if (ref && !refArray.current.includes(ref)) {
      refArray.current.push(ref)
    }
  }

  return (
    <div className='h-screen px-12 space-y-9'>
      <div 
        ref={ref => addToRefs(ref, sectionRefs)}
        className='h-full flex flex-col items-center justify-center gap-3 text-center my-3'
      >
        <h1 
          ref={ref => addToRefs(ref, titleRefs)}
          className='font-bold tracking-widest text-4xl'
        >
          Neatl<span className='hover:text-emerald-300 transition-all duration-700 ease-in-out cursor-grab'>y</span>
        </h1>
        <h2 
          ref={ref => addToRefs(ref, titleRefs)}
          className='tracking-widest text-xl'
        >
          Your Smart List Organizer</h2>
        <span 
          ref={ref => addToRefs(ref, textRefs)}
          className='tracking-wider'
        >
          The Cross-Platform Productivity Assistant That Feels Like a Friend
        </span>
      </div>

      <div 
        ref={ref => addToRefs(ref, sectionRefs)}
        className='flex flex-col gap-6'
      >
        <h2 
          ref={ref => addToRefs(ref, titleRefs)}
          className='tracking-widest text-2xl text-center'
        >
          Introduction
        </h2>
        <p 
          ref={ref => addToRefs(ref, textRefs)}
          className='max-w-[50%] text-justify tracking-wide py-3'
        >
          <strong>Neatly</strong> is your AI-powered list organizer, designed to simplify shopping, task management, and daily planning. Whether you&apos;re managing groceries, work tasks, or personal goals, Neatly ensures <strong>clarity</strong>, <strong>efficiency</strong>, and <strong>smart</strong> suggestions—acting less like a tool and more like a <strong>productivity partner</strong>.
        </p>
        <h3 
            ref={ref => addToRefs(ref, titleRefs)}
            className='text-center text-lg tracking-wider'
          >
            Why Neatly?
          </h3>
        <div className='flex flex-col items-end'>
          <ul className='max-w-[50%] text-justify space-y-3'>
            <li ref={ref => addToRefs(ref, textRefs)}>
              <strong>Cross-Platform Availability</strong> – Use it directly on the web, WhatsApp, Telegram, or Discord—your lists sync seamlessly.
            </li>
            <li ref={ref => addToRefs(ref, textRefs)}>
              <strong>AI-Powered Suggestions</strong> – Learns your habits and suggests frequent items, saving time.
            </li>
            <li ref={ref => addToRefs(ref, textRefs)}>
              <strong>Collaborative Lists</strong> – Share and edit lists with family, friends, or coworkers in real time.
            </li>
            <li ref={ref => addToRefs(ref, textRefs)}>
              <strong>Voice & Text Input</strong> – Add items naturally, just like chatting with a friend.
            </li>
          </ul>
        </div>
      </div>

      <div 
        ref={ref => {
          addToRefs(ref, dividersRefs)
          addToRefs(ref, sectionRefs)
        }}
        className='h-0.5 w-full bg-neutral-500 rounded-4xl'
      />

      <div 
        ref={ref => addToRefs(ref, sectionRefs)}
        className='flex flex-col gap-3'
      >
        <h2 
          ref={ref => addToRefs(ref, titleRefs)}
          className='tracking-widest text-2xl text-center'
        >
          How to Use Neatly
        </h2>
        <div className='space-y-5'>
          <h3 
            ref={ref => addToRefs(ref, titleRefs)}
            className='tracking-wider text-lg mb-3'
          >
            Getting Started
          </h3>
          <ul className='space-y-2'>
            <h4 
              ref={ref => addToRefs(ref, titleRefs)}
              className='tracking-wide'
            >
              <strong className='mr-3 text-red-500'>//</strong>
              Web Version (Try It Now!)
            </h4>
            <li ref={ref => addToRefs(ref, textRefs)}>
              Visit Neatly's WebChat (no login required).
            </li>
            <li ref={ref => addToRefs(ref, textRefs)}>
              Type or speak your first list (e.g., "Add milk, eggs, and bread to my shopping list").
            </li>
            <li ref={ref => addToRefs(ref, textRefs)}>
              Edit, reorder, or check off items with a click.
            </li>
          </ul>
          <ul className='space-y-2'>
            <h4 
              ref={ref => addToRefs(ref, titleRefs)}
              className='tracking-wide'
            > 
              <strong className='mr-3 text-red-500'>//</strong>
              Mobile/Messaging Apps
            </h4>
            <li ref={ref => addToRefs(ref, textRefs)}>
              <strong>WhatsApp/Telegram/Discord:</strong> Send "Start" to Neatly's bot.
            </li>
            <li ref={ref => addToRefs(ref, textRefs)}>
              Follow the prompts to create your first list.
            </li>
          </ul>
        </div>
        <div className='space-y-5'>
          <h3 
            ref={ref => addToRefs(ref, titleRefs)}
            className='tracking-wider text-lg mb-3'  
          >
            Key Features
          </h3>
          <ul className='space-y-2'>
            <h4 
              ref={ref => addToRefs(ref, titleRefs)}
              className='tracking-wide'
            >
              <strong className='mr-3 text-red-500'>//</strong>
              Smart List Creation
            </h4>
            <h5 ref={ref => addToRefs(ref, titleRefs)}>Natural Language Input:</h5>
            <li ref={ref => addToRefs(ref, textRefs)}>
              "Add pasta, tomatoes, and cheese to my grocery list."
            </li>
            <li ref={ref => addToRefs(ref, textRefs)}>
              "Remove eggs and add almond milk instead."
            </li>
            <h5 ref={ref => addToRefs(ref, textRefs)}>
              Auto-Categorization: Groups items by type (e.g., Dairy, Vegetables).
            </h5>
          </ul>
          <ul className='space-y-2'>
            <h4 
              ref={ref => addToRefs(ref, titleRefs)}
              className='tracking-wide'
            >
              <strong className='mr-3 text-red-500'>//</strong>
              Cross-Platform Sync
            </h4>
            <h5 ref={ref => addToRefs(ref, titleRefs)}>Start a list on WhatsApp and finish it on the web app—all data stays updated.</h5>
          </ul>
          <ul className='space-y-2'>
            <h4 
              ref={ref => addToRefs(ref, titleRefs)}
              className='tracking-wide'
            >
              <strong className='mr-3 text-red-500'>//</strong>
              Reminders & Suggestions
            </h4>
            <h5 ref={ref => addToRefs(ref, titleRefs)}>"You usually buy bananas on Saturdays—add them now?"</h5>
            <h5 ref={ref => addToRefs(ref, titleRefs)}>Get alerts for unfinished lists before store visits.</h5>
          </ul>
          <ul className='space-y-2'>
            <h4 
              ref={ref => addToRefs(ref, titleRefs)}
              className='tracking-wide'
            >
              <strong className='mr-3 text-red-500'>//</strong>
              Shared Lists
            </h4>
            <h5 ref={ref => addToRefs(ref, titleRefs)}>Invite others via link (web) or chat (WhatsApp/Telegram).</h5>
            <h5 ref={ref => addToRefs(ref, titleRefs)}>Real-time updates for team shopping or household tasks.</h5>
          </ul>
        </div>
        <div>
          <h3 
            ref={ref => addToRefs(ref, titleRefs)}
            className='tracking-wider text-lg mb-3'
          >
            Pro Tips for Power Users
          </h3>
          <ul className='space-y-2'>
            <li ref={ref => addToRefs(ref, textRefs)}>
              <strong>Voice Commands:</strong> "Neatly, add 'dog food' to my Pets list."
            </li>
            <li ref={ref => addToRefs(ref, textRefs)}>
              <strong>Shortcuts:</strong> Type "ls" to see all lists, "done [item]" to check off.
            </li>
            <li ref={ref => addToRefs(ref, textRefs)}>
              <strong>Integrations:</strong> Connect to Google Keep/Todoist (coming soon).
            </li>
          </ul>
        </div>
      </div>

      <div 
        ref={ref => {
          addToRefs(ref, dividersRefs)
          addToRefs(ref, sectionRefs)
        }}
        className='h-0.5 w-full bg-neutral-500 rounded-4xl'
      />

      <div 
        ref={ref => addToRefs(ref, sectionRefs)}
        className='flex flex-col gap-6'
      >
        <h2 
          ref={ref => addToRefs(ref, titleRefs)}
          className='tracking-widest text-2xl text-center'
        >
          Why Neatly Feels Like a Friend
        </h2>
        <div className='w-1/2 flex flex-col gap-3 pl-12'>
          <span 
            ref={ref => addToRefs(ref, textRefs)}
            className='tracking-wider font-bold'
          >
            Unlike rigid apps, Neatly adapts to your style:
          </span>
          <ul className='space-y-3 ml-6'>
            <li 
              ref={ref => addToRefs(ref, textRefs)}
              className=''
            >
              Remembers your frequent buys.
            </li>
            <li 
              ref={ref => addToRefs(ref, textRefs)}
              className='ml-3'
            >
              Suggests alternatives ("Out of quinoa? Try couscous!").
            </li>
            <li 
              ref={ref => addToRefs(ref, textRefs)}
              className='ml-6'  
            >
              Works where you do—no app switching.
            </li>
          </ul>
        </div>
        
      </div>

      <div 
        ref={ref => addToRefs(ref, sectionRefs)}
        className='flex flex-col gap-6'
      >
        <h2 
          ref={ref => addToRefs(ref, titleRefs)}
          className='tracking-widest text-2xl text-center'
        >
          Start Organizing Smarter
        </h2>
        <div 
          className='w-[50%] flex flex-col gap-3 self-end'
        >
        <span ref={ref => addToRefs(ref, textRefs)} className='text-center'>
          <strong>Web Users:</strong> Click <Link href={'#'}>Try It Now</Link> to start instantly.
        </span>
        <span ref={ref => addToRefs(ref, textRefs)} className='text-center'>
          <strong>Mobile Users:</strong> Message Neatly on <Link href={'#'}>WhatsApp</Link>, <Link href={'#'}>Telegram</Link>, or <Link href={'#'}>Discord</Link>.
        </span>
        <span ref={ref => addToRefs(ref, textRefs)} className='text-center'>
          Your lists, your rules—Neatly just makes them effortless.
        </span>
        </div>
        
      </div>

      <div 
        ref={ref => addToRefs(ref, sectionRefs)}
        className='flex flex-col gap-6'  
      >
        <h3 
          ref={ref => addToRefs(ref, titleRefs)}
          className='tracking-wider text-lg text-center'
        >
          Design Notes for Your Page
        </h3>
        <ul className='space-y-2 text-center mb-6'>
          <li ref={ref => addToRefs(ref, textRefs)}>
            Use <strong>icons</strong> (🛒, 🤖, 🔄) for visual breaks.
          </li>
          <li ref={ref => addToRefs(ref, textRefs)}>
            Highlight <strong>cross-platform</strong> logos (WhatsApp/Telegram/Discord) near the "Try Now" button.
          </li>
          <li ref={ref => addToRefs(ref, textRefs)}>
            Add a short GIF/video showing Neatly in action across apps.
          </li>
        </ul>
      </div>

      <div 
        ref={ref => {
          addToRefs(ref, dividersRefs)
          addToRefs(ref, sectionRefs)
        }}
        className='h-0.5 w-full bg-neutral-500 rounded-4xl'
      />

      <div className='h-1/2 relative flex flex-col gap-12'>
        <span 
          ref={ref => addToRefs(ref, textRefs)}
          className='tracking-wider text-lg text-center' 
        >
          Got questions? <br/> Reply "Help" in any chat or visit our FAQ.
        </span>
        <span 
          ref={ref => addToRefs(ref, textRefs)}
        >
          Would you like me to refine any section further?
        </span>

        <div className='absolute bottom-2 right-1/2 translate-x-1/2'>
          <LinkBtn href={'/'}>/Home</LinkBtn>
        </div>
        
      </div>

    </div>
  )
}