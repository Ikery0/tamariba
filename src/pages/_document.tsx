import Document, { Html, Head, Main, NextScript } from "next/document";


class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <meta name="color-scheme" content="light dark"></meta>
          <link 
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          />
          <link 
            href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" 
            rel="stylesheet" 
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument