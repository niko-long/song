import { Box, List, ListItem, Link } from '@chakra-ui/react'

const TableOfContents = ({ posts }) => (
  <Box
    as="nav"
    position="sticky"
    top="20px"
    w="200px"
    ml={8}
    display={{ base: 'none', lg: 'block' }}
  >
    <List spacing={2}>
      {posts.map(post => (
        <ListItem key={post.id}>
          <Link
            href={`#${post.id}`}
            fontSize="sm"
            color="gray.600"
            _hover={{ color: 'teal.500' }}
          >
            {post.title}
          </Link>
        </ListItem>
      ))}
    </List>
  </Box>
)

export default TableOfContents 