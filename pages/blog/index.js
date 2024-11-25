import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { WorkGridItem } from '../../components/grid-item'

import thumbClassInJavaPython from '../../public/images/contents/class-in-java-python.png'
import thumbDataVisualization from '../../public/images/contents/DataVisualization-1.jpeg'

const Blog = () => (
  <Layout title="Blog">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Blog Posts
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            category="blog"
            id="cs61b-data-structures"
            title="My First Java Project in UCB cs61b"
            thumbnail={thumbClassInJavaPython}
          >
            Data Structures and Algorithms implementation in Java
          </WorkGridItem>
        </Section>
        
        <Section>
          <WorkGridItem
            category="blog"
            id="data-visualization-project"
            title="Data Visualization with Svelte"
            thumbnail={thumbDataVisualization}
          >
            How to start your first data visualization project
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Blog
export { getServerSideProps } from '../../components/chakra' 