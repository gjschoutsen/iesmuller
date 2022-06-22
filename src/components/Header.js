import { Box, Image, Button, Flex } from '@chakra-ui/react'
import React from 'react'
import Cover from "../old-images/Ies Muller Wooden Flute.jpeg"
import Modal from './Modal'

export default function Header() {
  return (
    <Flex
      id='header'
      minH='1000px'
      bg='black'
      pt='84px'
      direction='column'
      align='center'
      gap='3rem'
    >
    <Modal />
      <Image 
        src={Cover} 
        alt='Ies Muller'
        objectFit='fill'
      ></Image>
      <Box
          pos='absolute'
      >
      </Box>
        <Button
          colorScheme='blue'
        >Boek nu!</Button>
    </Flex>
  )
}
