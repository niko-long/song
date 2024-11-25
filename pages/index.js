import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoLinkedin, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import thumbYouTube from '../public/images/works/youtube.png'
import Image from 'next/image'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        <p>Hello, I&apos;m a Data Science student and aspiring Machine Learning Engineer based in Belgium & the Netherlands!</p>
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
          Xiaolong Song
          </Heading>
          <p>Digital Hiking ( Machine Learning Engineer / Photographer / Former Underground Structure Engineer )</p>
          <p>机器学习练习生,时长一年半    (╯°□°）╯︵📚 </p>
          
          
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/xiaolong32.jpg"
              alt="Profile image"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
        Xiaolong Song is currently a passionate second-year master's student based in Belgium with a strong 
        interest in Data Science and Computer Science. Driven by curiosity, he continuously expands his knowledge 
        in areas such as Machine Learning, Deep Learning, and MLOps, while actively exploring other topics within 
        computer science. He is currently working on a project called {''}
        <NextLink href="/works/aed_optmizer"><Link>Machine learning Enhanced AED Loacation Optimization in Belgium</Link></NextLink>
        .
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
                <BioYear>1993</BioYear>
                    Born in Shandong (山东省), China.
                </BioSection>
                <BioSection>
                <BioYear>2019</BioYear>
                    Completed a Master&apos;s degree in Civil Engineering at Tianjin University(天津大学)
                </BioSection>
                <BioSection>
                <BioYear>2019</BioYear>
                    Worked at China Railway Design Corporation(中国铁路设计集团)
                </BioSection>
                <BioSection>
                <BioYear>2024</BioYear>
                Master&apos;s student in Statistics and Data Science at KU Leuven.
                </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I like
        </Heading>
        <Paragraph>
          Hiking, {''}
          <Link href="https://www.youtube.com/watch?v=G6j9rYqLFG8">Photography & Making Videos</Link>
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
        <ListItem>
                        <Link href="https://github.com/niko-long" target='_blank'>
                        <Button variant="ghost" colorScheme='teal' leftIcon={< IoLogoGithub />}>
                            @Coding Patrick Star
                        </Button>
                        </Link>
                        <Link href="https://www.linkedin.com/in/xiaolong-song-858069294/" target='_blank'>
                        <Button variant="ghost" colorScheme='teal' leftIcon={< IoLogoLinkedin />}>
                            @Xiaolong Song
                        </Button>
                        </Link>
                        <Link href="https://www.instagram.com/xiaolongsonggg/" target='_blank'>
                        <Button variant="ghost" colorScheme='teal' leftIcon={< IoLogoInstagram />}>
                            @xiaolongsonggg
                        </Button>
                        </Link>
                        
                        
                    </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/@niko_pppppp113"
            title="Coding Patrick Star"
            thumbnail={thumbYouTube}
          >
            My YouTube channel
          </GridItem>
        </SimpleGrid>

      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
