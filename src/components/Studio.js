import React from 'react';
import { Flex, Text, AspectRatio, Box } from '@chakra-ui/react';

export default function Studio({ studioTextP1, studioTextP2 }) {
  return (
    <Box bg="black" minH="800px" paddingBottom="200px">
      <Flex
        id="studio"
        direction="column"
        padding="30px"
        align="center"
        gap="3rem"
        w="100%"
      >
        <Text fontSize="4xl">-Studio-</Text>
        <Text fontSize="xl" maxWidth="40rem">
          {studioTextP1}
        </Text>
        <Text fontSize="xl" maxWidth="40rem">
          {studioTextP2}
        </Text>
      </Flex>
      <Box padding="30px" zIndex="0">
        <AspectRatio ratio={16 / 9}>
          <iframe
            title="parade"
            src="https://player.vimeo.com/video/180756965?h=2193231f23"
            width="1920"
            height="1080"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </AspectRatio>
      </Box>
    </Box>
  );
}
