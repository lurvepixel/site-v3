import tw, { styled } from 'twin.macro'

import { font } from '~/styles'

export const Heading = {
  H1: styled.h1(
    tw`text-sky-gray-700 text-5xl tracking-tight leading-tight`,
    font.serifBold
  ),
  H2: styled.h2(tw`text-sky-gray-700 text-4xl leading-snug`, font.serifBold),
  H3: styled.h3(tw`text-sky-gray-700 text-3xl leading-snug`, font.serifBold),
}
