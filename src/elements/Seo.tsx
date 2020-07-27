import Head from "next/head";

const Seo: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Head>
      <title>{title} | Carbon</title>
    </Head>
  );
};

export default Seo;
