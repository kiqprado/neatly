import { ReactNode} from 'react'
import { tv, type VariantProps} from 'tailwind-variants'

import Link, { LinkProps } from 'next/link'

interface IButtonLink extends Omit<LinkProps, 'href'>,
VariantProps<typeof ButtonIconVariants> {
  children: ReactNode
  href: LinkProps['href']
}

const ButtonIconVariants = tv({
  base: [
    'absolute top-0 right-0 z-10',
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
    }
  },
  defaultVariants: {
    variant: 'secondary',
    size: 'md'
  }
});

export function ButtonIcon({ href, children, variant, ...props }: IButtonLink) {
  return (
    <Link
      {...props}
      href={href}
      className={ButtonIconVariants({ variant })}
    >
      {children}
    </Link>
  )
}