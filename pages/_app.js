import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { SnackbarProvider } from 'notistack';
import { Button } from '@mui/material';
import '../styles/globals.css';
import { SnackbarProviders } from '../src/components/toast/toast';
import theme from '../src/components/themes';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const notistackRef = React.createRef();

  const onClickDismiss = (key) => {
    notistackRef.current.closeSnackbar(key);
  };
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>BRM UI</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link
          href="https://fonts.cdnfonts.com/css/nexa-bold"
          rel="stylesheet"
        />
        {/* <link
          href="//db.onlinewebfonts.com/c/2eccf178aa2ce410df13a179ba3b3761?family=Nexa-Book"
          rel="stylesheet"
        /> */}
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCmNsV9SMhms66t9NoFCEjVcg6ZXbb-L_w&libraries=places" />
        <meta name="google" content="notranslate" />
      </Head>
      <ThemeProvider theme={theme}>
        <SnackbarProvider
          ref={notistackRef}
          action={(key) => (
            <Button onClick={() => onClickDismiss(key)}>Dismiss</Button>
          )}
        >
          <SnackbarProviders>
            <CssBaseline />
            {/* <UserProvider> */}
            <Component {...pageProps} />
            {/* </UserProvider> */}
          </SnackbarProviders>
        </SnackbarProvider>
      </ThemeProvider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
