import { forwardRef } from 'react'
import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
  Button
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import { IoLogoGithub } from 'react-icons/io5'

// 创建一个客户端专用的导航链接组件
const ClientSideLink = ({ href, children, ...props }) => {
  return (
    <NextLink href={href} passHref legacyBehavior>
      <Button as="a" variant="ghost" {...props}>
        {children}
      </Button>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props
  const bgColor = useColorModeValue('#ffffff40', '#20202380')
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')

  const menuItems = [
    { href: '/works', label: 'Works' },
    { href: '/blog', label: 'Blog' },
    { href: '/photography', label: 'Photography' }
  ]

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={bgColor}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <NextLink href="/" passHref>
              <Box as="a" cursor="pointer">
                <Logo />
              </Box>
            </NextLink>
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
          spacing={4}
        >
          {menuItems.map(({ href, label }) => (
            <Box key={href}>
              <NextLink href={href} passHref>
                <Button
                  as="a"
                  variant="ghost"
                  p={2}
                  color={path === href ? '#202023' : inactiveColor}
                  bg={path === href ? 'grassTeal' : undefined}
                >
                  {label}
                </Button>
              </NextLink>
            </Box>
          ))}
          
          <Button
            as="a"
            variant="ghost"
            href="https://github.com/niko-long"
            target="_blank"
            rel="noopener noreferrer"
            leftIcon={<IoLogoGithub />}
          >
            Github
          </Button>
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                {menuItems.map(({ href, label }) => (
                  <MenuItem key={href} onClick={() => window.location.href = href}>
                    {label}
                  </MenuItem>
                ))}
                <MenuItem
                  onClick={() => window.open('https://github.com/niko-long', '_blank')}
                >
                  View Source
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
