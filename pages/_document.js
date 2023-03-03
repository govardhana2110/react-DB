import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@mui/styles';
import theme from '../src/components/themes';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" translate="no">
        <Head>
          <meta name="theme-color" content={theme.palette.primary.main} />
          {/* <link rel="preconnect" href="https://fonts.gstatic.com" /> */}
          {/* <link
            href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.cdnfonts.com/css/nexa-bold"
            rel="stylesheet"
          /> */}
          {/* <link
            href="//db.onlinewebfonts.com/c/2eccf178aa2ce410df13a179ba3b3761?family=Nexa-Book"
            rel="stylesheet"
          /> */}
          {/* <link href="/static/fonts/Nexa-Book.ttf" rel="stylesheet" /> */}
        </Head>
        {/* <script
          defer
          src="https://www.paypal.com/sdk/js?client-id=AcjoCunqNXvfBA0Xgnpqbh8GAs4f4O1bSQKRkwEG95FGwKNK36MdLyfkrbsHodP0zZHFCApt33uxmjWR&currency=USD"
        /> */}
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;
  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });
  const initialProps = await Document.getInitialProps(ctx);
  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};
