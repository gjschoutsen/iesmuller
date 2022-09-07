import { Box, Image, Flex } from '@chakra-ui/react';
import React from 'react';
import Cover from '../old-images/Ies Muller Wooden Flute.jpeg';

export default function Header() {
  return (
    <Flex
      id="header"
      minH="800px"
      bg="black"
      pt="84px"
      direction="column"
      align="center"
      gap="3rem"
    >
      <Image
        // width={'100%'}
        // height={'70rem'}
        src={Cover}
        alt="Ies Muller"
        objectFit="fill"
      ></Image>
      <Box pos="absolute"></Box>
      {/* <Button
        className='Heeeeerrrrreeeeeee'
        // pos='absolute'
        // top='10%'
        size='lg'
        colorScheme='blue'
      >Boek nu!</Button> */}
    </Flex>
  );
}
