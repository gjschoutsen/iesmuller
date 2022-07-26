import React from 'react'
import Features from './Features'
import LessonImage from '../old-images/header-lessen.jpeg'

export default function Lessen({ lessenText }) {
  return (
    <>
      <Features
        id={'lessen'}
        flexDir={['column-reverse', 'column-reverse', 'row-reverse', 'row-reverse']}
        image={LessonImage}
        gradient={'linear(to-b,#2384AD, #AD7534)'}
        title={'-Lessen-'}
        text={lessenText}
      />
    </>
  )
}
