import React, { useEffect, useState, useRef } from 'react';
import Axios from 'axios';
import './css/App.css';
import Form from './components/Form';
import NavBar from './components/Navbar';
import Header from './components/Header';
import Bio from './components/Bio';
import Lessen from './components/Lessen';
import Workshops from './components/Workshops';
import Studio from './components/Studio';
import Groepen from './components/Groepen';
import Agenda from './components/Agenda';

function App() {
  const API = process.env.REACT_APP_STRAPI_API_URL;
  const [texts, setTexts] = useState([]);
  const [form, setForm] = useState(false);

  //open close the form with different buttons
  const toggleForm = toggle => {
    setForm(toggle);
  };

  useEffect(() => {
    if (form) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  }, [form]);

  const [sectionOffsets, setSectionOffsets] = useState({
    bio: 0,
    lessen: 0,
    workshops: 0,
    studio: 0,
    groepen: 0,
    agenda: 0,
    agendaEnd: 0,
  });

  const fetchText = () => {
    Axios.get(`${API}/texts`)
      .then(texts => {
        setTexts(texts.data.data[0].attributes);
      })
      .catch(err => {
        console.log('Error getting texts from API', err);
      });
  };

  useEffect(() => {
    fetchText();
  }, []);

  const bioRef = useRef();
  const lessonsRef = useRef();
  const workshopsRef = useRef();
  const studioRef = useRef();
  const groepenRef = useRef();
  const agendaRef = useRef();
  const agendaEndRef = useRef();

  // This function calculates Y position of section
  const getPosition = () => {
    if (
      bioRef.current &&
      lessonsRef.current &&
      workshopsRef.current &&
      studioRef.current &&
      groepenRef.current &&
      agendaRef.current &&
      agendaEndRef.current
    ) {
      const bioY = bioRef.current.offsetTop;
      const lessonsY = lessonsRef.current.offsetTop;
      const workshopsY = workshopsRef.current.offsetTop;
      const studioY = studioRef.current.offsetTop;
      const groepenY = groepenRef.current.offsetTop;
      const agendaY = agendaRef.current.offsetTop;
      const agendaYEnd = agendaEndRef.current.offsetTop;
      setSectionOffsets({
        bio: bioY,
        lessen: lessonsY,
        workshops: workshopsY,
        studio: studioY,
        groepen: groepenY,
        agenda: agendaY,
        agendaEnd: agendaYEnd,
      });
    }
  };

  // Get the position of the section in the beginning
  useEffect(() => {
    getPosition();
  }, []);

  // Re-calculate Y of the section when the window is resized by the user
  useEffect(() => {
    window.addEventListener('resize', getPosition);
  }, []);

  return (
    <>
      {form && <Form toggleForm={toggleForm} />}
      <NavBar sectionOffsets={sectionOffsets} toggleForm={toggleForm} />
      <Header />
      <section ref={bioRef}>
        <Bio bioTextP1={texts.biop1} bioTextP2={texts.biop2} />
      </section>
      <section ref={groepenRef}>
        <Groepen />
      </section>
      <section ref={agendaRef}>
        <Agenda />
      </section>
      <section ref={lessonsRef}>
        <Lessen
          toggleForm={toggleForm}
          lessenTextP1={texts.lessenp1}
          lessenTextP2={texts.lessenp2}
          locatie={texts.locatie}
          losseLes={texts.losseles}
          vijfLessen={texts.vijflessen}
          tienLessen={texts.tienlessen}
        />
      </section>
      <section ref={workshopsRef}>
        <Workshops
          wsTitel1={texts.workshoptitel1}
          wsTitel2={texts.workshoptitel2}
          wsTitel3={texts.workshoptitel3}
          wsText1={texts.workshoptext1}
          wsText2={texts.workshoptext2}
          wsText3={texts.workshoptext3}
        />
      </section>
      <section ref={studioRef}>
        <Studio studioTextP1={texts.studiop1} studioTextP2={texts.studiop2} />
      </section>

      <section ref={agendaEndRef}></section>
    </>
  );
}

export default App;
