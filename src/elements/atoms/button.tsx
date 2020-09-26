import tw, { styled, css } from 'twin.macro'

import { font, Kind } from '@/styles'

type ButtonKind = Extract<Kind, 'default' | 'accent'>

interface ButtonProps {
  fullWidth?: boolean
  kind?: ButtonKind
}

export const Button = styled.button<ButtonProps>(
  ({ fullWidth = false, kind = 'default' }) => {
    const kindMap: Record<ButtonKind, any> = {
      default: tw`text-sky-gray-700 bg-white border border-gray-300`,
      accent: tw`bg-sky-black text-white border border-sky-black`,
    }

    return [
      font.monoBold,
      tw`text-sm px-3 py-2 rounded tracking-wide`,
      fullWidth && tw`w-full`,
      kindMap[kind],
    ]
  }
)
