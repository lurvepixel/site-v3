import 'twin.macro'
import { MDXProvider } from '@mdx-js/react'

import { H1 } from 'elements/atoms/headings'
import CodeBlock from 'elements/CodeBlock'
import { ActualLink } from 'elements/atoms/Link'

const MdxWrapper: React.FC = ({ children }) => {
  return (
    <MDXProvider
      components={{
        wrapper: WrapperEl as React.ComponentType<{ children: React.ReactNode }>,
        h1: H1,
        a: ActualLink,
        inlineCode: InlineCode,
        pre: Pre,
        code: CodeBlock as React.ComponentType<{ children: React.ReactNode }>,
      }}
      children={children}
    />
  )
}

const WrapperEl: React.FC<{
  meta?: {
    created?: string
  }
}> = ({ meta = {}, ...props }) => <div tw="container mx-auto" {...props} />

const InlineCode: React.FC = props => (
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

const Pre: React.FC = props => <div {...props} />

export default MdxWrapper
