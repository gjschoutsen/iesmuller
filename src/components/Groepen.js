import { useState, useEffect } from 'react';
import Card from './Card';
import { Flex, Text } from '@chakra-ui/react';
import Axios from 'axios';

export default function Groepen() {
  // const APIHOST = process.env.REACT_APP_STRAPI_HOST_URL;
  const API = process.env.REACT_APP_STRAPI_API_URL;
  const BASEURL = process.env.REACT_APP_STRAPI_HOST_URL;
  const [groepenData, setGroepenData] = useState([]);

  const fetchGroepenData = () => {
    Axios.get(`${API}/groepen?populate=*`)
      .then(groepInfo => {
        console.log(groepInfo.data.data);
        setGroepenData(groepInfo.data.data);
      })
      .catch(err => {
        console.log('Error getting groepInfo from API', err);
      });
  };

  useEffect(() => {
    fetchGroepenData();
  }, []);

  return (
    <Flex
      id="groepen"
      bg="black"
      justify="center"
      display="column"
      padding="30px"
      paddingBottom="100px"
      minH="800px"
    >
      <Flex justify="center">
        <Text fontSize="4xl">-Groepen-</Text>
      </Flex>
      <Flex gap="30px" flexWrap="wrap" justify="center">
        {groepenData &&
          groepenData.map((data, index) => {
            const groepData = data.attributes;
            return (
              <div key={index}>
                <Card
                  image={`${BASEURL}${groepData.image.data.attributes.url}`}
                  title={groepData.titel}
                  textp1={groepData.textp1}
                  textp2={groepData.textp2}
                  artists={groepData.artists}
                />
              </div>
            );
          })}
      </Flex>
    </Flex>
  );
}
