import tw, { styled } from 'twin.macro'

import { font } from '~/styles'

export const Heading = {
  H1: styled.h1(tw`text-sky-gray-700 text-5xl tracking-tight leading-tight`, font.display),
  H2: styled.h2(tw`text-sky-gray-700 text-3xl leading-snug`, font.monoBold),
  H3: styled.h3(tw`text-sky-gray-700 text-2xl leading-snug`, font.monoBold),
}
