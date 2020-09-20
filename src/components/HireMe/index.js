import React from 'react';
import '../../App.scss'

import { Container, ContactContainer } from './styles'
import SocialBar from '../SocialBar/index'

function HireMe(props) {
    return (
        <Container darkMode={props.darkMode} id='hireMe'>
            <h1>Entre em contato!</h1>
            <p>Procuro oportunidade de trabalho onde eu possa aprender,
            </p>
            <p>me desenvolver e evoluir na minha carreia profissional.
            </p>
            <ContactContainer>
                <b>E-mail: mel . tammy2@gmail.com
                </b>
                <b>
                    Celular: (11) 95373-4273
                </b>
            </ContactContainer>
            <SocialBar darkMode={props.darkMode} class="social-hireMe"></SocialBar>
        </Container>
    );
}

export default HireMe;