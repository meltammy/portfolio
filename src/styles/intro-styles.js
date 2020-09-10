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
justify-content: flex-end;
align-items: center;
scroll-snap-align: start;
color: white;
font-family: 'Raleway', sans-serif;

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
`

export const Arrow = styled.div`
border: 2px #ffffff80 solid;
width: 10px;
height: 10px;
border-top-color: transparent;
border-left-color: transparent;
transform: rotate(45deg);
`