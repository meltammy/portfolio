import React from 'react';
import styled from 'styled-components'

import aboutme2 from '../../img/aboutme2.png'

export const Container = styled.div`
background: url(${aboutme2});
background-position: center;
background-size: cover;
width: 100%;
height: 110vh;
display: flex;
justify-content: center;
align-items: center;
scroll-snap-align: start;
font-family: 'Raleway', sans-serif;
@media(max-width: 800px) {
  height: 100vh;
}
@media(max-width: 450px) {
justify-content: center;
height: 100vh;
}
`

export const TextAboutMe = styled.div`
min-height: 330px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
padding: 5vw;
font-weight: 400;
h1{
  font-size: 42pt;
  text-transform: uppercase;
  color: #1d1d1d;
}
p{
  color:white;
  margin-top:1vw;
  font-weight: 300;
  text-shadow: 0px 0px 5px black;
  font-size: 20pt;
  width: 80%;
}
@media(max-width: 800px) {
  h1{
    font-size: 40pt;
  }
  p{
    font-size: 18pt;
  }
}
@media(max-width: 750px) {

}
@media(max-width: 620px) {

}
@media(max-width: 450px) {
  padding: 0vw;
  h1 {
    font-size: 24pt;
}
p {
    font-size: 12pt;
}
}
@media(max-width: 350px) {
  h1 {
    font-size: 20pt;
}
p {
    font-size: 8pt;
}
}
`

export const CV = styled.a`
color: white;
width: 24vh;
height: fit-content;
min-height:fit-content;
min-width:fit-content;
padding:1.5vh;
margin-top:5vw;
background-color: #105FB3;
border:none;
border: 1px #402F12 solid;
border-radius:8px;
font-size:1rem;
text-transform: uppercase;
transition: 0.5s;
box-shadow: 0px 2px 6px 0px black;
outline: none;
text-decoration: none;
:hover{
color: white;
background-color: #E8B938;
box-shadow: -3px 1px 4px 0px black;
}
@media(max-width: 350px) {
font-size: 10pt;
}
`