import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import Features from './Features'

export default function Contact() {

  const API = "http://localhost:1337"
  const [texts, setTexts] = useState([])

  const fetchText = () => {
    Axios.get(`${API}/api/agendas?populate=%2A`)
      .then((texts) => {
        setTexts(texts.data.data[0].attributes)
      })
      .catch((err) => { console.log("Error getting texts from API"); })
  }

  useEffect(() => {
    fetchText()
  }, [])

  console.log(texts);

  return (
    <>
      {texts.length === undefined &&
        <Features
          flexDir={'row-reverse'}
          image={API + texts.Foto.data.attributes.url}
          gradient={'linear(to-b,#2384AD, black)'}
          title={'-Contact-'}
          text={`${texts.datum} en ${texts.omschrijving}`}
        />
      }
    </>
  )
}
