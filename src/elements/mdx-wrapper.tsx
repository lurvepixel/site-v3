import tw, { css } from 'twin.macro'
import { MDXProvider } from '@mdx-js/react'

import { Heading } from '@/elements/atoms/headings'
import { ActualLink } from '@/elements/atoms/link'
import { CodeBlock } from '@/elements/code-block'
import lightTheme from '@/elements/code-block/customizedNightOwlLight'
import { FC, WC } from '@/common/types'
import { font } from '@/styles'

export const MdxWrapper: FC<WC> = ({ children }) => {
  return (
    <MDXProvider
      components={{
        wrapper: WrapperEl as React.ComponentType<{ children: React.ReactNode }>,
        h1: Heading.H1,
        h2: Heading.H2,
        h3: Heading.H3,
        a: ActualLink,
        p: props => <p tw="leading-normal text-lg" {...props} />,
        inlineCode: InlineCode,
        pre: Pre,
        code: CodeBlock as React.ComponentType<{ children: React.ReactNode }>,
      }}
      children={children}
    />
  )
}

const WrapperEl: FC<WC<{
  meta?: {
    created?: string
  }
}>> = ({ meta = {}, ...props }) => (
  <div
    css={css`
      ${tw`container mx-auto`}

      /* TODO insert into tailwind as container-content */
      /* TODO selection color + in input too */
      @media (min-width: 1024px) {
        max-width: 768px;
      }

      @media (min-width: 1280px) {
        max-width: 768px;
      }
    `}
    {...props}
  />
)

const InlineCode: FC<WC> = props => (
  <code
    css={css`
      ${font.mono}
      ${tw`rounded text-sm`}
    `}
    style={{
      ...(props['style'] ?? {}),
      padding: '2px 4px',
      // Night Owl
      // background: '#011627',
      // color: '#d6deeb',
      // Night Owl Light

      color: lightTheme.plain.color,
      background: lightTheme.plain.backgroundColor,
    }}
    {...props}
  />
)

const Pre: FC = props => <div {...props} />
