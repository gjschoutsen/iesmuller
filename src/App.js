import React, { useEffect, useState } from 'react';
import Axios from 'axios'
import './css/App.css'
import NavBar from './components/NavBar';
import Header from './components/Header';
import Bio from './components/Bio';
import Lessen from './components/Lessen';
import Workshops from './components/Workshops';
import Studio from './components/Studio';
import Groepen from './components/Groepen';
import Contact from './components/Contact';
import Agenda from './components/Agenda';


function App() {
  const API = "http://localhost:1337/api"

  const [texts, setTexts] = useState([])

  const fetchText = () => {
    Axios.get(`${API}/texts`)
      .then((texts) => {
        setTexts(texts.data.data[0].attributes)
      })
      .catch((err) => { console.log("Error getting texts from API"); })
  }

  useEffect(() => {
    fetchText()
  }, [])

  return (
    <>
      <NavBar />
      <Header />
      <Bio bioText={texts.Bio} />
      <Lessen lessenText={texts.Lessen} />
      <Workshops workshopsText={texts.Workshops} />
      <Studio studioText={texts.Studio} />
      <Groepen groepenText={texts.Groepen} />
      <Agenda />
      <Contact />
    </>
  );
}

export default App;
