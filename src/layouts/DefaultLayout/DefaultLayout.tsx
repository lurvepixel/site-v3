const DefaultLayout: React.FC = ({ children }) => {
  return (
    <div>
      <header>stuff</header>
      <div>
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
