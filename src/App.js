// import { Box } from '@chakra-ui/react';
import React from 'react';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Bio from './components/Bio';
import Lessen from './components/Lessen';
import Workshops from './components/Workshops';
import Studio from './components/Studio';
import Groepen from './components/Groepen';
import Contact from './components/Contact';
import './css/App.css'

function App() {

  return (
    <>
      <NavBar />
      <Header />
      <Bio />
      <Lessen />
      <Workshops />
      <Studio />
      <Groepen />
      <Contact />
    </>
  );
}

export default App;
