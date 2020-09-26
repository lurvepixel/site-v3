import tw, { styled } from 'twin.macro'

import { font, Kind } from '@/styles'

type ButtonKind = Extract<Kind, 'default' | 'accent'>

interface ButtonProps {
  fullWidth?: boolean
  kind?: ButtonKind
}

export const Button = styled.button<ButtonProps>(
  ({ fullWidth = false, kind = 'default' }) => {
    const kindMap: Record<ButtonKind, any> = {
      default: tw`text-sky-black bg-sky-gray-300 border-b-2 border-sky-gray-500`,
      accent: tw`bg-sky-black text-white`,
    }

    return [
      font.monoBold,
      tw`text-sm px-3 py-2 rounded tracking-wide`,
      fullWidth && tw`w-full`,
      kindMap[kind],
    ]
  }
)
