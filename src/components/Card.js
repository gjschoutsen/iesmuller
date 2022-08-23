import React from 'react';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Image,
  Textarea,
} from '@chakra-ui/react';

export default function Card({ image, title, textp1, textp2, artists }) {
  return (
    <Center py={6}>
      <Box
        maxW={'445px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}
      >
        <Box bg={'gray.100'} mt={-6} mx={-6} mb={6}>
          <Image src={image} layout={'fill'} />
        </Box>
        <Stack>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}
          >
            {title}
          </Heading>
          <Text color={'gray.500'}>{textp1}</Text>
          <Text color={'gray.500'}>{textp2}</Text>
          <Text color={'#616161'}>{artists}</Text>
        </Stack>
      </Box>
    </Center>
  );
}
