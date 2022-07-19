import React from 'react'
import Features from './Features'

export default function Groepen({ groepenText }) {
  return (
    <>
      <Features
        id={'groepen'}
        flexDir={'row-reverse'}
        gradient={'linear(to-b, #AD7534,#2384AD)'}
        title={'-Groepen-'}
        text={groepenText}
      />

    </>
  )
}
