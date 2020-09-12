import React from 'react';
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
width: 60%;
height: fit-content;
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
align-items: center;
background-color: #f9f9f9;
padding: 3vw;
border-radius: 20px;
box-shadow: inset 0 0 4px #00000085, 0 -6px 12px black;
`

export const StackContainer = styled.div`
width: 50%;
height: 100%;
border-radius: 50px;
padding-left:6%;
padding-right:6%;

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

export const ListContainer = styled.div`
display:flex;
flex-wrap: wrap;
width: 100%;
margin-top:5vw;
justify-content: center;
span{
    border: 2px #ffbd4a solid;
    border-radius: 10px;
    padding:5px;
    margin: 1px;


}

`