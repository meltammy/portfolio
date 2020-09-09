import React from 'react';
import '../App.css';
import styled from 'styled-components'

export const Stack = styled.div`
width: 100%;
height: fit-content;
padding-top: 15vh;
padding-bottom: 10vh;
display: flex;
flex-direction: column;
align-items: center;
scroll-snap-align: start;
`

export const MainStackContainer = styled.div`
margin-right: 5vw;
margin-left: 5vw;
height: fit-content;
display: flex;
justify-content: space-between;
align-items: center;
background-color: white;
padding: 3vw;
border-radius: 20px;
box-shadow: inset 0 0 4px #00000085;
`

export const StackContainer = styled.div`
width: 30%;
height: 100%;
border-radius: 50px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
img{
    width: 80px;
}
ul{
list-style-type: none;
}
`