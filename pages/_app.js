import { ChakraProvider } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { useEffect } from "react";
import Footer from "../components/sections/Footer";
import Navbar from "../components/sections/Navbar";
import theme from "../config/theme";
import * as gtag from "../lib/gtag";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title>Abu Aziz - Portfolio & Writings</title>
        <meta
          name="description"
          content="Professional Software Developer 
          who experienced on software development 
          and currently running Expasion Works"
        />
        <link rel="icon" href="/icons/banana.png" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <ChakraProvider theme={theme}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
