import React from 'react'
import Features from './Features'
import { Flex, Text } from '@chakra-ui/react'

export default function Studio({ studioText }) {
  return (
    <>
      <Flex
        id='studio'
        direction='column'
        align='center'
        gap='3rem'
        bgGradient='linear(to-b, #2384AD, #AD7534)'
      >
        <Text
          fontSize='4xl'
        >
          -Studio-
        </Text>
        <Text
          fontSize='xl'
          maxWidth='40rem'
        >
          {studioText}
        </Text>

        <iframe
          title='parade'
          src="https://player.vimeo.com/video/180756965?h=2193231f23"
          width={['320', '320', "640", '640']}
          height="360px"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullscreen
        >
        </iframe>
      </Flex>
    </>
  )
}
