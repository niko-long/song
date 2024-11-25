import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const TunnelSegmentSafety = () => (
    <Layout title="Tunnel Segment Safety">
        <Container>
            <Title>
                Tunnel Segment Safety <Badge>2022</Badge>
            </Title>
            <P>
                A specialized software solution for calculating the bearing capacity 
                of tunnel concrete structures. This tool helps civil engineers analyze 
                and ensure the structural safety of tunnel segments during the design 
                and construction phases.
            </P>

            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Windows / macOS</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>Python, PyQt, NumPy</span>
                </ListItem>
                <ListItem>
                    <Meta>Features</Meta>
                    <span>Structural Analysis, Safety Calculation, GUI Interface</span>
                </ListItem>
                <ListItem>
                    <Meta>Source</Meta>
                    <Link href="https://github.com/niko-long/TunnelSegmentSafety" target="_blank">
                        Github <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
            </List>

            <WorkImage 
                src="/images/works/segment.png" 
                alt="Tunnel Segment Safety Software Interface" 
            />
            <WorkImage 
                src="/images/works/segment-1.png" 
                alt="Calculation Results" 
            />
            <WorkImage 
                src="/images/works/segment-2.png" 
                alt="Safety Analysis Visualization" 
            />

            <P>
                This software was developed during my time as a civil engineer to streamline 
                the process of tunnel segment safety calculations. It incorporates industry 
                standards and best practices for structural analysis while providing an 
                intuitive user interface for engineers.
            </P>

            <P>Key features include:</P>
            <List ml={4} my={4}>
                <ListItem>• Automated bearing capacity calculations</ListItem>
                <ListItem>• Real-time safety factor analysis</ListItem>
                <ListItem>• Visual representation of results</ListItem>
                <ListItem>• Report generation capabilities</ListItem>
            </List>
        </Container>
    </Layout>
)

export default TunnelSegmentSafety
export { getServerSideProps } from '../../components/chakra' 