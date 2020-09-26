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
      default: tw`text-sky-blue-700 bg-sky-blue-300`,
      accent: tw`bg-sky-blue-700 text-white`,
    }

    return [
      font.monoBold,
      tw`text-sm px-3 py-2 rounded tracking-wide`,
      fullWidth && tw`w-full`,
      kindMap[kind],
    ]
  }
)
