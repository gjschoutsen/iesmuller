import { Box, Text, Flex, Button, Link } from '@chakra-ui/react'
import React, {useRef} from 'react'

export default function NavBar() {
  const titleRef = useRef()

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
          Ies Muller
        </Text>
        <Box
        >
          <Flex
            justify='space-evenly'
            align='center'
            gap='20px'
            color='white'
            >
            <Link onClick={()=>{}}>Bio</Link>
            <Link>Lessen</Link>
            <Link>Workshops</Link>
            <Link>Studio</Link>
            <Link>Groepen</Link>
            <Button colorScheme='blue'>
              Boek nu!
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}
