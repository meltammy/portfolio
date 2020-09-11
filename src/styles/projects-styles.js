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