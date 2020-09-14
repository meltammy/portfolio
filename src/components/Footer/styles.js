import React from 'react';
import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
height: 10vh;
display: flex;
padding-left: 5vw;
align-items: center;
background-color: ${props => (props.darkMode ? '#1d1d1d' : 'white')};
border-top: 2px #ffbd4a solid;
box-shadow: ${props => (props.darkMode ? '0px -8px 10px #000000c7' : ' 0px -8px 10px #00000057')};
color: ${props => (props.darkMode ? '#ffbd4a' : 'black')};
font-size: 12pt;
`