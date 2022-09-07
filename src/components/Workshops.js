import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

export default function Workshops({
  wsTitel1,
  wsTitel2,
  wsTitel3,
  wsText1,
  wsText2,
  wsText3,
}) {
  return (
    <>
      <Flex
        id="workshops"
        direction="column"
        // textAlign="center"
        alignItems="center"
        bg="black"
        minH="800px"
        padding="30px"
        paddingBottom="200px"
        gap="40px"
      >
        <Text as="h1" fontSize="4xl">
          -Workshops-
        </Text>
        <Text as="h2" fontSize="3xl">
          {wsTitel1}
        </Text>
        <Text fontSize="xl" maxW="40rem">
          {wsText1}
        </Text>

        <Text as="h2" fontSize="3xl">
          {wsTitel2}
        </Text>
        <Text fontSize="xl" maxW="40rem" paddingBottom="50px">
          {wsText2}
        </Text>

        <Text as="h2" fontSize="3xl">
          {wsTitel3}
        </Text>
        <Text fontSize="xl" maxW="40rem">
          {wsText3}
        </Text>
      </Flex>
    </>
  );
}
