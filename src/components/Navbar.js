import React from 'react'
import {Link} from 'react-scroll'
import { Box, Text, Flex, Button,} from '@chakra-ui/react'

export default function NavBar() {

  return (
    <Box
      w='100%'
      padding='20px 20px'
      fontFamily='Mukta, sans-serif'
      fontSize='2xl'
      bgGradient='linear(to-b, black, rgba(255,0,0,0) )'
      pos='fixed'
    >
      <Flex
       justify='space-between'
       align='center'
      >
        <Text
          color='#FFC380'
          fontSize='3xl'
        >
          <Link
             to='header'
              smooth={true}
              duration={1000}
          >
            Ies Muller
          </Link>
        </Text>
        <Box
        >
          <Flex
            justify='space-evenly'
            align='center'
            gap='20px'
            color='white'
            >
            <Link 
              to='bio'
              smooth={true}
              duration={1000}
              offset={-20}
            >Bio</Link>
            <Link
              to='lessen'
              smooth={true}
              duration={1000}
              offset={-50}
            >Lessen</Link>
            <Link
             to='workshops'
              smooth={true}
              duration={1000}
              offset={-50}
            >Workshops</Link>
            <Link
              to='studio'
              smooth={true}
              duration={1000}
              offset={-50}
            >Studio</Link>
            <Link
             to='groepen'
              smooth={true}
              duration={1000}
              offset={-50}
            >Groepen</Link>
            <Button colorScheme='blue'>
              Boek nu!
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}
