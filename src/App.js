import React from 'react';
import './App.css';
import styled from 'styled-components'

import mel3 from './img/mel3.png'
import bio from './img/bio.jpg'
import front from './img/front.png'
import back from './img/back.png'
import tools from './img/tools.png'


import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TwitterIcon from '@material-ui/icons/Twitter';

import { Header, LinkHeader, SocialBar } from './styles/header-styles'
import { Introduction, Apresentation, Arrow, ArrowContainer, ApresentationContainer } from './styles/intro-styles'
import { AboutMe, PhotoContainer, Photo, TextAboutMe, CV } from './styles/aboutMe-styles'
import { HireMe } from './styles/hireMe-styles'
import { Education, EducationContainer, MainEducationContainer, LogoContainer } from './styles/education-styles'
import { Projects, Pc, Note, Ipad, ProjectContainer, TextContainer } from './styles/projects-styles'
import { Footer } from './styles/footer-styles'
import { Stack, StackContainer, MainStackContainer } from './styles/stack-styles'




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
        <span></span>
        <ApresentationContainer>
          <div></div>
          <Apresentation>
            <p>Oi, eu sou a <b>Mel</b></p>
            <p>Desenvolvedora Web Full Stack</p>
          </Apresentation>
          <SocialBar className='socialIntro'>
            <LinkedInIcon style={{ fontSize: 30 }}></LinkedInIcon>
            <GitHubIcon style={{ fontSize: 30 }}></GitHubIcon>
            <WhatsAppIcon style={{ fontSize: 30 }}></WhatsAppIcon>
            <TwitterIcon style={{ fontSize: 30 }}></TwitterIcon>
            <InstagramIcon style={{ fontSize: 30 }}></InstagramIcon>
          </SocialBar>
        </ApresentationContainer>

        <ArrowContainer className='down'>
          <Arrow></Arrow>
          <Arrow></Arrow>
        </ArrowContainer>

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
          <p>Desenvolvedora Web Full Stack, estudante de Análise e Desenvolvimento de sistemas, ex-aluna de Ciências biológicas e fotógrafa por hobby.</p>
          <CV>CV em PDF</CV>
        </TextAboutMe>
      </AboutMe>
      <Stack id='stack'>
        <MainStackContainer>
          <StackContainer>
            <img src={front}></img>
            <h1>Front-end</h1>
            {/* Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> */}
            <p>Desenvolvimento de aplicações
            web utilizando HTML, CSS e
            JavaScript.
            </p>
            <p>
              Criação de sites responsivos
              seguindo princípio de
              Mobile First.
            </p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>GIT</li>
              <li>Testes</li>
            </ul>
          </StackContainer>
          <StackContainer>
            <img src={back}></img>
            <h1>Back-end</h1>
            {/* Icons made by <a href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp">Eucalyp</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> */}
            <p>Aplicações utilizando NodeJS,
            Typescript e MySQL.
            Criação de API´s para
            comunicação com front-end
            seguindo princípio de Clean Code.
            </p>
            <ul>
              <li>Node.js</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>GIT</li>
              <li>Testes</li>
            </ul>
          </StackContainer>
          <StackContainer>
            <img src={tools}></img>
            <h1>Back-end</h1>
            {/* Icons made by <a href="https://www.flaticon.com/authors/xnimrodx" title="xnimrodx">xnimrodx</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> */}
            <p>Aplicações utilizando NodeJS,
            Typescript e MySQL.
            Criação de API´s para
            comunicação com front-end
            seguindo princípio de Clean Code.
            </p>
            <ul>
              <li>Node.js</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>GIT</li>
              <li>Testes</li>
            </ul>
          </StackContainer>
        </MainStackContainer>
      </Stack>
      <Education id='education'>
        <MainEducationContainer>
          <EducationContainer>
            <h1>Desenvolvimento Web Full Stack</h1>
            <h2>Labenu</h2>
            <h3>6 meses - 2020</h3>
            <p>A Labenu é uma startup que forma Desenvolvedores Web Full Stack prontos para o mercado de trabalho. São mais de 1000 horas de programação que faz com que seus alunos sejam profissionais completos tanto no Back-End quanto no Front-End.
            </p>
          </EducationContainer>
          <EducationContainer>
            <h1>Análise e Desenvolvimento de Sistemas</h1>
            <h2>Universidade Paulista</h2>
            <h3>2019 - 2021</h3>
            <p>
              O Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas da UNIP forma profissionais capazes de projetar, documentar, especificar, implementar, testar, implantar e manter sistemas computacionais de informação, utilizando modernas ferramentas computacionais, bem como métodos e técnicas avançadas para projetos aplicados durante todo o ciclo de desenvolvimento de sistemas.
            </p>
          </EducationContainer>
          <EducationContainer>
            <h1>Ciências Biológicas</h1>
            <h2>Universidade Federal de São Paulo</h2>
            <h3>2018 - trancado</h3>
            <p>
              O curso pretende formar um profissional capacitado em ciências moleculares, celulares e fisiológicas, genética e evolução, botânica, zoologia e ecologia, capaz de entender as complexas relações entre os organismos biológicos e o meio ambiente e consciente da necessidade de atuar com qualidade e responsabilidade em prol da conservação e manejo da biodiversidade e, com isso, contribuir para o desenvolvimento sustentável.</p>
          </EducationContainer>
        </MainEducationContainer>
      </Education>
      <Projects id='projects'>
        <ProjectContainer>
          <Pc className="projectImage"></Pc>
          <TextContainer>
            <h1>Meelzer</h1>
            <h2>Full Stack</h2>
            <p>Projeto Full Stack desenvolvido com React.JS, Node.Js, MySQL</p>
          </TextContainer>
        </ProjectContainer>
        <ProjectContainer>
          <TextContainer>
            <h1>Melddit</h1>
            <h2>Front-end</h2>
            <p>Projeto Front-end desenvolvido com React.JS, Node.Js, MySQL</p>
          </TextContainer>
          <Note className="projectImage"></Note>

        </ProjectContainer>
        <ProjectContainer>
          <Ipad className="projectImage"></Ipad>
          <TextContainer>
            <h1>Mel Eats</h1>
            <h2>Front-end</h2>
            <p>Projeto Front-end desenvolvido com React.JS, Node.Js, MySQL</p>
          </TextContainer>
        </ProjectContainer>
      </Projects>
      <HireMe id='hireMe'>
        <h1>Entre em contato!</h1>
        <p>Procuro oportunidade de trabalho onde eu possa aprender,
        me desenvolver e evoluir na minha carreia profissional.
        </p>
        <b>E-mail para contato: mel.tammy2@gmail.com
        </b>
        <b>
          Celular: (11) 95373-4273
        </b>
        <SocialBar className="socialContact">
          <LinkedInIcon style={{ fontSize: 30 }}></LinkedInIcon>
          <GitHubIcon style={{ fontSize: 30 }}></GitHubIcon>
          <WhatsAppIcon style={{ fontSize: 30 }}></WhatsAppIcon>
          <TwitterIcon style={{ fontSize: 30 }}></TwitterIcon>
          <InstagramIcon style={{ fontSize: 30 }}></InstagramIcon>
        </SocialBar>
      </HireMe>
      <Footer id='footer'>©2020 Melissa Tammy</Footer>
    </Container>
  );
}

export default App;
