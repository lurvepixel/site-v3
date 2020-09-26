import tw, { styled } from 'twin.macro'

import { font } from '@/styles'

export const Heading = {
  H1: styled.h1(tw`text-sky-gray-700 text-4xl tracking-tight leading-10`, font.display),
  H2: styled.h2(tw`text-sky-gray-700 text-2xl`, font.monoBold),
  H3: styled.h3(tw`text-sky-gray-700 text-xl`, font.monoBold),
}
