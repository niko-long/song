import { Container, Badge, SimpleGrid, Text, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { PhotoTitle as Title, PhotoImage as WorkImage, PhotoMeta as Meta } from '../../components/photography'
import P from '../../components/paragraph'

const BelgiumCountryside = () => {
  return (
    <Layout title="Belgium Countryside">
      <Container>
        <Title>
          Belgium Countryside <Badge>2024</Badge>
        </Title>
        
        <P>
          A serene exploration of the countryside around Leuven, Flemish Brabant. 
          These images capture the gentle landscapes of Central Belgium, featuring 
          peaceful walking trails through Heverleebos and Meerdaalwoud forests, 
          and the charming rural areas surrounding the university town.
        </P>
        
        <List ml={4} my={4}>
          <ListItem>
            <Meta>LOCATION</Meta>
            <span>Leuven Region, Belgium</span>
          </ListItem>
          <ListItem>
            <Meta>CAMERA</Meta>
            <span>Nikon Z6</span>
          </ListItem>
          <ListItem>
            <Meta>PERIOD</Meta>
            <span>January 2024</span>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2]} gap={6}>
          <WorkImage 
            src="/images/photography/belgium-hiking-1/heverleebos-1.jpg" 
            alt="Heverleebos Forest Trail" 
          />
          <WorkImage 
            src="/images/photography/belgium-hiking-1/heverleebos-2.jpg" 
            alt="Countryside Path" 
          />
        </SimpleGrid>

        <Text fontSize={20} fontWeight="bold" mt={8} mb={4}>
          Heverleebos & Meerdaalwoud
        </Text>
        <P>
          The combined forests of Heverleebos and Meerdaalwoud form one of the 
          largest forest areas in Flanders. These ancient woodlands offer a 
          network of walking trails, seasonal changes in vegetation, and glimpses 
          of local wildlife, all just a short distance from Leuven's city center.
        </P>
      </Container>
    </Layout>
  )
}

export default BelgiumCountryside
export { getServerSideProps } from '../../components/chakra' 