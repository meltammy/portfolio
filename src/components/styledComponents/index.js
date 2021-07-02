import React from 'react';
import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: center;
color: ${props => (props.darkMode ? 'white' : '#1d1d1d')};
font-family: 'Raleway', sans-serif;
position: absolute;
z-index:-100;
`