import React from 'react';
import '../../App.scss'

import { Container, ContactContainer, SocialBar } from './styles'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

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
            <SocialBar darkMode={props.darkMode}>
                        <a href='https://www.linkedin.com/in/meltammy/' target="_blank"><LinkedInIcon style={{ fontSize: 30 }} /></a>
                        <a href='https://github.com/meltammy' target="_blank"><GitHubIcon style={{ fontSize: 30 }} /></a>
                        <a href='https://api.whatsapp.com/send?phone=5511953734273' target="_blank"><WhatsAppIcon style={{ fontSize: 30 }} /></a>
            </SocialBar>
        </Container>
    );
}

export default HireMe;