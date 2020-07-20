import { useState } from "react";
import { NextPage } from "next";
import Head from "next/head";
import "twin.macro";

import DefaultLayout from "layouts/DefaultLayout";
import Button from "elements/atoms/Button";

const Home: NextPage = () => {
  const [counter, setCounter] = useState(0);

  return (
    <DefaultLayout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 tw="font-bold">cdkcbdcbdjndc cndkcnd</h1>

      <Button onClick={() => setCounter((c) => c + 6)}>{counter}</Button>
      <p>yay</p>
    </DefaultLayout>
  );
};

export default Home;
