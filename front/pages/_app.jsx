import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import { Container } from '../components/App/styles';
import GlobalStyles from '../assets/styles/global';
import defaultTheme from '../assets/styles/themes/default';

export default function App({ Component, pageProps }) {
  return (
    <main>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Head>
          <title>My Contacts</title>
          <meta
            name="description"
            content="Generated by create next app"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          />

          <link
            rel="icon"
            href="/favicon.ico"
          />
        </Head>

        <Container>
          <Component {...pageProps} />
        </Container>

      </ThemeProvider>
    </main>
  );
}
