import React from 'react'
import { Flex, Text, Image } from '@chakra-ui/react'

export default function Features({
  id,
  image,
  title,
  text,
  flexDir,
  gradient,
  link
}) {
  return (

    <Flex
      id={id}
      padding='0 20px 0 20px'
      direction='column'
      justify='center'
      bgGradient={gradient}
      minH='800px'
      gap='4rem'
    >
      <Flex
        justify='center'
      >
        <Text
          fontSize='4xl'
        >
          {title}
        </Text>
      </Flex>

      <Flex
        align='center'
        justify='center'
        direction={flexDir}
        gap='2rem'
        padding='0'
      >
        <Flex
          justify='center'
        >
          <Image
            maxW='70%'
            borderRadius='full'
            boxShadow='dark-lg'
            src={image}
          ></Image>
        </Flex>
        <Flex
          w={['100%', '100%', '50%', '50%']}
        // padding={['0px', '0px', '90px', '90px']}
        >
          <Text
            fontSize='xl'
          >
            {text}
          </Text>
        </Flex>
      </Flex>


    </Flex>
  )
}
