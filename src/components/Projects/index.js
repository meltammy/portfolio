import React from 'react';

import { Container, Pc, Note, Ipad, ProjectContainer, TextContainer, ButtonProject, ButtonContainer, NameStack, Description } from './styles'


function Projects(props) {
    return (
        <Container darkMode={props.darkMode} id='projects'>
            <ProjectContainer>
                <Pc className="projectImage"></Pc>
                <TextContainer>
                    <NameStack>
                        <h1>Meelzer</h1>
                        <h2>Full Stack</h2>
                    </NameStack>
                    <Description>
                        <p>Protótipo baseado em plataformas de streaming de música, como Deezer e Spotify, desenvolvido com React.JS, Node.Js e MySQL.</p>
                        <ButtonContainer>
                            <ButtonProject href="https://github.com/meltammy/Meelzer-front">Front-end no GitHub</ButtonProject>
                            <ButtonProject href="https://github.com/meltammy/Meelzer-back">Back-end no GitHub</ButtonProject>
                        </ButtonContainer>
                    </Description>
                </TextContainer>
            </ProjectContainer>
            <ProjectContainer className="column-reverse">
                <TextContainer className="align-left">
                    <NameStack>
                        <h1>Melddit</h1>
                        <h2>Front-end</h2>
                    </NameStack>
                    <Description className="align-description">
                        <p>Projeto Front-end baseado nas redes sociais Reddit, Tumblr e Instagram, desenvolvido com React.JS.</p>
                        <ButtonProject href="https://github.com/meltammy/Melddit">Ver no GitHub</ButtonProject>
                    </Description>
                </TextContainer>
                <Note className="projectImage"></Note>
            </ProjectContainer>
            <ProjectContainer>
                <Ipad className="projectImage"></Ipad>
                <TextContainer>
                    <NameStack>
                        <h1>Mel Eats</h1>
                        <h2>Front-end</h2>
                    </NameStack>
                    <Description>
                        <p>Protótipo baseado nos aplicativos de entrega Uber Eats e Ifood, desenvolvido com React.JS</p>
                        <ButtonProject><a href="https://github.com/meltammy/Mel-Eats">Ver no GitHub</a>
                        </ButtonProject>
                    </Description>
                </TextContainer>
            </ProjectContainer>
        </Container>
    );
}

export default Projects;