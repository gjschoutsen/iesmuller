import React from 'react'
import '../css/NavBar.css'
import { Link } from 'react-scroll'
import { Text, Flex, Button, } from '@chakra-ui/react'

export default function NavBar() {

  return (
    <Flex
      w='100%'
      padding='20px 20px'
      fontFamily='Mukta, sans-serif'
      fontSize='2xl'
      bgGradient='linear(to-b, black, rgba(255,0,0,0) )'
      pos='fixed'
      justify='space-between'
      align='center'
    >
      <Link
        to='header'
        smooth={true}
        duration={1000}
      >
        <Text
          color='#FFC380'
          fontSize='3xl'
          cursor='pointer'
        >
          Ies Muller
        </Text>
      </Link>
      <Flex
        justify='space-evenly'
        align='center'
        gap='20px'
        color='white'
      >
        <Link
          activeClass='active'
          to='bio'
          smooth={true}
          duration={1000}
          offset={-20}
          isDynamic
        >
          <Text
            _hover={{ color: "#FFC380" }}
            cursor='pointer'
          >
            Bio
          </Text>
        </Link>
        <Link
          to='lessen'
          smooth={true}
          duration={1000}
          offset={-50}
          isDynamic
        >
          <Text
            _hover={{ color: "#FFC380" }}
            cursor='pointer'
          >
            Lesson
          </Text>
        </Link>
        <Link
          to='workshops'
          smooth={true}
          duration={1000}
          offset={-50}
          isDynamic
        >
          <Text
            _hover={{ color: "#FFC380" }}
            cursor='pointer'
          >
            Workshops
          </Text>
        </Link>
        <Link
          to='studio'
          smooth={true}
          duration={1000}
          offset={-50}
          isDynamic
        >
          <Text
            _hover={{ color: "#FFC380" }}
            cursor='pointer'
          >
            Studio
          </Text>
        </Link>
        <Link
          to='groepen'
          smooth={true}
          duration={1000}
          offset={-50}
          isDynamic
        >
          <Text
            _hover={{ color: "#FFC380" }}
            cursor='pointer'
          >
            Groepen
          </Text>
        </Link>
        <Button colorScheme='blue'>
          Boek nu!
        </Button>
      </Flex>
    </Flex>
  )
}
