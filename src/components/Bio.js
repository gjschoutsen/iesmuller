import { Box } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import BioImage from '../old-images/Header-bio.jpeg';
import Features from './Features';

export default function Bio({ bioTextP1, bioTextP2 }) {
  const [textColor] = useState('');
  let elementRef = useRef();

  useEffect(() => {
    // console.log(elementRef.current.offsetTop);
  }, []);

  return (
    <>
      <Box bg="black" id={'bio'} paddingTop="30px">
        <div ref={elementRef}></div>
      </Box>
      <Features
        textColor={textColor}
        flexDir={['column-reverse', 'column-reverse', 'row', 'row']}
        image={BioImage}
        gradient={'linear(to-b, black, #2384AD)'}
        title={'-Bio-'}
        textp1={bioTextP1}
        textp2={bioTextP2}
      />
    </>
  );
}
