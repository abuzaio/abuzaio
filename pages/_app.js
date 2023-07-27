import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import { useEffect, useState } from "react";
import Footer from "../components/sections/Footer";
import Navbar from "../components/sections/Navbar";
import theme from "../config/theme";
import { Analytics } from '@vercel/analytics/react';

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false)

  useEffect(() => {
    setShowChild(true)
  }, [])

  if (!showChild) {
    return null
  }

  return (
    <>
      <Head>
        <title>Abu Aziz - Project & Blogs</title>
        <meta
          name="description"
          content="Professional Software Developer 
          who experienced on software development"
        />
        <link rel="icon" href="/icons/banana.png" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover, maximum-scale=7"
        />
      </Head>
      <ChakraProvider theme={theme}>
        <Navbar />
        <Component {...pageProps} />
        <Analytics />
        <Footer />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
