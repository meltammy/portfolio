import React, { useState, useEffect } from 'react';
import '../buttonEffect.scss';
import styled from 'styled-components'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Background from '../components/Background/index'
import firebase from 'firebase'

const Container = styled.div`
height: 100vh;
width: 100%
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`
const LinksContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;

`

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => (props.darkMode ? '#1d1d1d' : 'white')};
  }
`

function Links() {
  const [links, setLinks] = useState([])
  const [darkMode, setDarkMode] = useState(true)
  const db = firebase.firestore();

  useEffect(() => {
    var db_links = db.collection("Links");
    db_links.onSnapshot((querySnapshot) => {
      const newLinks = querySnapshot.docs.map(doc => {
        return doc.data()
      })
      setLinks(newLinks)
    })
  }, [])

  const alterColor = () => {
    setDarkMode(!darkMode)
  }

  useEffect(() => {
  }, [darkMode]);

  const renderTriangles = () => {
    const array = []

    for (let index = 0; index < 40; index++) {
      array.push(index)
    }

    return array
  }

  return (
    <Container className='background-color'>
      <GlobalStyle darkMode={darkMode} />
      <Container>
        <Background darkMode={darkMode} />
        <LinksContainer>
          {links.map(item => (
            <div class="button-container-1" key={item.name}>
              <span class="mas">{item.label}</span>
              <button id='work' type="button" name="Hover" onClick={() => window.open(item.url)}>{item.label}</button>
            </div>
          ))}
        </LinksContainer>

      </Container>
    </Container>
  );
}
export default Links;
