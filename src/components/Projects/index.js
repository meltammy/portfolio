import React from 'react';

import { Container, Pc, Note, Ipad, ProjectContainer, TextContainer, ButtonProject } from './styles'


function Projects(props) {
    return (
        <Container darkMode={props.darkMode} id='projects'>
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
        </Container>
    );
}

export default Projects;