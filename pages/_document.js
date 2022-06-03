import Document, { Html, Head, Main, NextScript } from "next/document";


class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <div className="overlay"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// using this file we add elements to actual html
// <Main /> is actual nextJS div or we could say <div className='root'></div>
// so we add <div className=overlay></div> to create react portal for example

export default MyDocument;