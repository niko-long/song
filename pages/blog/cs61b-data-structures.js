import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const CS61BDataStructures = () => {
  return (
    <Layout title="CS61B Java Project">
      <Container>
        <Title>
          CS61B: Data Structures in Java <Badge>2024</Badge>
        </Title>
        <P>
          My experience with UC Berkeley's CS61B course, focusing on data structures 
          and algorithms implementation in Java. This project helped me build a strong 
          foundation in computer science fundamentals.
        </P>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Java, Git, JUnit</span>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/niko-long/cs61b-sp21">
              Github <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <WorkImage src="/images/contents/class-in-java-python.png" alt="CS61B Project" />
      </Container>
    </Layout>
  )
}

export default CS61BDataStructures
export { getServerSideProps } from '../../components/chakra' 