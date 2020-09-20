import React from 'react';
import curriculo from '../../cv/Meltammy_cv.pdf'
import { Container, TextAboutMe, CV } from './styles'

function AboutMe(props) {
  return (
    <Container id='aboutMe'>
      <TextAboutMe darkMode={props.darkMode} className='textAboutMe'>
        <h1> Melissa Tammy</h1>
        <p>Desenvolvedora Web Full Stack, estudante de Análise e Desenvolvimento de sistemas, ex-aluna de Ciências biológicas e fotógrafa por hobby.</p>
        <a href={curriculo} download="teste.pdf"><CV darkMode={props.darkMode}>CV em PDF</CV></a>
      </TextAboutMe>
    </Container>
  );
}
export default AboutMe;