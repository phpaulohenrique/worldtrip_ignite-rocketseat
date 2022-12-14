import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from '../styles/theme';
import '../styles/swiper.css'


function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ChakraProvider theme={theme}>
          <Header />
          <Component {...pageProps} />
      </ChakraProvider>
  );
}

export default MyApp
