import {Container, Badge, Link, List, ListItem} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import {Title, WorkImage, Meta} from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const OxyCat = () => {
    return (
        <Layout title="OxyCat">
            <Container>
                <Title>
                    OxyCat <Badge>2024</Badge>
                </Title>
                <P>
                    A website designed and implemented for the Bio Catalysis research team 
                    at TU Delft (Netherlands). The site showcases the team's research work 
                    and publications in the field of bio-catalysis.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://niko-long.github.io/oxycat-lab-website/' target="_blank">
                            https://niko-long.github.io/oxycat-lab-website/ 
                            <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Ruby, React, Python</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Web</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/oxycat.png" alt="OxyCat Homepage" />
                <WorkImage src="/images/works/oxycat-1.png" alt="OxyCat Research Page" />
                <WorkImage src="/images/works/oxycat-2.png" alt="OxyCat Team Page" />
            </Container>
        </Layout>
    )
}

export default OxyCat
export { getServerSideProps } from '../../components/chakra'