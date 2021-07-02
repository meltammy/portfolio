import React from 'react';
import '../../App.scss';

import { HomeContainer, CenterContainer, Apresentation, Arrow, ArrowContainer, BlockLeft, DarkMode, SocialBar } from './styles'

import Brightness3Icon from '@material-ui/icons/Brightness3';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';


function Home(props) {
    return (
        <HomeContainer darkMode={props.darkMode} id='intro'>
            <DarkMode onClick={props.alterColor} aria-label="upload picture" component="span">
                {props.darkMode ? (<WbSunnyIcon />) :
                    (<Brightness3Icon />)}
            </DarkMode>
            <CenterContainer>
                <BlockLeft />
                <Apresentation>
                    <p>Oi, eu sou a <b>Mel</b></p>
                    <p>Desenvolvedora Web Full Stack</p>
                </Apresentation>
                <SocialBar darkMode={props.darkMode}>
                        <a href='https://www.linkedin.com/in/meltammy/' target="_blank"><LinkedInIcon style={{ fontSize: 30 }} /></a>
                        <a href='https://github.com/meltammy' target="_blank"><GitHubIcon style={{ fontSize: 30 }} /></a>
                        <a href='https://api.whatsapp.com/send?phone=5511953734273' target="_blank"><WhatsAppIcon style={{ fontSize: 30 }} /></a>
                </SocialBar>
            </CenterContainer>
            <ArrowContainer className='down'>
                <Arrow darkMode={props.darkMode}></Arrow>
                <Arrow darkMode={props.darkMode}></Arrow>
            </ArrowContainer>
        </HomeContainer>
    );
}
export default Home;