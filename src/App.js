import React from 'react';
import './App.css';
import styled from 'styled-components'
import mel4 from './img/mel4.png'
import mel2 from './img/mel2.jpeg'

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TwitterIcon from '@material-ui/icons/Twitter';

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

const LinkHeader = styled.a`
margin-left: 5vw;
color: white;
text-decoration: none;
`

const SocialBar = styled.div`
width: fit-content;
height: 35vh;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
position: relative;
left: 94%;
top: 5vw;
@media(max-width: 500px) {
  left: 90%;
}
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
background-image:  url(${mel4});
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
text-shadow: 0 0 2px black;
@media(max-width: 500px) {
  margin-left: 3vw;
}
`

const Arrow = styled.div`
border: 2px #ffffff80 solid;
width: 10px;
height: 10px;
position: relative;
border-top-color: transparent;
border-left-color: transparent;
bottom: 0;
top: 40vh;
left: 50vw;
transform: rotate(45deg);
`


const AboutMe = styled.div`
width: 100%;
height: 75vh;
display: flex;
justify-content: center;
align-items: center;
background-image: linear-gradient(#2A5421,#80FF63);
scroll-snap-align: start;
@media(max-width: 450px) {
flex-direction: column;
height: 100vh;
justify-content: center;
height: 100vh;
}
`

const PhotoContainer = styled.div`
width:50%;
padding: 5vw;
display: flex;
flex-direction: column;
align-items: flex-end;
@media(max-width: 750px) {
  padding: 3vw;
  margin-top: 5vw;
}
@media(max-width: 600px) {
  padding: 2vw;
  margin-right: 2vw;
}
@media(max-width: 450px) {
width: 90%;
align-items: center;
}
`

const Photo = styled.div`
background: url(${mel2});
width: 315px;
height: 330px;
background-position: center;
background-size: cover;
box-shadow: 0 0 20px 7px black, inset 0 -4px 20px 0px black;
@media(max-width: 800px) {
width:200px;
height: 300px;
}
@media(max-width: 450px) {
width:200px;
height: 230px;
}
`

const TextAboutMe = styled.div`
width:40vw;
min-height: 330px;
display: flex;
flex-direction: column;
justify-content: flex-end;
padding-right: 8vw;
h1{
  font-size:2.5em;
}
h2{
  margin-top: 1vw;
  color:white;
  font-weight: normal;
}
p{
  text-align: justify;
  color:white;
  font-size:1em;
  margin-top:1vw;
}
@media(max-width: 1080px) {
p{
  font-size:0.9em;
}
h1{
  font-size: 2.4em;
}
h2{
  font-size: 1.4em;
}
}
@media(max-width: 800px) {
  min-height: 300px;
}
@media(max-width: 750px) {
  h1{
  font-size: 2em;}
  padding-right: 5vw;
}
@media(max-width: 620px) {
  h1{
  font-size: 1.8em;}
}
@media(max-width: 560px) {
  h1{
  font-size: 1.5em;
}
}
@media(max-width: 450px) {
width: 90%;
justify-content: flex-start;
align-items: center;
min-height: fit-content;
padding: 11vw;
padding-top: 4vw;
}
`

const CV = styled.button`
color: black;
width: 24vh;
height: fit-content;
min-height:fit-content;
min-width:fit-content;
padding:1.5vh;
margin-top:1vw;
background-color: #ffbd4a;
border:none;
border: 1px #402F12 solid;
border-radius:8px;
font-size:1rem;
text-transform: uppercase;
transition: 0.5s;
box-shadow: -3px 1px 6px 0px black;
outline: none;

:hover{
color: white;
background-color: #E8B938;
box-shadow: -3px 1px 4px 0px black;
}
`

const Stack = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
background-image: linear-gradient(#80FF63, #63FFA5);
scroll-snap-align: start;
`

const Education = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
background-image: linear-gradient(#63FFA5, #4AA1FF);
scroll-snap-align: start;
`

const Projects = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
background-image: linear-gradient(#4AA1FF, #463DFF);
scroll-snap-align: start;
`

const HireMe = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
background-image: linear-gradient(#463DFF, #2822B3);
scroll-snap-align: start;
`

const Footer = styled.div`
width: 100%;
height: 10vh;
display: flex;
flex-direction: column;
align-items: center;
background-color: #FFBD4A;
scroll-snap-align: start;
`

function App() {

  return (
    <Container>
      <Header id='nav'>
        <LinkHeader href="#aboutMe">Quem sou</LinkHeader>
        <LinkHeader href="#projects">Projetos</LinkHeader>
        <LinkHeader href="#contact">Contato</LinkHeader>
      </Header>
      <Introduction>
        <Apresentation className='typing'>
          <p>Oi, eu sou a Mel</p>
          <p>Desenvolvedora Web Full Stack </p>
          <p>Apaixonada por ciência e tecnologia</p>
        </Apresentation>
        <SocialBar>
          <LinkedInIcon style={{ fontSize: 30 }}></LinkedInIcon>
          <GitHubIcon style={{ fontSize: 30 }}></GitHubIcon>
          <WhatsAppIcon style={{ fontSize: 30 }}></WhatsAppIcon>
          <TwitterIcon style={{ fontSize: 30 }}></TwitterIcon>
          <InstagramIcon style={{ fontSize: 30 }}></InstagramIcon>
        </SocialBar>
        <Arrow className='down'></Arrow>
        <Arrow className='down'></Arrow>
      </Introduction>
      <AboutMe id='aboutMe'>
        <PhotoContainer>
          <Photo />
        </PhotoContainer>
        <TextAboutMe className='textAboutMe'>
          <h1> Melissa Tammy</h1>
          <p>sou desenvolvedora Web Full Stack, estudante de Análise e Desenvolvimento de sistemas, ex-aluna de Ciências biológicas e fotógrafa por hobby.</p>
          {/*<p>Gosto de entender o porquê das coisas e como o mundo funciona, o que me levou a cursar alguns semestres de ciências biológicas após o termino do ensino médio.</p>
          <p>No meio do caminho encontrei a programação, comecei a estudar por pura curiosidade e acabei me apaixonando. Tranquei a faculdade de biologia e iniciei a de Análise e Desenvolvimento de Sistemas. A cada semestre descubro mais da área de tecnologia e sinto-me em casa!</p>
          <p>Em 2020 concluí um curso intensivo de desenvolvimento web full stack, foram mais de 1000 horas de programação, possibilitando a minha formação como desenvolvedora web completa. </p>
          <h2>ReactJS | NodeJS | MySQL</h2>*/}
          <CV>CV em PDF</CV>
        </TextAboutMe>
      </AboutMe>
      <Stack>
        <h1>Meus conhecimentos</h1>
      </Stack>
      <Education></Education>
      <Projects id='projects'></Projects>
      <HireMe id='contact'></HireMe>
      <Footer>©Melissa Tammy</Footer>
    </Container>
  );
}

export default App;
