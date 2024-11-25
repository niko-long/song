import { Container, Badge, Link, List, ListItem, Text } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const AEDOptimizer = () => {
    return (
        <Layout title="AED Optimizer">
            <Container>
                <Title>
                    AED Optimizer <Badge>2024</Badge>
                </Title>
                <P>
                    A machine learning-powered web application that predicts and optimizes survival rates 
                    for out-of-hospital cardiac arrest patients. The system analyzes intervention, hospital, 
                    and AED location data to suggest optimal placements for new AEDs.
                </P>

                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://github.com/niko-long/AED-Loacation-Optimization-in-Belgium-machine-learning-plotly-dash-">
                        AED-Loacation-Optimization-in-Belgium <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Python, Dash, Plotly, XGBoost, Scikit-learn</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Features</Meta>
                        <span>ML Prediction, Interactive Maps, Real-time Optimization</span>
                    </ListItem>
                </List>

                <Text fontSize={20} fontWeight="bold" mt={8} mb={4}>
                    Project Background
                </Text>
                <P>
                    Seconds are critical in out-of-hospital Sudden Cardiac Arrest (SCA) cases. Early 
                    defibrillation is key in the 'Chain of Survival'. Public-access AEDs (Automated 
                    External Defibrillators) enable bystanders to provide rapid cardiac defibrillation, 
                    significantly improving survival chances.
                </P>

                <Text fontSize={20} fontWeight="bold" mt={8} mb={4}>
                    Key Features
                </Text>
                <List ml={4} my={4}>
                    <ListItem>
                        • Interactive visualization of AED locations, hospitals, and patient data
                    </ListItem>
                    <ListItem>
                        • Real-time survival rate predictions using machine learning
                    </ListItem>
                    <ListItem>
                        • Interactive AED placement optimization
                    </ListItem>
                    <ListItem>
                        • City-wise mortality rate analysis and trends
                    </ListItem>
                </List>

                <WorkImage 
                    src="/images/works/ml-enhanced-AED-Location-Optimizer.png" 
                    alt="AED Optimizer Main Interface" 
                />

                <Text fontSize={20} fontWeight="bold" mt={8} mb={4}>
                    Technical Implementation
                </Text>
                <P>
                    The project utilizes XGBoost for survival rate prediction, achieving an AUC score 
                    of 0.613. Features include distance to nearest AED/hospital, temporal data, and 
                    geographical information. The web interface, built with Dash and Plotly, enables 
                    real-time visualization and interaction.
                </P>

                <Text fontSize={20} fontWeight="bold" mt={8} mb={4}>
                    Application Pages
                </Text>
                <List ml={4} my={4}>
                    <ListItem>
                        • Project Main Page: Overview and navigation
                    </ListItem>
                    <ListItem>
                        • AED Optimization: Interactive map for optimizing AED placement
                    </ListItem>
                    <ListItem>
                        • Monthly Mortality Analysis: City-wise mortality trends
                    </ListItem>
                    <ListItem>
                        • Yearly Analysis: Long-term mortality rate patterns
                    </ListItem>
                </List>

                <WorkImage 
                    src="/images/works/aed-optimizer-1.png" 
                    alt="Mortality Rate Analysis" 
                />
            </Container>
        </Layout>
    )
}

export default AEDOptimizer
export { getServerSideProps } from '../../components/chakra' 