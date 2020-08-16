import { useState } from 'react'
import { NextPage } from 'next'
import 'twin.macro'

import DefaultLayout from 'layouts/DefaultLayout'
import Seo from 'elements/Seo'
import { Button } from 'elements/atoms/button'
import { H1 } from 'elements/atoms/headings'

const Home: NextPage<{ code: string }> = ({ code }) => {
  const [counter, setCounter] = useState(0)

  return (
    <DefaultLayout>
      <Seo title="Home" />
      <div tw="container mx-auto">
        <div tw="py-16">
          <H1 tw="text-6xl leading-none">Ajit Singh</H1>
          <div>
            <p tw="mt-2 text-lg">This guy makes and breaks stuff, mostly apps.</p>
          </div>
        </div>
        <p>
          <Button onClick={() => setCounter(c => c + 6)}>
            Create an account {counter}
          </Button>
          nxdcndj
        </p>
      </div>
    </DefaultLayout>
  )
}

export default Home
