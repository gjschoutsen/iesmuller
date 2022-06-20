import { Box, Image, Button } from '@chakra-ui/react'
import React from 'react'
import Cover from "../old-images/Ies Muller Wooden Flute.jpeg"

export default function Header() {
  return (
    <Box
      w='100%'
      h='1000px'
      bg='black'
      pt='84px'
    >
      <Image 
        src={Cover} 
        alt='Ies Muller'
        objectFit='fill'
      ></Image>
      <Box
          pos='absolute'
      >
        <Button
          colorScheme='blue'
        >Boek nu!</Button>
      </Box>
    </Box>
  )
}
