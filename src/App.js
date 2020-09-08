import React from 'react';
import './App.css';
import styled from 'styled-components'
import mel3 from './img/mel3.png'
import bio from './img/bio.jpg'

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TwitterIcon from '@material-ui/icons/Twitter';

import { Header, LinkHeader, SocialBar } from './styles/header-styles'
import { Introduction, Apresentation, Arrow } from './styles/intro-styles'
import { AboutMe, PhotoContainer, Photo, TextAboutMe, CV } from './styles/aboutMe-styles'
import { HireMe } from './styles/hireMe-styles'
import { Education } from './styles/education-styles'
import { Projects } from './styles/projects-styles'
import { Footer } from './styles/footer-styles'
import { Stack } from './styles/stack-styles'




const Container = styled.div`
max-height: 100vh;
overflow-y: scroll;
scroll-snap-points-y: repeat(3rem);
scroll-snap-type: y proximity;
`

const Bio = styled.img`
background-image: url(${bio});
width: 100%;
height: 100%;
z-index:-5;
`

function App() {

  return (
    <Container className='background-color'>
      <Introduction >
        <Apresentation>
          <p>Oi, eu sou a Mel</p>
          <p>Desenvolvedora Web Full Stack</p>
        </Apresentation>
        {/* <SocialBar>
          <LinkedInIcon style={{ fontSize: 30 }}></LinkedInIcon>
          <GitHubIcon style={{ fontSize: 30 }}></GitHubIcon>
          <WhatsAppIcon style={{ fontSize: 30 }}></WhatsAppIcon>
          <TwitterIcon style={{ fontSize: 30 }}></TwitterIcon>
          <InstagramIcon style={{ fontSize: 30 }}></InstagramIcon>
        </SocialBar> */}
        <Arrow className='down'></Arrow>
        <Arrow className='down'></Arrow>
      </Introduction>
      <Header id='nav'>
        <LinkHeader href="#aboutMe">Quem sou</LinkHeader>
        <LinkHeader href="#projects">Projetos</LinkHeader>
        <LinkHeader href="#hireMe">Contato</LinkHeader>
      </Header>
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
      <Stack id='stack'>
        <h1>Meus conhecimentos</h1>
      </Stack>
      <Education id='education'></Education>
      <Projects id='projects'></Projects>
      <HireMe id='hireMe'></HireMe>
      <Footer id='footer'>©Melissa Tammy</Footer>
    </Container>
  );
}

export default App;
