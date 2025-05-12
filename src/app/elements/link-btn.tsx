import { ReactNode } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

import Link, { LinkProps} from 'next/link'

interface ILinkBtn extends Omit<LinkProps, 'href'>,
 VariantProps<typeof LinkBtnVariants>{
  children: ReactNode
  href: LinkProps['href']
}

const LinkBtnVariants = tv({
  base: [
    'px-6 py-1.5 text-center tracking-wider relative overflow-hidden',
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
    '[&>span]:transition-[transform] [&>span]:duration-500'
  ],
  variants: {
    size: {
      fit: 'w-fit',
      full: 'w-full'
    }
  },
  defaultVariants: {
    size: 'fit'
  }
})

export function LinkBtn({ href, children, size, ...props }: ILinkBtn) {
  return (
    <Link
      {...props}
      href={href}
      className={LinkBtnVariants({ size })}
    >
      {children}
    </Link>
  )
}