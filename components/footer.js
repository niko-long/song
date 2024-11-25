import { Box, Link, Text } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      <Text>
        &copy; {new Date().getFullYear()} Xiaolong Song. All Rights Reserved.
      </Text>
      <Text>
        This website is built based on the{' '}
        <Link href="https://www.craftz.dog/" target="_blank">
          Takuya Matsuyama&apos;s website
        </Link>
      </Text>
    </Box>
  )
}

export default Footer
