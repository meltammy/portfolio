import React from 'react';

import { Container } from './styles'



function NavBar(props) {
    const goToView = (name) => {
        const element = document.getElementById(name);
        element && element.scrollIntoView({block: "center", behavior: "smooth"})
    }
    return (
        <Container darkMode={props.darkMode} id='nav'>
            <span onClick={() => goToView('aboutMe')}>Quem sou</span>
            <span onClick={() => goToView('hireMe')}>Contato</span>
        </Container>
    );
}
export default NavBar;