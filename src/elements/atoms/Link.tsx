import { forwardRef } from 'react'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import tw, { styled } from 'twin.macro'

interface LinkProps extends NextLinkProps {
  children?: React.ReactNode
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>(({ children, ...props }, ref) => {
  return (
    <NextLink {...props}>
      <ActualLink ref={ref} tabIndex={0} children={children} />
    </NextLink>
  )
})

const ActualLink = styled.a(tw`text-sky-blue-700 cursor-pointer`)

export default Link
