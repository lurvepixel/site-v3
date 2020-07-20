import "twin.macro";

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <div tw="min-h-screen font-sans antialiased break-words text-sky-black bg-sky-gray-100">
      <div tw="container mx-auto">
        <header>header stuff</header>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default DefaultLayout;

/*
TODO
 return (
    <div className="relative">
      <Seo title={pageTitle} />
      <div className="flex flex-col min-h-screen justify-between">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </div>
  );
*/
