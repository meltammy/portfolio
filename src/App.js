import React from 'react';
import './App.css';
import styled from 'styled-components'
import mel3 from './img/mel3.jpg'

const Header = styled.div`
width: 99.55vw;
height: 10vh;
display: flex;
position: absolute;
top: 0;
left: 0;
color: white;
justify-content: flex-end;
align-items: center;
padding-right: 5vw;
`

const LinkHeader = styled.span`
margin-left: 5vw;

`

const Container = styled.div`
max-height: 100vh;
overflow-y: scroll;
scroll-snap-type: mandatory;
scroll-snap-points-y: repeat(3rem);
scroll-snap-type: y mandatory;
`

const Introduction = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
scroll-snap-align: start;
background-image: linear-gradient(rgb(0 0 0 / 70%),rgb(0 0 0 / 77%)), url(${mel3});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
color: white;
`

const Apresentation = styled.div`
width: fit-content;
display: flex;
flex-direction: column;
flex-wrap: wrap;
margin-left: 5vw;
position: relative;
left: 3vw;
top: 61vh;
`

const AboutMe = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
background-color: green;
scroll-snap-align: start;
`

const Stack = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
background-color: orange;
scroll-snap-align: start;
`

const Education = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
background-color: pink;
scroll-snap-align: start;
`

const Projects = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
background-color: purple;
scroll-snap-align: start;
`

const HireMe = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
background-color: grey;
scroll-snap-align: start;
`

const Footer = styled.div`
width: 100%;
height: 10vh;
display: flex;
flex-direction: column;
align-items: center;
background-color: lilac;
scroll-snap-align: start;
`

function App() {
  
  return (
    <Container>
      <Header>
        <LinkHeader>Quem sou</LinkHeader>
        <LinkHeader>Projetos</LinkHeader>
        <LinkHeader>Contato</LinkHeader>
      </Header>
      <Introduction>
        <Apresentation className='typing'> 
          <p>Eu sou</p> 
          <p>Melissa Tammy</p>
          <p>Desenvolvedora Web Full Stack </p>
          <p>Apaixonada por tecnologia e programação</p>
        </Apresentation>
      </Introduction>
      <AboutMe></AboutMe>
      <Stack></Stack>
      <Education></Education>
      <Projects></Projects>
      <HireMe></HireMe>
      <Footer></Footer>
    </Container>
  );
}

export default App;
