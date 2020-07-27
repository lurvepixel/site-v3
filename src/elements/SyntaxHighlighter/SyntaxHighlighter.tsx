import 'twin.macro'
import { css, theme } from 'twin.macro'

const SyntaxHighlighter: React.FC<{ code: string }> = ({ code }) => {
  return (
    <div
      css={css`
        code {
          font-family: ${theme('fontFamily.mono')};
        }
      `}
      dangerouslySetInnerHTML={{ __html: code }}
    />
  )
}

export default SyntaxHighlighter
