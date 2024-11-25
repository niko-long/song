import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { WorkGridItem } from '../../components/grid-item'

import thumbAED from '../../public/images/works/ml-enhanced-AED-Location-Optimizer.png'
import thumbOxyCat from '../../public/images/works/oxycat.png'
import thumbTunnel from '../../public/images/works/segment.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="aedoptimizer"
            title="AED Optimizer"
            thumbnail={thumbAED}
          >
            A machine learning-powered web application that optimizes AED placements
            for cardiac arrest survival rates in Belgium.
          </WorkGridItem>
        </Section>
        
        <Section>
          <WorkGridItem
            id="oxycat"
            title="OxyCat"
            thumbnail={thumbOxyCat}
          >
            Research team website for Bio Catalysis at TU Delft, showcasing
            academic work and publications.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="tunnel-segment-safety"
            title="Tunnel Segment Safety"
            thumbnail={thumbTunnel}
          >
            Specialized software for calculating tunnel concrete structure
            bearing capacity and safety analysis.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        {/* 可以添加合作项目 */}
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old Works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        {/* 可以添加旧项目 */}
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../../components/chakra' 