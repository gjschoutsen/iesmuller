import React from 'react';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';

export default function Card({ image, title, textp1, textp2, artists }) {
  return (
    <Center py={6}>
      <Box
        maxW={'445px'}
        minH={'700px'}
        w={'full'}
        bg={useColorModeValue('#4a4a4a', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}
      >
        <Box bg={'#464646.100'} mt={-6} mx={-6} mb={6}>
          <Image src={image} layout={'fill'} />
        </Box>
        <Stack>
          <Heading
            color={useColorModeValue('#FFC380', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}
          >
            {title}
          </Heading>
          <Text color={'white'}>{textp1}</Text>
          <Text color={'white'}>{textp2}</Text>
          <Text paddingTop={'10px'} color={'#b5b5b5'}>
            {artists}
          </Text>
        </Stack>
      </Box>
    </Center>
  );
}
