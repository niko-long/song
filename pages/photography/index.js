import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { WorkGridItem } from '../../components/grid-item'

// 导入摄影作品的缩略图
import thumbDutchParks from '../../public/images/photography/dutch-national-park/cover.jpg'
import thumbBelgium from '../../public/images/photography/belgium-hiking-1/cover.jpg'

const Photography = () => (
  <Layout title="Photography">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Photography
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem 
            category="photography" 
            id="dutch-national-park" 
            title="Dutch National Park" 
            thumbnail={thumbDutchParks}
          >
            Exploring the coastal dunes and pristine beaches of Zuid-Kennemerland National Park
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem 
            category="photography"
            id="belgium-countryside" 
            title="Leuven Countryside" 
            thumbnail={thumbBelgium}
          >
            Exploring the peaceful forests and trails around Leuven, from Heverleebos 
            to Meerdaalwoud
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Urban Photography
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        {/* 添加旅行摄影作品 */}
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Photography
export { getServerSideProps } from '../../components/chakra'
