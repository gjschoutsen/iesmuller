import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Flex,
  Text,
  Textarea,
  FormErrorMessage,
  Box,
} from '@chakra-ui/react';
import { useState } from 'react';

//code for netlify form
const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

export default function Form({ toggleForm }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    toggleForm(false);
    const messageInfo = { name, email, message };
    //code for netlify form
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...messageInfo }),
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error));

    e.preventDefault();

    console.log(messageInfo);
  };

  const isErrorNaam = name === '';
  const isErrorEmail = email === '';
  const isErrorBericht = message === '';

  return (
    <>
      <Flex
        position="overlay"
        width="100%"
        minH="100%"
        backdropFilter="auto"
        backdropBlur="8px"
        pos="absolute"
        color="gray.700"
        onClick={() => {
          toggleForm(false);
        }}
      >
        {/* <IconButton></IconButton> */}
      </Flex>
      <Flex align="center" justify="center" direction="column">
        <Flex
          position="fixed"
          top="5%"
          zIndex="overlay"
          direction="column"
          bg="#BEE3F8"
          padding="3rem"
          borderRadius="2xl"
          boxShadow="dark-lg"
        >
          <Box position="absolute" zIndex="overlay" top="20px" right="20px">
            <Button
              color="black"
              variant="outline"
              borderColor="black"
              _hover={{ bg: '#6ab7d8' }}
              onClick={() => {
                toggleForm(false);
              }}
            >
              x
            </Button>
          </Box>
          <Text fontSize="5xl" color="black" borderColor>
            Contact
          </Text>
          <FormControl isInvalid={isErrorNaam} isRequired mt={6}>
            <FormLabel fontSize="1.5rem" color="black">
              Naam:
            </FormLabel>
            <Input
              value={name}
              onChange={e => {
                setName(e.target.value);
              }}
              borderColor="black"
              color="black"
              bg="white"
              _hover={{ borderColor: '#2B6CB0' }}
            />
            {isErrorNaam && (
              <FormErrorMessage fontSize="lg">Vul uw naam in</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={isErrorEmail} isRequired mt={6}>
            <FormLabel fontSize="1.5rem" color="black">
              Email:
            </FormLabel>
            <Input
              value={email}
              onChange={e => {
                setEmail(e.target.value);
              }}
              borderColor="black"
              color="black"
              bg="white"
              type="email"
              _hover={{ borderColor: '#2B6CB0' }}
            />
            {isErrorEmail && (
              <FormErrorMessage fontSize="lg">
                Vul uw emailadres in
              </FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={isErrorBericht} isRequired mt={6}>
            <FormLabel fontSize="1.5rem" color="black">
              Bericht:
            </FormLabel>
            <Textarea
              value={message}
              onChange={e => {
                setMessage(e.target.value);
              }}
              borderColor="black"
              color="black"
              bg="white"
              _hover={{ borderColor: '#2B6CB0' }}
            />
            {isErrorBericht && (
              <FormErrorMessage fontSize="lg">
                Schrijf hier uw bericht
              </FormErrorMessage>
            )}
          </FormControl>
          <Button
            type="submit"
            mt={6}
            color="black"
            variant="outline"
            borderColor="black"
            _hover={{ bg: '#6ab7d8' }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
