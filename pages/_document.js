import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../lib/theme'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="Xiaolong Song's portfolio - Machine Learning Engineer and Data Scientist" />
          <meta name="author" content="Xiaolong Song" />
          <meta name="keywords" content="machine learning, data science, portfolio, Xiaolong Song" />
          <meta property="og:title" content="Xiaolong Song - Portfolio" />
          <meta property="og:description" content="Machine Learning Engineer and Data Scientist" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://xiaolongsong.vercel.app/" />
          <meta property="og:image" content="https://xiaolongsong.vercel.app/images/profile.jpg" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Xiaolong Song" />
          <meta name="twitter:description" content="Machine Learning Engineer and Data Scientist" />
          <meta name="twitter:image" content="https://xiaolongsong.vercel.app/images/profile.jpg" />
          <link
            rel="icon"
            href="/favicon-light.ico"
            media="(prefers-color-scheme: light)"
          />
          <link
            rel="icon"
            href="/favicon-dark.ico"
            media="(prefers-color-scheme: dark)"
          />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        </Head>
        <body>
          <svg style={{ display: 'none' }}>
            <filter id="paper-texture">
              <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch"/>
              <feColorMatrix type="saturate" values="0"/>
            </filter>
          </svg>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
