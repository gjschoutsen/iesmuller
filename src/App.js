import React, { useEffect, useState, useRef } from 'react';
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
import { Box } from '@chakra-ui/react'


function App() {
  const API = "http://localhost:1337/api"

  const APII = process.env.REACT_APP_STRAPI_API_URL

  console.log(APII);

  const [texts, setTexts] = useState([]);

  const [sectionOffsets, setSectionOffsets] = useState({
    bio: 0,
    lessons: 0,
    // workshops: 0,
    // studio: 0,
    // groups: 0,
    // agenda: 0,
  });

  const fetchText = () => {
    Axios.get(`${API}/texts`)
      .then((texts) => {
        setTexts(texts.data.data[0].attributes)
      })
      .catch((err) => { console.log("Error getting texts from API"); })
  }

  useEffect(() => {
    fetchText()
  }, []);

  const bioRef = useRef();
  const lessonsRef = useRef();

  // This function calculate X and Y
  const getPosition = () => {
    if (bioRef.current && lessonsRef.current) {
      // console.log('bioRef position is', bioRef.current.offsetTop);
      // console.log('lessonsRef position is', lessonsRef.current.offsetTop);
      const bioY = bioRef.current.offsetTop;
      const lessonsY = lessonsRef.current.offsetTop;
      setSectionOffsets({
        bio: bioY,
        lessons: lessonsY,
      });
    }
  };

  // Get the position of the red box in the beginning
  useEffect(() => {
    getPosition();
  }, []);

  // Re-calculate X and Y of the red box when the window is resized by the user
  useEffect(() => {
    window.addEventListener("resize", getPosition);
  }, []);



  return (
    <>
      <NavBar />
      <Header />
      <Box
        color="black"
      >
        bio offsetTop is: {sectionOffsets.bio}
        lessons offsetTop is: {sectionOffsets.lessons}
      </Box>
      <div ref={bioRef}>
        <Bio bioText={texts.Bio} />
      </div>

      <div ref={lessonsRef}>
        <Lessen lessenText={texts.Lessen} />
      </div>

      <Workshops workshopsText={texts.Workshops} />
      <Studio studioText={texts.Studio} />
      <Groepen groepenText={texts.Groepen} />
      <Agenda />
      <Contact />
    </>
  );
}

export default App;
