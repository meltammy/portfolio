import React from 'react';
import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
height: fit-content;
padding-top: 10vh;
padding-bottom: 10vh;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
scroll-snap-align: start;
text-align: center;
color: ${props => (props.darkMode ? 'white' : 'black')};

h1{
    font-size: 30pt;
    margin-bottom: 4vh;
    color: #ffbd4a;
}
p{
    font-size: 22px;
    font-size: 20pt;

}
b{
    font-size: 22px;
    font-weight: normal;
}
`
export const ContactContainer = styled.div`
margin-top:5vw;
display:flex;
flex-direction:column;
`
