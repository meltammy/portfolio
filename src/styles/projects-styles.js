import React from 'react';
import '../App.css';
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
`

export const ProjectContainer = styled.div`
width: 60%;
display: flex;
align-items: center;
`

export const Pc = styled.div`
width: 20vw;
height: 20vw;
background-image: url(${pc});
background-repeat: no-repeat;
background-position: center;
margin: 5vw;

`

export const Ipad = styled.div`
width: 20vw;
height: 20vw;
background-image: url(${ipad});
background-repeat: no-repeat;
background-position: center;
margin: 5vw;

`

export const Note = styled.div`
width: 23vw;
height: 20vw;
background-image: url(${note});
background-repeat: no-repeat;
background-position: center;
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