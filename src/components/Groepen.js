import React from 'react'
import Features from './Features'

export default function Groepen() {
  return (
    <Features
      id={'groepen'}
      flexDir={'row-reverse'} 
      // image={LessonImage}
      gradient={'linear(to-b, #AD7534,#2384AD)'}
      title={'-Groepen-'}
      text={`Ik geef fluitles op dwarsfluit, tin-whistle en low-whistle voor alle niveaus, zowel individueel als aan groepen.
              Tijdens deze fluitlessen voor dwarsfluit, tin-whistle en low-whistle werk ik vanuit de wensen van de leerlingen  aan specifiek Ierse technieken en ornamenten en natuurlijk het aanleren van mooie melodieën. Voor leerlingen met een klassieke achtergrond is het interessant om kennis te maken met het aanleren van repertoire op gehoor, ritmisch gebruik van adem en een andere toon en klankkleur.
              De fluitlessen vinden plaats in Culemborg, op loopafstand van het station. Parkeren is gratis.`}               
    />
  )
}
