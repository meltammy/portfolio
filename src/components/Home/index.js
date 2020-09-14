import React from 'react';
import '../../App.scss';

import { Container, Apresentation, Arrow, ArrowContainer, ApresentationContainer, DarkMode } from './styles'
import SocialBar from '../SocialBar/index';

import Brightness3Icon from '@material-ui/icons/Brightness3';
import WbSunnyIcon from '@material-ui/icons/WbSunny';

function Home(props) {
    return (
        <Container darkMode={props.darkMode} id='intro'>
            <div className='background'>
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
            </div>
            <ApresentationContainer>
                <DarkMode onClick={props.alterColor} aria-label="upload picture" component="span">
                    {props.darkMode ? (<WbSunnyIcon/>) :
                    (<Brightness3Icon />)}
                </DarkMode>
                <Apresentation>
                    <p>Oi, eu sou a <b>Mel</b></p>
                    <p>Desenvolvedora Web Full Stack</p>
                </Apresentation>
                <SocialBar darkMode={props.darkMode} class='socialIntro'></SocialBar>
            </ApresentationContainer>
            <ArrowContainer className='down'>
                <Arrow darkMode={props.darkMode}></Arrow>
                <Arrow darkMode={props.darkMode}></Arrow>
            </ArrowContainer>
        </Container>
    );
}
export default Home;