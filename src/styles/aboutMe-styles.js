import React from 'react';
import '../App.css';
import styled from 'styled-components'

import mel2 from '../img/mel2.jpeg'

export const AboutMe = styled.div`
width: 100%;
height: fit-content;
padding-top: 10vh;
display: flex;
justify-content: center;
align-items: center;
scroll-snap-align: start;
@media(max-width: 450px) {
flex-direction: column;
height: 100vh;
justify-content: center;
height: 100vh;
}
`

export const PhotoContainer = styled.div`
width:50%;
padding: 5vw;
display: flex;
flex-direction: column;
align-items: flex-end;
@media(max-width: 750px) {
  padding: 3vw;
  margin-top: 5vw;
}
@media(max-width: 600px) {
  padding: 2vw;
  margin-right: 2vw;
}
@media(max-width: 450px) {
width: 90%;
align-items: center;
}
`

export const Photo = styled.div`
background: url(${mel2});
width: 315px;
height: 315px;
border-radius: 100vw;
background-position: center;
background-size: cover;
@media(max-width: 800px) {
width:200px;
height: 300px;
}
@media(max-width: 450px) {
width:200px;
height: 230px;
}
`

export const TextAboutMe = styled.div`
width:40vw;
min-height: 330px;
display: flex;
flex-direction: column;
justify-content: center;
padding-right: 8vw;
h1{
  font-size:42px;
}
h2{
  margin-top: 1vw;
  color:white;
  font-weight: normal;
}
p{
  text-align: justify;
  color:white;
  font-size:1em;
  margin-top:1vw;
}
@media(max-width: 1080px) {
p{
  font-size:0.9em;
}
h1{
  font-size: 2.4em;
}
h2{
  font-size: 1.4em;
}
}
@media(max-width: 800px) {
  min-height: 300px;
}
@media(max-width: 750px) {
  h1{
  font-size: 2em;}
  padding-right: 5vw;
}
@media(max-width: 620px) {
  h1{
  font-size: 1.8em;}
}
@media(max-width: 560px) {
  h1{
  font-size: 1.5em;
}
}
@media(max-width: 450px) {
width: 90%;
justify-content: flex-start;
align-items: center;
min-height: fit-content;
padding: 11vw;
padding-top: 4vw;
}
`

export const CV = styled.button`
color: black;
width: 24vh;
height: fit-content;
min-height:fit-content;
min-width:fit-content;
padding:1.5vh;
margin-top:1vw;
background-color: #ffbd4a;
border:none;
border: 1px #402F12 solid;
border-radius:8px;
font-size:1rem;
text-transform: uppercase;
transition: 0.5s;
box-shadow: -3px 1px 6px 0px black;
outline: none;

:hover{
color: white;
background-color: #E8B938;
box-shadow: -3px 1px 4px 0px black;
}
`