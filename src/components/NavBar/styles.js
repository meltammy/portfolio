import React from 'react';
import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
height: 10vh;
display: flex;
position: sticky;
top: 0;
left: 0;
justify-content: flex-end;
align-items: center;
scroll-snap-align: start;
z-index: 1;
background-color: ${props => (props.darkMode ? '#1d1d1d' : 'white')};
padding-right: 2vw;
border-bottom: 2px #ffbd4a solid;
box-shadow: ${props => (props.darkMode ? '0 3px 11px black' : '0 3px 11px #000000a1')};
a{
    margin-left: 5vw;
    text-decoration: none;
    color: ${props => (props.darkMode ? 'white' : '#1d1d1d')}
}
`


