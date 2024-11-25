import { Container, Badge, SimpleGrid, Text, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { PhotoTitle as Title, PhotoImage as WorkImage, PhotoMeta as Meta } from '../../components/photography'
import P from '../../components/paragraph'

const DutchNationalPark = () => {
  return (
    <Layout title="Dutch National Park">
      <Container>
        <Title>
          Dutch National Park <Badge>2024</Badge>
        </Title>
        
        <P>
          A serene photographic journey through the Zuid-Kennemerland National Park 
          near Zandvoort. This coastal dune landscape offers a unique blend of 
          rolling sand dunes, dense forests, and pristine beaches along the North Sea.
        </P>
        
        <List ml={4} my={4}>
          <ListItem>
            <Meta>LOCATION</Meta>
            <span>Zandvoort, The Netherlands</span>
          </ListItem>
          <ListItem>
            <Meta>CAMERA</Meta>
            <span>Nikon Z6</span>
          </ListItem>
          <ListItem>
            <Meta>PERIOD</Meta>
            <span>October 2024</span>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 1]} gap={6}>
          <WorkImage 
            src="/images/photography/dutch-national-park/Zandvoort-Dunes-Landscape1.jpg" 
            alt="Zandvoort Dunes Landscape" 
          />
          <WorkImage 
            src="/images/photography/dutch-national-park/Zandvoort-Dunes-Landscape2.jpg" 
            alt="Coastal Vegetation" 
          />
          <WorkImage 
            src="/images/photography/dutch-national-park/Zandvoort-Dunes-Landscape3.jpg" 
            alt="Zandvoort Dunes River" 
          />
          <WorkImage 
            src="/images/photography/dutch-national-park/Zandvoort-Dunes-Landscape4.jpg" 
            alt="Deer" 
          />
          <WorkImage 
            src="/images/photography/dutch-national-park/Zandvoort-Dunes-Landscape5.jpg" 
            alt="Yutong" 
          />

        </SimpleGrid>

        <SimpleGrid columns={[1, 2]} gap={6}>
          <WorkImage 
            src="/images/photography/dutch-national-park/Zandvoort-Dunes-Landscape4.jpg" 
            alt="Deer" 
          />
          <WorkImage 
            src="/images/photography/dutch-national-park/Zandvoort-Dunes-Landscape5.jpg" 
            alt="Yutong" 
          />

        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default DutchNationalPark
export { getServerSideProps } from '../../components/chakra' 