import Document, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "../config/theme";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=0.5, maximum-scale=6.0" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="application-name"
            content="Abu Aziz - Portfolio & Writings"
          />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta
            name="apple-mobile-web-app-title"
            content="Abu Aziz - Portfolio & Writings"
          />
          <meta
            name="description"
            content="Someone who have interest on tech and science"
          />
          <meta
            name="keywords"
            content="coding, programmer, mobile, flutter, react, node, laravel"
          />
          <meta name="developer" content="Abu Aziz" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta
            name="msapplication-config"
            content="/static/icons/browserconfig.xml"
          />
          <meta name="msapplication-TileColor" content="#2B5797" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#000000" />

          <link rel="apple-touch-icon" href="/icons/banana.png" />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/static/icons/touch-icon-ipad.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/icons/touch-icon-iphone-retina.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="167x167"
            href="/static/icons/touch-icon-ipad-retina.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/icons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/icons/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <link
            rel="mask-icon"
            href="/static/icons/banana.png"
            color="#5bbad5"
          />
          <link rel="shortcut icon" href="/icons/banana.png" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="https://abuzaio.me" />
          <meta
            name="twitter:title"
            content="Abu Aziz - Portfolio & Writings"
          />
          <meta
            name="twitter:description"
            content="Someone who have interest on tech and science"
          />
          <meta
            name="twitter:image"
            content="https://abuzaio.me/static/icons/android-chrome-192x192.png"
          />
          <meta name="twitter:creator" content="@abuzaio" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Abu Aziz - Portfolio & Writings" />
          <meta
            property="og:description"
            content="Someone who have interest on tech and science"
          />
          <meta property="og:site_name" content="Abuza Personal" />
          <meta property="og:url" content="https://abuzaio.me" />
          <meta
            property="og:image"
            content="https://abuzaio.me/static/icons/banana.png"
          />

          {/* <link rel='apple-touch-startup-image' href='/static/images/apple_splash_2048.png' sizes='2048x2732' />
          <link rel='apple-touch-startup-image' href='/static/images/apple_splash_1668.png' sizes='1668x2224' />
          <link rel='apple-touch-startup-image' href='/static/images/apple_splash_1536.png' sizes='1536x2048' />
          <link rel='apple-touch-startup-image' href='/static/images/apple_splash_1125.png' sizes='1125x2436' />
          <link rel='apple-touch-startup-image' href='/static/images/apple_splash_1242.png' sizes='1242x2208' />
          <link rel='apple-touch-startup-image' href='/static/images/apple_splash_750.png' sizes='750x1334' />
          <link rel='apple-touch-startup-image' href='/static/images/apple_splash_640.png' sizes='640x1136' /> */}

          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=UA-206149970-1`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'UA-206149970-1', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
