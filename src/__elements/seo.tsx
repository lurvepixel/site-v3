import Head from 'next/head'

import { FC } from '@/common/types'

export const Seo: FC<{ title: string }> = ({ title }) => {
  return (
    <Head>
      <title>{title} | Carbon</title>
    </Head>
  )
}
