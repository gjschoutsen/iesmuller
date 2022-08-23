import React from 'react';
import Features from './Features';
import LessonImage from '../old-images/header-lessen.jpeg';
import { Flex, Text, Box } from '@chakra-ui/react';

export default function Lessen({
  lessenTextP1,
  lessenTextP2,
  locatie,
  losseLes,
  vijfLessen,
  tienLessen,
}) {
  console.log('in lessen', losseLes);
  return (
    <Flex
      id={'lessen'}
      minH="800px"
      paddingTop="30px"
      display="column"
      bgGradient={'linear(to-b,#2384AD, #AD7534)'}
    >
      <Features
        flexDir={[
          'column-reverse',
          'column-reverse',
          'row-reverse',
          'row-reverse',
        ]}
        image={LessonImage}
        title={'-Lessen-'}
        textp1={lessenTextP1}
        textp2={lessenTextP2}
      />
      <Flex padding="40px" display="column">
        <Text fontSize="xl" paddingBottom="20px">
          {locatie}
        </Text>
        <Text fontSize="3xl" paddingBottom="10px">
          Tarieven:
        </Text>
        <Flex gap="20px">
          <Box>
            <Text fontSize="xl">Losse les:</Text>
            <Text fontSize="xl">Vijf lessen:</Text>
            <Text fontSize="xl">Tien lessen:</Text>
          </Box>
          <Box>
            <Text fontSize="xl">€ {losseLes},-</Text>
            <Text fontSize="xl">€ {vijfLessen},-</Text>
            <Text fontSize="xl">€ {tienLessen},-</Text>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
