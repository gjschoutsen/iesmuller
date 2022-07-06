import React from 'react'
import '../css/NavBar.css'
import { Link } from 'react-scroll'
import { Text, Flex, Button, } from '@chakra-ui/react'

export default function NavBar() {

  const linksArr = [
    {
      id: 1,
      to: 'bio',
      title: 'Bio'
    },
    {
      id: 2,
      to: 'lessen',
      title: 'Lessen'
    },
    {
      id: 3,
      to: 'workshops',
      title: 'Workshops'
    },
    {
      id: 4,
      to: 'studio',
      title: 'Studio'
    },
    {
      id: 5,
      to: 'groepen',
      title: 'Groepen'
    },
  ]

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
        {linksArr.map((link) => {
          return (
            <Link key={link.id}
              // activeClass='active'
              to={link.to}
              smooth={true}
              duration={1000}
              offset={-50}
              isDynamic
            >
              <Text
                _hover={{ color: "#FFC380" }}
                cursor='pointer'
              >
                {link.title}
              </Text>
            </Link>
          )
        })}
        <Button colorScheme='blue'>
          Boek nu!
        </Button>
      </Flex>
    </Flex>
  )
}
