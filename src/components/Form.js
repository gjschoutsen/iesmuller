import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Flex,
  Text,
  Textarea,
  FormErrorMessage,
} from '@chakra-ui/react';
import { useState } from 'react';

//code for netlify form
const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

export default function Form({ toggleForm }) {
  const [naam, setNaam] = useState('');
  const [email, setEmail] = useState('');
  const [bericht, setBericht] = useState('');

  const handleSubmit = e => {
    toggleForm(false);
    const message = { naam, email, bericht };
    //code for netlify form
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...message }),
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error));

    e.preventDefault();

    console.log(message);
  };

  const isErrorNaam = naam === '';
  const isErrorEmail = email === '';
  const isErrorBericht = bericht === '';

  return (
    <>
      <Flex
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
          top="10%"
          zIndex="overlay"
          direction="column"
          bg="#BEE3F8"
          padding="4rem"
          borderRadius="2xl"
          boxShadow="dark-lg"
        >
          <Text fontSize="5xl" color="black" borderColor>
            Contact
          </Text>
          <FormControl isInvalid={isErrorNaam} isRequired mt={6}>
            <FormLabel fontSize="1.5rem" color="black">
              Naam:
            </FormLabel>
            <Input
              value={naam}
              onChange={e => {
                setNaam(e.target.value);
              }}
              borderColor="black"
              color="black"
              bg="white"
              _hover={{ borderColor: '#2B6CB0' }}
            />
            {isErrorNaam && (
              <FormErrorMessage fontSize="lg">Vul uw naam in.</FormErrorMessage>
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
                Vul hier uw emailadres in.
              </FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={isErrorBericht} isRequired mt={6}>
            <FormLabel fontSize="1.5rem" color="black">
              Bericht:
            </FormLabel>
            <Textarea
              value={bericht}
              onChange={e => {
                setBericht(e.target.value);
              }}
              borderColor="black"
              color="black"
              bg="white"
              _hover={{ borderColor: '#2B6CB0' }}
            />
            {isErrorBericht && (
              <FormErrorMessage fontSize="lg">
                Schrijf hier uw bericht.
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
