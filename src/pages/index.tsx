import { useState } from 'react'
import { NextPage } from 'next'
import 'twin.macro'
import ky from 'ky-universal'

import DefaultLayout from 'layouts/DefaultLayout'
import Seo from 'elements/Seo'
import Button from 'elements/atoms/Button'
import { H1 } from 'elements/atoms/headings'
import SyntaxHighlighter from 'elements/SyntaxHighlighter'

const Home: NextPage<{ code: string }> = ({ code }) => {
  const [counter, setCounter] = useState(0)

  return (
    <DefaultLayout>
      <Seo title="Home" />
      <div tw="container mx-auto">
        <H1>Configuration</H1>
        <p>
          <Button onClick={() => setCounter(c => c + 6)}>
            Create an account {counter}
          </Button>
          nxdcndj
        </p>
        <SyntaxHighlighter code={code} />
      </div>
    </DefaultLayout>
  )
}

export async function getStaticProps(context) {
  const { code } = (await ky
    .post('http://localhost:3000/api/get-theme', {
      json: {
        code: `const Home: NextPage<{ code: string }> = ({ code }) => {
  const [counter, setCounter] = useState(0)

  return (
    <DefaultLayout>
      <Seo title="Home" />
      <H1>Configuration</H1>
      <p>
        <Button onClick={() => setCounter(c => c + 6)}>
          Create an account {counter}
        </Button>
        nxdcndj
      </p>
      <SyntaxHighlighter code={code} />
    </DefaultLayout>
  )
}`,
        lang: 'tsx',
      },
    })
    .json()) as {
    code: string
  }

  return {
    props: {
      code,
    },
  }
}

export default Home
