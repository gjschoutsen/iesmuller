import React from 'react'
import { Flex, Text, Image } from '@chakra-ui/react'

export default function Features({
    image,
    title,
    text,
    flexDir,
    gradient
})
{
  return (
    <Flex
      padding='40px'
      direction='column'
      justify='center'
      bgGradient={gradient}
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
        padding='80px 0px 80px 0px'
      >
        <Flex 
          justify='center'
        >
          <Image
            borderRadius='full'
            boxShadow='dark-lg'
            src={image}
          ></Image>
        </Flex>
        <Flex
          w='50%'
          padding='90px'
          // border='solid #AD7534'
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
