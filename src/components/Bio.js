import { Box } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import BioImage from '../oldImages/Header-bio.jpeg';
import Features from './Features';

export default function Bio({ bioTextP1, bioTextP2, bioTextP3 }) {
  const [textColor] = useState('');
  let elementRef = useRef();

  return (
    <>
      <Box bg="black" id={'bio'} paddingTop="30px">
        <div ref={elementRef}></div>
      </Box>
      <Features
        textColor={textColor}
        flexDir={['column-reverse', 'column-reverse', 'row', 'row']}
        image={BioImage}
        title={'-Bio-'}
        textp1={bioTextP1}
        textp2={bioTextP2}
        textp3={bioTextP3}
      />
    </>
  );
}
