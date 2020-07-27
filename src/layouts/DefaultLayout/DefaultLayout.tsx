import "twin.macro";

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <div tw="min-h-screen font-sans antialiased break-words text-sky-black bg-sky-gray-100">
      <header tw="border-b bg-sky-gray-300 py-3">
        <div tw="container mx-auto">
          <nav>heading</nav>
        </div>
      </header>
      <main>{children}</main>
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
