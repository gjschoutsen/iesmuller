import { useState, useEffect } from 'react'
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
} from '@chakra-ui/react'

export default function Calendar() {

    const API = "http://localhost:1337"
    const [texts, setTexts] = useState([])

    const fetchText = () => {
        Axios.get(`${API}/api/agendas`)
            .then((texts) => {
                setTexts(texts.data.data)
            })
            .catch((err) => { console.log("Error getting texts from API", err); })
    }

    const renderTable = () => {
        return (
            <TableContainer>
                <Table variant='striped' colorScheme='brand'>
                    <TableCaption>Concert agenda</TableCaption>
                    <Thead>
                        <Tr>
                            <Th
                                color='white'
                            >Datum</Th>
                            <Th
                                color='white'
                            >Groep</Th>
                            <Th
                                color='white'
                            >Locatie</Th>
                            <Th
                                color='white'
                            >Link</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {texts.length > 0 && texts.map((e) => {
                            return (
                                <Tr key={e.id}>
                                    <Td>{new Date(e.attributes.datum).toLocaleDateString()}</Td>
                                    <Td>{e.attributes.Groep}</Td>
                                    <Td>{e.attributes.Locatie}</Td>
                                    <Td>
                                        <Link href={e.attributes.Link} isExternal>Meer info</Link>
                                    </Td>
                                </Tr>
                            )
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
        )
    }

    useEffect(() => {
        fetchText()
    }, [])

    return (
        <>
            <Flex
                id='agenda'
                minHeight='800px'
                direction='column'
                justify='center'
                align={'center'}
                bgGradient='linear(to-b,#2384AD, black)'
            >
                <Text
                    fontSize='4xl'
                    paddingBottom='40px'
                >
                    -Agenda-
                </Text>
                {renderTable()}
            </Flex>
        </>
    )
}
