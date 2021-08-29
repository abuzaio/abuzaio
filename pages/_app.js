import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import Footer from "../components/sections/Footer";
import Navbar from "../components/sections/Navbar";
import theme from "../config/theme";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
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
        <link rel="icon" href="/banana.png" />
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
