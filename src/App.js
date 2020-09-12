import React from 'react';
import './App.scss';
import styled from 'styled-components'

import front from './img/front.png'
import back from './img/back.png'


import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TwitterIcon from '@material-ui/icons/Twitter';

import { Header, LinkHeader, SocialBar } from './styles/header-styles'
import { Introduction, Apresentation, Arrow, ArrowContainer, ApresentationContainer } from './styles/intro-styles'
import { AboutMe, TextAboutMe, CV } from './styles/aboutMe-styles'
import { HireMe, ContactContainer } from './styles/hireMe-styles'
import { Projects, Pc, Note, Ipad, ProjectContainer, TextContainer, ButtonProject } from './styles/projects-styles'
import { Footer } from './styles/footer-styles'
import { Stack, StackContainer, MainStackContainer, ListContainer } from './styles/stack-styles'




const Container = styled.div`
max-height: 100vh;
overflow-y: scroll;
scroll-snap-points-y: repeat(3rem);
scroll-snap-type: y proximity;
overflow-x: hidden;

`

function App() {

  return (
    <Container className='background-color'>
      <Introduction id='intro'>
        <div className='background'>
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <ApresentationContainer>
          <div></div>
          <Apresentation>
            <p>Oi, eu sou a <b>Mel</b></p>
            <p>Desenvolvedora Web Full Stack</p>
          </Apresentation>
          <SocialBar className='socialIntro'>
            <a href='https://www.linkedin.com/in/meltammy/'><LinkedInIcon style={{ fontSize: 30 }} /></a>
            <a href='https://github.com/meltammy'><GitHubIcon style={{ fontSize: 30 }} /></a>
            <a href='https://api.whatsapp.com/send?phone=5511953734273'><WhatsAppIcon style={{ fontSize: 30 }} /></a>
            <a href='https://twitter.com/meltammy_'> <TwitterIcon style={{ fontSize: 30 }} /></a>
            <a href='https://www.instagram.com/meltammy/'><InstagramIcon style={{ fontSize: 30 }} /></a>
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
            web responsivas utilizando HTML, CSS e
            JavaScript.
            </p>
          </StackContainer>
          <StackContainer>
            <img src={back}></img>
            <h1>Back-end</h1>
            {/* Icons made by <a href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp">Eucalyp</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> */}
            <p>Aplicações utilizando NodeJS,
            Typescript e MySQL.
            Criação de API's para
            comunicação com front-end.
            </p>
          </StackContainer>
          <ListContainer>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React.js</span>
            <span>Git</span>
            <span>GitHub</span>
            <span>Express</span>
            <span>Node.js</span>
            <span>SQL</span>
            <span>TypeScript</span>
            <span>C#</span>
            <span>C</span>
            <span>Jest</span>
            <span>Testes</span>
          </ListContainer>


        </MainStackContainer>
      </Stack>
      <Projects id='projects'>
        <ProjectContainer>
          <Pc className="projectImage"></Pc>
          <TextContainer>
            <h1>Meelzer</h1>
            <h2>Full Stack</h2>
            <p>Projeto Full Stack desenvolvido com React.JS, Node.Js, MySQL</p>
            <ButtonProject>Ver no GitHub</ButtonProject>

          </TextContainer>
        </ProjectContainer>
        <ProjectContainer>
          <TextContainer>
            <h1>Melddit</h1>
            <h2>Front-end</h2>
            <p>Projeto Front-end desenvolvido com React.JS, Node.Js, MySQL</p>
            <ButtonProject>Ver no GitHub</ButtonProject>

          </TextContainer>
          <Note className="projectImage"></Note>

        </ProjectContainer>
        <ProjectContainer>
          <Ipad className="projectImage"></Ipad>
          <TextContainer>
            <h1>Mel Eats</h1>
            <h2>Front-end</h2>
            <p>Projeto Front-end desenvolvido com React.JS, Node.Js, MySQL</p>
            <ButtonProject>Ver no GitHub</ButtonProject>
          </TextContainer>
        </ProjectContainer>
      </Projects>
      <HireMe id='hireMe'>
        <h1>Entre em contato!</h1>
        <p>Procuro oportunidade de trabalho onde eu possa aprender,
        </p>
        <p>me desenvolver e evoluir na minha carreia profissional.
        </p>
        <ContactContainer>
          <b>E-mail para contato: mel.tammy2@gmail.com
        </b>
          <b>
            Celular: (11) 95373-4273
        </b>
        </ContactContainer>

        <SocialBar className="social-hireMe">
          <a href='https://www.linkedin.com/in/meltammy/'><LinkedInIcon style={{ fontSize: 30 }} /></a>
          <a href='https://github.com/meltammy'><GitHubIcon style={{ fontSize: 30 }} /></a>
          <a href='https://api.whatsapp.com/send?phone=5511953734273'><WhatsAppIcon style={{ fontSize: 30 }} /></a>
          <a href='https://twitter.com/meltammy_'> <TwitterIcon style={{ fontSize: 30 }} /></a>
          <a href='https://www.instagram.com/meltammy/'><InstagramIcon style={{ fontSize: 30 }} /></a>
        </SocialBar>
      </HireMe>
      <Footer id='footer'>©2020 Melissa Tammy</Footer>
    </Container>
  );
}

export default App;
