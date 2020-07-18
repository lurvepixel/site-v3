import { useState } from "react";
import { NextPage } from "next";
import Head from "next/head";

import tw, { styled } from "twin.macro";

const Button = styled.button(tw`font-bold w-full inline-block bg-pink-600`);

const Home: NextPage = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div tw="container mx-auto">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Button onClick={() => setCounter((c) => c + 6)}>{counter}</Button>
        <p>yay</p>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
