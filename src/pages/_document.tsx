import Document, { Html, Head, Main, NextScript } from 'next/document'

/**
 * only use this if you want to create an element outside of React tree (eg. Portal)
 */

class Doc extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <script src="/noflash.js" />
          <Main />
          {/* <div id="modal" /> */}
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Doc
