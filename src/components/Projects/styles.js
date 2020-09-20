import React from 'react';
import styled from 'styled-components'

import pc from '../../img/pc-meelzer.png'
import note from '../../img/note2.png'
import ipad from '../../img/ipad2.png'

export const Container = styled.div`
width: 100%;
height: fit-content;
padding-top: 10vh;
padding-bottom: 8vh;
display: flex;
flex-direction: column;
align-items: center;
scroll-snap-align: start;
background-color: ${props => (props.darkMode ? '#ffffff' : '#ffbd4a')};
box-shadow: ${props => (props.darkMode ? '0 -6px 12px black' : '0 -6px 12px #00000057')};
`

export const ProjectContainer = styled.div`
width: 75%;
display: flex;
align-items: center;
justify-content: center;
@media(max-width: 750px) {
  width: 85%;
}
@media(max-width: 600px) {
  flex-direction: column;
}
`

export const Pc = styled.div`
  background-image: url(${pc});
`

export const Ipad = styled.div`
  background-image: url(${ipad});

`

export const Note = styled.div`
  background-image: url(${note});

`

export const TextContainer = styled.div`
display: flex;
flex-direction: column;
width:50%;
@media(max-width: 800px) {
  h1{
    font-size: 22pt;
  }
  h2{
    font-size: 16pt;
  }
}
@media(max-width: 600px) {
  width: 85%;
}
`

export const NameStack = styled.div`
@media(max-width: 600px) {
  width: 75vw;
  margin-right: 4vw;
}

`

export const Description =styled.div`
  display: flex;
  flex-direction: column;
`

export const ButtonContainer = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
@media(max-width: 1120px) {
  flex-direction: column;
  align-items: flex-start;
}

`

export const ButtonProject = styled.button`
width: 48%;
height: fit-content;
min-height:fit-content;
min-width:fit-content;
padding:1vh;
margin-top:1vw;
border:none;
border: 1px #402F12 solid;
border-radius:8px;
transition: 0.5s;
box-shadow: 0px 2px 6px 0px black;
outline: none;
color: white;
font-size: 12pt;
background-color: #105FB3;
a{
    text-decoration:none;
    color:white;
    width: 100%;
}
:hover{
color: white;
background-color: #E8B938;
box-shadow: -3px 1px 4px 0px black;
}
@media(max-width: 600px) {
  width: 100%;
  margin-top:3vw;
}
@media(max-width: 350px) {
font-size: 10pt;
}
`