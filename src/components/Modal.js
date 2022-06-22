import { Button, Flex, Text } from '@chakra-ui/react'
import React, {useState} from 'react'

export default function Modal() {
const [modal, setModal] = useState(false)

const toggleModal = ()=>{
    setModal(!modal)
}

  return (
    <>
        {!modal &&(
            <Button
            colorScheme='blue'
            onClick={toggleModal}
            position='absolute'
            >Open Modal</Button>
        )}
      {modal &&(
        <Flex
                direction='column'
                w='30%'
                align='center'
                border='1px solid white'
                padding='1rem' 
                gap='2rem'
                position='absolute'
                bg='white'
            >
                <Text
                color='black'
                >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro perspiciatis molestias assumenda sint ipsa neque pariatur veniam dicta, tempore optio reprehenderit praesentium dolorem! At voluptatum veniam asperiores eius sed optio.
                </Text>

                <Button
                    colorScheme='blue'
                    onClick={toggleModal}
                    w='50%'
                >   
                    close
                </Button>
            </Flex>
      )}  
  </>
  )
}
