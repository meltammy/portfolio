import React from 'react';
import styled from 'styled-components'

import IconButton from '@material-ui/core/IconButton';
const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}
export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
};
export const HomeContainer = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: space-between;;
align-items: flex-end;
color: ${props => (props.darkMode ? 'white' : '#1d1d1d')};
font-family: 'Raleway', sans-serif;
`

export const CenterContainer = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 3vw;
flex-direction: column;

@media ${device.laptop} {
    flex-direction: row;
}
`

export const DarkMode = styled(IconButton)`
&&{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color:#ffbd4a;
    margin-right: 3vw;
};
`

export const Apresentation = styled.div`
width: fit-content;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-size: 42px;
`

export const ApresentationContainer = styled.div`
width: 100%;
display: flex;
height: fit-content;
align-items: center;
justify-content: space-between;

`


export const ArrowContainer = styled.div`
width: 100%;
height: 5vw;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
top:0vh;
@media(max-width: 800px) {
height: 12vw;
}
`

export const Arrow = styled.div`
border: ${props => (props.darkMode ? '2px #ffffff80 solid' : '2px #00000080  solid')};
width: 10px;
height: 10px;
border-top-color: transparent;
border-left-color: transparent;
transform: rotate(45deg);
`
export const BlockLeft = styled.div`
width: 30px;
`

export const SocialBar = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
position: relative;
height: 35vh;
width: 50vw;
a{
    text-decoration:none;
    color: ${props => (props.darkMode ? 'white' : '#1d1d1d')};
    :hover{
        color: #ffdb4a;
    }
}
@media ${device.laptop} {
    flex-direction: column;
    width: 30px;
}
`