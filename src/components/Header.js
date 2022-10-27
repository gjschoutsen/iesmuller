import { Box, Image, Flex, IconButton, Link, Text } from '@chakra-ui/react';
import React from 'react';
import Cover from '../oldImages/iesmuller-main-header_2500px.jpg';
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineMail,
} from 'react-icons/ai';

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
        position="relative"
        src={Cover}
        alt="Ies Muller"
        objectFit="fill"
        zIndex={'0'}
      ></Image>
      <Flex direction="column" gap="20px" pos="absolute" top="5%" right="20%">
        <Flex align="center" gap="20px">
          <IconButton
            icon={<AiOutlineFacebook />}
            bg="none"
            fontSize="50px"
            // colorScheme="blue"
          ></IconButton>
          <Link>
            <Text fontSize="3xl">Let's meet!</Text>
          </Link>
        </Flex>
        <Flex align="center" gap="20px">
          <IconButton
            icon={<AiOutlineInstagram />}
            bg="none"
            fontSize="50px"
            colorScheme="blue"
          ></IconButton>
          <Link>
            <Text fontSize="3xl">Let's meet!</Text>
          </Link>
        </Flex>
        <Flex align="center" gap="20px">
          <IconButton
            icon={<AiOutlineMail />}
            bg="none"
            fontSize="50px"
            colorScheme="blue"
          ></IconButton>
          <Link>
            <Text fontSize="3xl">Let's meet!</Text>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
