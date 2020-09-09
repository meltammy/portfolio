import React from 'react';
import '../App.css';
import styled from 'styled-components'

export const Education = styled.div`
width: 100%;
height: 100vh;
padding-top: 10vh;
display: flex;
flex-direction: column;
align-items: center;
scroll-snap-align: start;
`

export const MainEducationContainer = styled.div`
margin-right: 5vw;
margin-left: 5vw;
height: fit-content;
display: flex;
justify-content: space-between;
align-items: center;
padding-top: 3vw;
padding-bottom: 3vw;
`

export const EducationContainer = styled.div`
background-color: white;
border-radius: 15px;
box-shadow: inset 0 0 4px #00000085;
width: 32%;
height: 100%;
border-radius: 10px;
display: flex;
flex-direction: column;
padding: 2vw;
h1{
    height: 10vh;
    font-weight: normal;
    font-size: 24px;
    margin-bottom: 1vw;
}
h2{
    height: 1vh;
    font-size: 18px;
    font-weight: normal;
    margin-bottom: 1vw;
}
h3{
    height: 5vh;
    font-weight: normal;
    margin-bottom: 1vw;
    font-size: 16px;
}
p{
    height: 30vh;
    font-size: 14px;}
`

export const LogoContainer = styled.div`
width:100%;
height: 20vh;
display:flex;
align-items: center;
justify-content: center;
`

