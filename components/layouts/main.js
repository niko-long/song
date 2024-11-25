import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Xiaolong's homepage" />
        <meta name="author" content="Xiaolong Song" />
        <meta name="author" content="niko-long" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Xiaolong Song" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@xiaolongsonggg" />
        <meta name="twitter:creator" content="@xiaolongsonggg" />
        <meta property="og:site_name" content="Xiaolong Song" />
        <meta name="og:title" content="Xiaolong Song" />
        <meta property="og:type" content="website" />
        <title>Xiaolong Song - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelDog />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
