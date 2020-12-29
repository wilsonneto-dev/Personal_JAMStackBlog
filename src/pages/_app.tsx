import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import DefaultLayout from 'ui/layout/Default';
import GlobalStyles from 'styles/global';
import theme from 'styles/themes/default';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Wilson Neto - Blog - Fullstack .Net e JS</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;500;700&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,500;1,400&display=swap"
          rel="stylesheet"
        ></link>
        <meta
          name="description"
          content="Artigos sobre o dia a dia de um dev fullstack com .Net e com a Stack JS, seja com node ou com react"
        />
      </Head>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </ThemeProvider>
    </>
  );
}

export default App;
