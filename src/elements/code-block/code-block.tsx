import tw, { css, theme as twTheme } from 'twin.macro'
import Highlight, {
  defaultProps as prismDefaultProps,
  Language,
  PrismTheme,
} from 'prism-react-renderer'
import darksyntaxTheme from 'prism-react-renderer/themes/nightOwl'
import lightsyntaxTheme from './customizedNightOwlLight'

import { FC, WC } from '~/shared/types'
import { font } from '~/styles'

export const CodeBlock: FC<WC<{ className?: string }>> = ({ children, className = '' }) => {
  const lang = String(className).replace(/language-/, '')

  return (
    <Highlight
      {...prismDefaultProps}
      theme={lightsyntaxTheme as PrismTheme}
      code={children?.toString().trim() ?? ''}
      language={lang as Language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div>
          <div tw="flex justify-end">
            <div
              css={css`
                ${font.monoBold}
                ${tw`inline-block text-sm border border-b-0 text-sky-gray-500 text-right px-3 py-1 rounded leading-none mr-4`}
                background-color: ${lightsyntaxTheme.plain.backgroundColor}
              `}
            >
              {lang.toUpperCase()}
            </div>
          </div>
          <pre
            css={css`
              ${tw`block overflow-auto rounded px-5 py-3 border`}
              ${font.mono}
              max-width: 768px;
            `}
            className={className}
            style={{
              ...style,
              padding: '20px',
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
        </div>
      )}
    </Highlight>
  )
}
