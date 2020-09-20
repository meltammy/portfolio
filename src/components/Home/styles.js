import React from 'react';
import styled from 'styled-components'

import IconButton from '@material-ui/core/IconButton';

export const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: center;
scroll-snap-align: start;
color: ${props => (props.darkMode ? 'white' : '#1d1d1d')};
font-family: 'Raleway', sans-serif;
`

export const DarkMode = styled(IconButton)`
&&{
    position: relative;
    top: -42vh;
    left: 93vw;
    color:#ffbd4a
    };
    @media(max-width: 800px) {
        &&{top: -24vh;
        left: 45vw;}
    }
    @media(max-width: 615px) {
        &&{top: -30vh;
        }
    }
    @media(max-width: 400px) {
        &&{top: -38vh;
        }
    }
`

export const Apresentation = styled.div`
width: fit-content;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-size: 42px;
margin-left: 3vw;

`

export const ApresentationContainer = styled.div`
width: 100%;
display: flex;
height: fit-content;
align-items: center;
justify-content: space-between;
margin-bottom: 25vh;
@media(max-width: 800px) {
flex-direction: column;
margin-bottom: 12vh;
}
@media(max-width: 615px) {
margin-bottom: 20vh;
}
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