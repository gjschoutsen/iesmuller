
import React, { useEffect, useRef, useState } from 'react'
import BioImage from '../old-images/Header-bio.jpeg'
import Features from './Features'

export default function Bio({ bioText }) {
  const [textColor, setTextColor] = useState('')
  let elementRef = useRef()

  useEffect(() => {
    // console.log(elementRef.current.offsetTop);
  }, [])

  return (
    <>
      <div
        ref={elementRef}
      ></div>
      <Features
        id={'bio'}
        textColor={textColor}
        flexDir={'row'}
        image={BioImage}
        gradient={'linear(to-b, black, #2384AD)'}
        title={'-Bio-'}
        text={bioText}
      />
    </>
  )
}
