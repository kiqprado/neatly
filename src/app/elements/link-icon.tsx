import { ReactNode} from 'react'
import { tv, type VariantProps} from 'tailwind-variants'

import Link, { LinkProps } from 'next/link'

interface ILinkIcon extends Omit<LinkProps, 'href'>,
VariantProps<typeof LinkIconVariants> {
  children: ReactNode
  href: LinkProps['href']
}

const LinkIconVariants = tv({
  base: [
    'absolute z-10',
    'transition-all duration-200 ease-in-out',
    'hover:scale-110 hover:brightness-125',
    'active:scale-95 active:brightness-75',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'
  ],
  variants: {
    variant: {
      primary: [
        'bg-neutral-950 text-white',
      ],
      secondary: [
        'bg-none text-current',
        
      ]
    },
    position: {
      left: 'top-3 left-1',
      right: 'top-0 right-0'
    }
  },
  defaultVariants: {
    variant: 'secondary',
    position: 'right'
  }
});

export function LinkIcon({ href, children, variant, position, ...props }: ILinkIcon) {
  return (
    <Link
      {...props}
      href={href}
      className={LinkIconVariants({ variant, position })}
    >
      {children}
    </Link>
  )
}