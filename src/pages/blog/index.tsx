import { useState } from 'react'
import { NextPage } from 'next'
import 'twin.macro'

import { DefaultLayout } from '@/layouts/default-layout'
import { Seo } from '@/elements/seo'
import { Button } from '@/elements/atoms/button'
import { Heading } from '@/elements/atoms/headings'

const Blog: NextPage<{ code: string }> = ({ code }) => {
  return (
    <DefaultLayout>
      <Seo title="Blog" />
      <div tw="container mx-auto">
        <p>Coming with more blog stuff</p>
      </div>
    </DefaultLayout>
  )
}

export default Blog
