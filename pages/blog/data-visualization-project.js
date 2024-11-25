import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const DataVisualizationWithSvelte = () => {
  return (
    <Layout title="Data Visualization with Svelte">
      <Container>
        <Title>
          Data Visualization Project <Badge>2024</Badge>
        </Title>
        <P>
          A guide to building your first data visualization project using Svelte. 
          This project demonstrates how to create interactive visualizations for 
          game sales data analysis.
        </P>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Svelte, D3.js, JavaScript</span>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/niko-long/SalesVisualisationInGame_Svelte">
              Github <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <WorkImage src="/images/contents/DataVisualization-1.jpeg" alt="Data Visualization" />
      </Container>
    </Layout>
  )
}

export default DataVisualizationWithSvelte
export { getServerSideProps } from '../../components/chakra'