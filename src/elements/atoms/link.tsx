import tw, { styled } from 'twin.macro'
import { forwardRef } from 'react'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { useRouter } from 'next/router'

import { font } from '~/styles'

interface LinkProps extends NextLinkProps {
  children?: React.ReactNode
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, ...props }, ref) => {
    const router = useRouter()
    const active =
      props.as != null ? props.as === router.pathname : props.href === router.pathname

    const {
      href,
      as,
      passHref,
      prefetch,
      replace,
      scroll,
      shallow,
      ...fowardedLinkProps
    } = props
    const nextLinkProps = { href, as, passHref, prefetch, replace, scroll, shallow }

    return (
      <NextLink {...nextLinkProps} passHref>
        <ActualLink {...fowardedLinkProps} {...{ active, ref, children }} />
      </NextLink>
    )
  }
)

export const ActualLink = styled.a<{ active?: boolean }>(({ active = false }) => [
  font.sans,
  tw`border-b-2 border-blue-400 hocus:border-blue-600`,
  active && tw`border-blue-600`,
])
