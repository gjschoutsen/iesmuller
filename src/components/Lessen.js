import { useState, useEffect } from 'react';
import Features from './Features';
import Form from './Form';
import LessonImage from '../oldImages/header-lessen.jpeg';
import { Flex, Text, Box, Button } from '@chakra-ui/react';

export default function Lessen({
  lessenTextP1,
  lessenTextP2,
  locatie,
  losseLes,
  vijfLessen,
  tienLessen,
}) {
  const [form, setForm] = useState(false);

  const toggleForm = toggle => {
    setForm(toggle);
  };

  useEffect(() => {
    if (form) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  }, [form]);

  return (
    <>
      {form && <Form toggleForm={toggleForm} />}
      <Flex
        id={'lessen'}
        minH="800px"
        paddingTop="30px"
        display="column"
        bg="black"
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
        <Flex padding="40px" display="column" textAlign="center">
          <Text fontSize="xl" paddingBottom="20px">
            {locatie}
          </Text>
          <Text fontSize="3xl" paddingBottom="10px">
            Tarieven:
          </Text>
          <Flex gap="40px" paddingBottom="50px" justify="center">
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
          <Button
            colorScheme="blue"
            onClick={() => {
              toggleForm(true);
            }}
          >
            Boek nu je les!
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
