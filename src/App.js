import React, { useState, useEffect } from 'react';
import './App.scss';
import styled from 'styled-components'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import Home from './components/Home/index'
import NavBar from './components/NavBar/index'
import AboutMe from './components/AboutMe/index'
import HireMe from './components/HireMe/index'
import Projects from './components/Projects/index'
import Stack from './components/Stack/index'
import Footer from './components/Footer/index'



const Container = styled.div`
max-height: 100vh;
overflow-y: scroll;
scroll-snap-points-y: repeat(3rem);
scroll-snap-type: y proximity;
overflow-x: hidden;
`

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => (props.darkMode ? '#1d1d1d' : 'white')};
  }
`

function App() {
  const [darkMode, setDarkMode] = useState(true)

  const alterColor = () => {
    setDarkMode(!darkMode)
  }

  useEffect(() => {
  }, [darkMode]);

  return (
    <Container className='background-color'>
      <GlobalStyle darkMode={darkMode} />
      <Home alterColor={alterColor} darkMode={darkMode}></Home>
      <NavBar darkMode={darkMode}></NavBar>
      <AboutMe darkMode={darkMode}></AboutMe>
      <Stack darkMode={darkMode}></Stack>
      <Projects darkMode={darkMode}></Projects>
      <HireMe darkMode={darkMode}></HireMe>
      <Footer darkMode={darkMode}></Footer>
    </Container>
  );
}
export default App;
