import React from 'react';

import { Container } from './styles'

function NavBar(props) {

    return (
        <Container darkMode={props.darkMode} id='nav'>
            <a href="#aboutMe">Quem sou</a>
            <a href="#projects">Projetos</a>
            <a href="#hireMe">Contato</a>
        </Container>
    );
}
export default NavBar;