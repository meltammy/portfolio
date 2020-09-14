import React from 'react';
import '../../App.scss';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TwitterIcon from '@material-ui/icons/Twitter';

import {Container} from './styles'

function SocialBar(props) {
    return (
        <Container darkMode={props.darkMode} className={props.class}>
            <a href='https://www.linkedin.com/in/meltammy/'><LinkedInIcon style={{ fontSize: 30 }} /></a>
            <a href='https://github.com/meltammy'><GitHubIcon style={{ fontSize: 30 }} /></a>
            <a href='https://api.whatsapp.com/send?phone=5511953734273'><WhatsAppIcon style={{ fontSize: 30 }} /></a>
            <a href='https://twitter.com/meltammy_'> <TwitterIcon style={{ fontSize: 30 }} /></a>
            <a href='https://www.instagram.com/meltammy/'><InstagramIcon style={{ fontSize: 30 }} /></a>
        </Container>
    );
}
export default SocialBar;