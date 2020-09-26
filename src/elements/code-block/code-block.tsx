import tw, { css, theme as twTheme } from 'twin.macro'
import Highlight, {
  defaultProps as prismDefaultProps,
  Language,
} from 'prism-react-renderer'
import darksyntaxTheme from 'prism-react-renderer/themes/nightOwl'
import lightsyntaxTheme from 'prism-react-renderer/themes/nightOwlLight'

import { FC, WC } from '@/common/types'
import { font } from '@/styles'

export const CodeBlock: FC<WC<{ className?: string }>> = ({ children, className = '' }) => {
  const lang = String(className).replace(/language-/, '')

  return (
    <Highlight
      {...prismDefaultProps}
      theme={lightsyntaxTheme}
      code={children?.toString().trim() ?? ''}
      language={lang as Language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          css={css`
            ${tw`block overflow-auto rounded px-5 py-3`}
            ${font.mono}
            max-width: 768px;
          `}
          className={className}
          style={{
            ...style,
            padding: '20px',
            backgroundColor: (twTheme`colors.gray.200` as unknown) as string,
          }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
