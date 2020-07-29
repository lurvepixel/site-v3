import { forwardRef } from 'react'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { useRouter } from 'next/router'
import tw, { styled } from 'twin.macro'

interface LinkProps extends NextLinkProps {
  children?: React.ReactNode
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>(({ children, ...props }, ref) => {
  const router = useRouter()
  const active =
    props.as != null ? props.as === router.pathname : props.href === router.pathname

  return (
    <NextLink {...props}>
      <ActualLink active={active} ref={ref} tabIndex={0} children={children} />
    </NextLink>
  )
})

export const ActualLink = styled.a<{ active?: boolean }>(({ active = false }) => [
  tw`text-sky-blue-700 cursor-pointer`,
  active && tw`text-blue-700`,
])

export default Link
