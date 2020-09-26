import tw, { styled } from 'twin.macro'
import { forwardRef } from 'react'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { useRouter } from 'next/router'

import { font } from '@/styles'

interface LinkProps extends NextLinkProps {
  children?: React.ReactNode
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, ...props }, ref) => {
    const router = useRouter()
    const active =
      props.as != null ? props.as === router.pathname : props.href === router.pathname

    return (
      <NextLink {...props}>
        <ActualLink active={active} ref={ref} tabIndex={0} children={children} />
      </NextLink>
    )
  }
)

export const ActualLink = styled.a<{ active?: boolean }>(({ active = false }) => [
  font.monoBold,
  tw`text-sm text-sky-black cursor-pointer border-b-2 border-gray-500`,
  active && tw`border-gray-400`,
])
