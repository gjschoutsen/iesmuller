import React from 'react';
import { Flex, Text, Image } from '@chakra-ui/react';

export default function Features({
  id,
  image,
  title,
  textp1,
  textp2,
  flexDir,
  gradient,
}) {
  return (
    <Flex
      id={id}
      padding="0 40px 0 40px"
      direction="column"
      justify="center"
      bg="black"
      // minH÷="800px"
      gap="4rem"
    >
      <Flex justify="center">
        <Text fontSize="4xl">{title}</Text>
      </Flex>

      <Flex
        align="center"
        justify="space-between"
        direction={flexDir}
        gap="2rem"
        padding="0"
      >
        <Flex justify="center">
          <Image
            maxW="70%"
            borderRadius="full"
            boxShadow="dark-lg"
            src={image}
          ></Image>
        </Flex>
        <Flex w={['100%', '100%', '50%', '50%']} display="column">
          <Text fontSize="xl" paddingBottom="20px">
            {textp1}
          </Text>
          <Text fontSize="xl">{textp2}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
