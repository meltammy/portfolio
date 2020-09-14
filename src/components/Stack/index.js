import React from 'react';
import front from '../../img/front.png'
import back from '../../img/back.png'
import { Container, StackContainer, MainContainer, ListContainer } from './styles'

function Stack(props) {
    return (
        <Container id='stack'>
            <MainContainer  darkMode={props.darkMode}>
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
                    <span>Express</span>
                    <span>Node.js</span>
                    <span>SQL</span>
                    <span>TypeScript</span>
                    <span>C#</span>
                    <span>C</span>
                    <span>Jest</span>
                    <span>Git</span>
                    <span>GitHub</span>
                    <span>Testes</span>
                </ListContainer>
            </MainContainer>
        </Container>
    );
}
export default Stack;