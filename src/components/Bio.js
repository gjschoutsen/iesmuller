
import React, { useEffect, useRef, useState } from 'react'
import BioImage from '../old-images/Header-bio.jpeg'
import Features from './Features'

export default function Bio() {
  const [textColor, setTextColor] = useState('')
  let elementRef = useRef()

  useEffect(() => {
    console.log(elementRef.current.offsetTop);
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
        text={`Ies Muller wordt beschouwd als een van de beste folkfluitisten van Nederlandse bodem. Al op jonge leeftijd kwam hij in aanraking met Ierse en Bretonse traditionele muziek en 
                de houten dwarsfluit. Gegrepen door de klank van dit instrument begon hij te spelen en steeds meer muziek te leren. 
                Tijdens reizen door Ierland, Schotland en Bretagne, 
                maar ook Spanje breidde hij zijn repertoire uit, en absorbeerde hij de details en 
                eigenaardigheden die de muziek uit deze streken haar karakter geven.
                Terwijl Ierse en Bretonse muziek het hart bleven vormen van zijn stijl en repertoire, 
                kwamen er in de loop der tijd veel invloeden bij. 
                Hij werkte binnen verschillende projecten met muzikanten uit allerlei disciplines, waaronder klassieke muziek, 
                jazz en wereldmuziek. Ook door deze invloeden kwam zijn huidige stijl tot stand.`}
      />
    </>
  )
}
