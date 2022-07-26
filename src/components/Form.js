import { Button, FormControl, FormLabel, Input, Flex, Text, Textarea } from '@chakra-ui/react'
import { useState } from 'react'


export default function Form({ toggleForm }) {
    const [submit, setSubmit] = useState('')

    const handleSubmit = () => {
        toggleForm(false)
    }

    return (
        <>
            <Flex
                width='100%'
                minH='100%'
                backdropFilter='auto'
                backdropBlur='8px'
                pos='absolute'
                color='gray.700'
                onClick={() => { toggleForm(false) }}
            >
            </Flex>
            <Flex
                align='center'
                justify='center'
                direction='column'
            >
                <Flex
                    position='fixed'
                    top='25%'
                    zIndex='overlay'
                    direction='column'
                    bg='#64CEFA'
                    padding='4rem'
                    borderRadius='2xl'
                    boxShadow='dark-lg'
                >
                    <Text
                        fontSize='5xl'
                        color='black'
                        borderColor
                    >
                        Contact
                    </Text>
                    <FormControl isRequired mt={6} >
                        <FormLabel
                            fontSize='1.5rem'
                            color='black'
                        >Naam:</FormLabel>
                        <Input
                            borderColor='black'
                            color='black'
                            _hover={{ borderColor: '#2384AD' }}
                        />
                    </FormControl>
                    <FormControl isRequired mt={6}>
                        <FormLabel
                            fontSize='1.5rem'
                            color='black'
                        >Email:</FormLabel>
                        <Input
                            borderColor='black'
                            color='black'
                            type='email'
                            _hover={{ borderColor: '#2384AD' }}
                        />
                    </FormControl>
                    <FormControl isRequired mt={6}>
                        <FormLabel
                            fontSize='1.5rem'
                            color='black'
                        >Bericht:</FormLabel>
                        <Textarea
                            borderColor='black'
                            color='black'
                            _hover={{ borderColor: '#2384AD' }}
                        />
                    </FormControl>
                    <Button
                        type='submit'
                        mt={6}
                        color='black'
                        variant='outline'
                        borderColor='black'
                        _hover={{ bg: '#6ab7d8' }}
                        onClick={handleSubmit}
                    >
                        Submit
                    </Button>
                </Flex>
            </Flex>
        </>
    )
}
