import React from 'react'
import Features from './Features'
export default function Workshops({ workshopsText }) {
  return (
    <>
      <Features
        id={'workshops'}
        flexDir={'row-reverse'}
        gradient={'linear(to-b, #AD7534,#2384AD)'}
        title={'-Workshops-'}
        text={workshopsText}
      />
    </>
  )
}
