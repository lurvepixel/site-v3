import 'twin.macro'
import tw, { css, theme } from 'twin.macro'

const SyntaxHighlighter: React.FC<{ code: string }> = ({ code }) => {
  return (
    <div
      css={css`
        pre {
          ${tw`inline-block overflow-auto rounded px-5 py-3`}
          max-width: 768px;
        }
        code {
          ${tw`text-sm`}
          font-family: ${theme('fontFamily.mono')};
        }
      `}
      dangerouslySetInnerHTML={{ __html: code }}
    />
  )
}

export default SyntaxHighlighter
