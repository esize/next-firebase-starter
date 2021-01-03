import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';

import { AuthProvider } from '../utils/auth';

import customTheme from '../styles/customTheme';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={customTheme}>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        ></meta>
      </Head>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
};

export default MyApp;
