import React from 'react';
import { Container, TextAboutMe, CV } from './styles'
import Meltammy_curriculo from '../../cv/Meltammy_curriculo.pdf'

function AboutMe(props) {
  return (
    <Container id='aboutMe'>
      <TextAboutMe darkMode={props.darkMode} className='textAboutMe'>
        <h1> Melissa Tammy</h1>
        <p>Desenvolvedora Web Full Stack, estudante de Análise e Desenvolvimento de sistemas, ex-aluna de Ciências biológicas e fotógrafa por hobby.</p>
        <CV darkMode={props.darkMode} href="https://firebasestorage.googleapis.com/v0/b/meltammy-fda67.appspot.com/o/Meltammy_curriculo.pdf?alt=media&token=6e8f4b88-721e-437c-8996-5640d68c0ead" download>CV em PDF</CV>
      </TextAboutMe>
    </Container>
  );
}
export default AboutMe;