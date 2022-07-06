import React from 'react'
import Features from './Features'

export default function Studio({ studioText }) {
  return (
    <>
      <Features
        id={'studio'}
        flexDir={'row-reverse'}
        // image={LessonImage}
        gradient={'linear(to-b,#2384AD, #AD7534)'}
        title={'-Studio-'}
        text={studioText}
      />
    </>
  )
}
