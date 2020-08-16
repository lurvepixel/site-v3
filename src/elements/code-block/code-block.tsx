import Highlight, {
  defaultProps as prismDefaultProps,
  Language,
} from 'prism-react-renderer'
import syntaxTheme from 'prism-react-renderer/themes/nightOwl'
import tw, { css } from 'twin.macro'
import { FC, WC } from 'common/types'

export const CodeBlock: FC<WC<{ className?: string }>> = ({ children, className = '' }) => {
  const lang = String(className).replace(/language-/, '')

  return (
    <Highlight
      {...prismDefaultProps}
      theme={syntaxTheme}
      code={children.toString().trim()}
      language={lang as Language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          css={css`
            ${tw`block overflow-auto rounded px-5 py-3 font-mono`}
            max-width: 768px;
          `}
          className={className}
          style={{ ...style, padding: '20px' }}
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

export default CodeBlock
