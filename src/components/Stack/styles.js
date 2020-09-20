import React from 'react';
import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
height: fit-content;
padding-top: 15vh;
padding-bottom: 10vh;
display: flex;
flex-direction: column;
align-items: center;
scroll-snap-align: start;
`

export const MainContainer = styled.div`
margin-right: 5vw;
margin-left: 5vw;
width: 60%;
height: fit-content;
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
align-items: center;
background-color: #f9f9f9;
border-radius: 20px;
box-shadow: ${props => (props.darkMode ? 'inset 0 0 4px #00000085, 0 -6px 12px black' : 'inset 0 0 4px #00000085, 0 -6px 12px #00000057')};
@media(max-width: 750px) {
    width: 95%;
}
@media(max-width: 500px) {
    flex-direction:column;
    width: 85%;
}
`

export const StackContainer = styled.div`
width: 50%;
height: 100%;
border-radius: 50px;
padding-left:6%;
padding-right:6%;
margin-top: 3vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
text-align: center;
@media(max-width: 500px) {
    width: 80%;
    margin-top: 6vw;
}
img{
    width: 80px;
}
`

export const ListContainer = styled.div`
display:flex;
flex-wrap: wrap;
width: 100%;
margin:3vw;
justify-content: center;
@media(max-width: 500px) {
width: fit-content;
margin-top: 6vw;
}

span{
    border: 2px #ffbd4a solid;
    border-radius: 10px;
    padding:5px;
    margin: 1px;
}

`