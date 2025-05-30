import { ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

import Link, { LinkProps } from 'next/link'

interface ILinkWithIcon extends Omit<LinkProps, 'href'>,
VariantProps<typeof LinkWithIconVariants>{
  children: ReactNode
  href: LinkProps['href']
}

const LinkWithIconVariants = tv({
  base: [
    'flex items-center gap-3 pl-2 pr-4 relative overflow-hidden',
    'border border-transparent rounded-2xl shadow-lg hover:shadow-lg',
    'transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]',
    'transform hover:scale-105 hover:-translate-y-1',
    'hover:[filter:brightness(1.05)_drop-shadow(0_2px_4px_rgba(0,0,0,0.2))]',
    'hover:shadow-[0_5px_15px_-5px_rgba(0,0,0,0.7)]',
    'hover:[transform:translateY(-0.25rem)_scale(1.02)]',
    'hover:[&>span]:[transform:scale(0.98)]',
    'before:content-[""] before:absolute before:inset-0',
    'before:bg-[linear-gradient(90deg,rgba(255,255,255,0.3)_0%,rgba(255,255,255,0)_70%)]',
    'before:opacity-0 hover:before:opacity-100',
    'before:transition-opacity before:duration-500',
    'active:scale-95 active:shadow-md',
    'active:[transform:translateY(0)_scale(0.98)]',
    '[&>span]:transition-[transform] [&>span]:duration-500',
  ],
  variants: {
    colors: {
      wpp: 'bg-emerald-400/20 hover:bg-emerald-300/70 hover:shadow-emerald-400/30',
      tel: 'bg-sky-400/20 hover:bg-sky-300/70 hover:shadow-sky-400/30',
      dis: 'bg-violet-400/20 hover:bg-violet-300/70 hover:shadow-violet-400/30',
      dft: 'w-fit justify-evenly bg-transparent hover:shadow-white/20'
    }
  },
  defaultVariants: {
    colors: 'dft',
  }
})

export function LinkWithIcon({ href, children, colors, ...props }: ILinkWithIcon) {
  return (
    <Link
      {...props}
      href={href}
      className={LinkWithIconVariants({ colors })}
      target='_blank'
    >
      {children}
    </Link>
  )
}