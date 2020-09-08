import React from 'react';
import '../App.css';
import styled from 'styled-components'

import mel3 from '../img/mel3.png'
import bio from '../img/bio.jpg'


export const Introduction = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
scroll-snap-align: start;
background-image:  linear-gradient(#ffffff40, #7575756b, #e61a10e8); 
color: white;
`

export const Apresentation = styled.div`
width: fit-content;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-size: 42px;
`

export const Arrow = styled.div`
border: 2px #ffffff80 solid;
width: 10px;
height: 10px;
position: relative;
border-top-color: transparent;
border-left-color: transparent;
bottom: 0;
top: 30vh;
transform: rotate(45deg);
`