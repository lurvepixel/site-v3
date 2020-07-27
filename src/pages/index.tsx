import { useState } from 'react'
import { NextPage } from 'next'
import 'twin.macro'

import DefaultLayout from 'layouts/DefaultLayout'
import Seo from 'elements/Seo'
import Button from 'elements/atoms/Button'
import { H1 } from 'elements/atoms/headings'

const Home: NextPage = () => {
  const [counter, setCounter] = useState(0)

  return (
    <DefaultLayout>
      <Seo title="Home" />
      <H1>Configuration</H1>
      <p>
        <Button onClick={() => setCounter(c => c + 6)}>Create an account {counter}</Button>
        nxdcndj
      </p>
    </DefaultLayout>
  )
}

export default Home
