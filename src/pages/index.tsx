import 'twin.macro'
import { useState } from 'react'
import { NextPage } from 'next'

import { DefaultLayout } from '@/layouts/default-layout'
import { Seo } from '@/elements/seo'
import { Button } from '@/elements/atoms/button'
import { Heading } from '@/elements/atoms/headings'

const Home: NextPage<{ code: string }> = ({ code }) => {
  const [counter, setCounter] = useState(0)

  return (
    <DefaultLayout>
      <Seo title="Home" />
      <div tw="container mx-auto">
        <div tw="py-16">
          <Heading.H1>Ajit Singh</Heading.H1>
          <Heading.H1>How did we designed latest carbon</Heading.H1>
          <Heading.H2>How did we designed latest carbon</Heading.H2>
          <Heading.H3>How did we designed latest carbon</Heading.H3>
          <div>
            <p tw="mt-2 text-lg">This guy makes and breaks stuff, mostly apps.</p>
          </div>
        </div>
        <p>
          {counter}
          <Button kind="default" onClick={() => setCounter(c => c + 6)}>
            Create an account Login
          </Button>
          nxdcndj
        </p>
      </div>
    </DefaultLayout>
  )
}

export default Home
