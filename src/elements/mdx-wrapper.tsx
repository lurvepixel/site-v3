import 'twin.macro'
import { MDXProvider } from '@mdx-js/react'

import { Heading } from 'elements/atoms/headings'
import { CodeBlock } from 'elements/code-block'
import { ActualLink } from 'elements/atoms/link'
import { FC, WC } from 'common/types'

export const MdxWrapper: FC<WC> = ({ children }) => {
  return (
    <MDXProvider
      components={{
        wrapper: WrapperEl as React.ComponentType<{ children: React.ReactNode }>,
        h1: Heading.H1,
        a: ActualLink,
        p: props => <p tw="leading-relaxed text-lg" {...props} />,
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
}>> = ({ meta = {}, ...props }) => <div tw="container mx-auto" {...props} />

const InlineCode: FC<WC> = props => (
  <code
    tw="rounded font-mono text-sm"
    style={{
      ...(props['style'] ?? {}),
      padding: '2px 4px',
      // Night Owl
      background: '#011627',
      color: '#d6deeb',
    }}
    {...props}
  />
)

const Pre: FC = props => <div {...props} />
