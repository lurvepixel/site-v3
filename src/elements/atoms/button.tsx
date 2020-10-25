import tw, { styled, css } from 'twin.macro'

import { font, Kind } from '~/styles'

type ButtonKind = Extract<Kind, 'default' | 'accent'>

interface ButtonProps {
  fullWidth?: boolean
  kind?: ButtonKind
}

export const Button = styled.button<ButtonProps>(
  ({ fullWidth = false, kind = 'default' }) => {
    const kindMap: Record<ButtonKind, any> = {
      default: tw`text-sky-gray-700 bg-gray-100 border-gray-400`,
      accent: tw`bg-sky-blue-700 text-white border-sky-blue-700`,
    }

    return [
      font.serifBold,
      tw`text-sm px-4 py-2 border rounded-2xl tracking-wide`,
      fullWidth && tw`w-full`,
      kindMap[kind],
    ]
  }
)
