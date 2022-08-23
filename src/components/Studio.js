import React from 'react';
import { Flex, Text, AspectRatio, Box } from '@chakra-ui/react';

export default function Studio({ studioText }) {
  return (
    <Box bgGradient="linear(to-b, #2384AD, #AD7534)" minH="800px">
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
          {studioText}
        </Text>
      </Flex>
      <Box padding="30px">
        <AspectRatio ratio={16 / 9}>
          <iframe
            title="parade"
            src="https://player.vimeo.com/video/180756965?h=2193231f23"
            // width={['1080px', '1080px', '1080px'÷, '1080px']}
            width="1920"
            height="1080"
            // frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </AspectRatio>
      </Box>
    </Box>
  );
}
