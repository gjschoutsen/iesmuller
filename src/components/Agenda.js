import { useState, useEffect } from 'react';
import Axios from 'axios';
import {
  Flex,
  Text,
  Link,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
} from '@chakra-ui/react';

export default function Calendar() {
  const API = 'http://localhost:1337';
  const [texts, setTexts] = useState([]);

  const fetchText = () => {
    Axios.get(`${API}/api/agendas`)
      .then(texts => {
        setTexts(texts.data.data);
      })
      .catch(err => {
        console.log('Error getting texts from API', err);
      });
  };

  const renderTable = () => {
    return (
      <TableContainer display={['none', 'none', 'block', 'block']}>
        <Table variant="striped" colorScheme="brand">
          <TableCaption>Concert agenda</TableCaption>
          <Thead>
            <Tr>
              <Th color="white">Datum</Th>
              <Th color="white">Groep</Th>
              <Th color="white">Locatie</Th>
              <Th color="white">Link</Th>
            </Tr>
          </Thead>
          <Tbody>
            {texts.length > 0 &&
              texts.map(e => {
                return (
                  <Tr key={e.id}>
                    <Td>{new Date(e.attributes.datum).toLocaleDateString()}</Td>
                    <Td>{e.attributes.Groep}</Td>
                    <Td>{e.attributes.Locatie}</Td>
                    <Td>
                      <Link
                        textDecoration="underline"
                        href={e.attributes.Link}
                        isExternal
                      >
                        Meer info
                      </Link>
                    </Td>
                  </Tr>
                );
              })}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Datum</Th>
              <Th>Groep</Th>
              <Th>Locatie</Th>
              <Th>Link</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    );
  };

  const renderMobileTable = () => {
    return (
      <Box display={['block', 'block', 'none', 'none']}>
        <Flex direction="column" gap="20px">
          {texts &&
            texts.map(e => {
              return (
                <Flex
                  direction="column"
                  borderBottom="solid white 2px"
                  paddingBottom="10px"
                >
                  <Box>{new Date(e.attributes.datum).toLocaleDateString()}</Box>
                  <Box>{e.attributes.Groep}</Box>
                  <Box>Locatie: {e.attributes.Locatie}</Box>
                  <Link
                    textDecoration="underline"
                    href={e.attributes.Link}
                    isExternal
                  >
                    Meer info
                  </Link>
                </Flex>
              );
            })}
        </Flex>
      </Box>
    );
  };

  useEffect(() => {
    fetchText();
  }, []);

  return (
    <>
      <Flex
        id="agenda"
        minHeight="800px"
        direction="column"
        justify="center"
        align={'center'}
        bg="black"
        padding="30px"
        paddingBottom="800px"
      >
        <Text fontSize="4xl" paddingBottom="40px">
          -Agenda-
        </Text>
        {renderTable()}
        {renderMobileTable()}
      </Flex>
    </>
  );
}
