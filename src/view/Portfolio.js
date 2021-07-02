import React, { useState, useEffect } from 'react';
import '../App.scss';
import styled from 'styled-components'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import Home from '../components/Home/index'
import NavBar from '../components/NavBar/index'
import AboutMe from '../components/AboutMe/index'
import HireMe from '../components/HireMe/index'
import Projects from '../components/Projects/index'
import Stack from '../components/Stack/index'
import Footer from '../components/Footer/index'
import Background from '../components/Background/index'

const Container = styled.div`
max-height: 100vh;
overflow-y: scroll;
overflow-x: hidden;
`

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => (props.darkMode ? '#1d1d1d' : 'white')};
  }
`

function Portfolio() {
  const [darkMode, setDarkMode] = useState(true)

  const alterColor = () => {
    setDarkMode(!darkMode)
  }

  useEffect(() => {
  }, [darkMode]);

  
  return (
    <Container className='background-color'>
      <GlobalStyle darkMode={darkMode} />
      <Background  darkMode={darkMode}/>
      <Home alterColor={alterColor} darkMode={darkMode}/>
      <NavBar darkMode={darkMode}/>
      <AboutMe darkMode={darkMode}/>
      <Stack darkMode={darkMode}/>
      {/* <Projects darkMode={darkMode}/> */}
      <HireMe darkMode={darkMode}/>
      <Footer darkMode={darkMode}/>
    </Container>
  );
}
export default Portfolio;
