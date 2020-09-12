import React from 'react';
import styled from 'styled-components'

import pc from '../img/pc.png'
import note from '../img/note.png'
import ipad from '../img/ipad.png'

export const Projects = styled.div`
width: 100%;
height: fit-content;
padding-top: 10vh;
display: flex;
flex-direction: column;
align-items: center;
scroll-snap-align: start;
background-color: #ffffff;
box-shadow: 0 -6px 12px black;

`

export const ProjectContainer = styled.div`
width: 60%;
display: flex;
align-items: center;
`

export const Pc = styled.div`
  background-image: url(${pc});
`

export const Ipad = styled.div`
  background-image: url(${ipad});

`

export const Note = styled.div`
  background-image: url(${note});

&&{
    width: 23vw;
}
`

export const TextContainer = styled.div`
display: flex;
flex-direction: column;
width:50%;
h1{

}
h2{

}
p{

}
`

export const ButtonProject = styled.button`
width: 50%;
height: fit-content;
min-height:fit-content;
min-width:fit-content;
padding:1vh;
margin-top:1vw;
background-color: #ffbd4a;
border:none;
border: 1px #402F12 solid;
border-radius:8px;
font-size:1rem;
transition: 0.5s;
box-shadow: 0px 2px 6px 0px black;
outline: none;

:hover{
color: white;
background-color: #E8B938;
box-shadow: -3px 1px 4px 0px black;
}
@media(max-width: 350px) {
font-size: 10pt;
}
`