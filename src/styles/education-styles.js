import React from 'react';
import styled from 'styled-components'

export const Education = styled.div`
width: 100%;
height: fit-content;
padding-top: 10vw;
padding-bottom: 10vw;
display: flex;
flex-direction: column;
align-items: center;
scroll-snap-align: start;
`

export const MainEducationContainer = styled.div`
margin-right: 5vw;
margin-left: 5vw;
height: fit-content;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
padding-top: 3vw;
padding-bottom: 3vw;
@media(max-width: 1015px) {
justify-content: space-evenly;
}
`

export const EducationContainer = styled.div`
background-color: white;
border-radius: 15px;
box-shadow: inset 0 0 4px #00000085;
width: 32%;
height: fit-content;
min-height: 280px;
border-radius: 10px;
display: flex;
flex-direction: column;
padding: 2vw;
h1{
    height: 1vw;
    font-weight: normal;
    font-size: 26px;
    margin-bottom: 2vw;
}
h2{
    height: 1vw;
    font-size: 18px;
    font-weight: normal;
    margin-bottom: 2vw;
}
h3{
    height: 1vw;
    font-weight: normal;
    margin-bottom: 1vw;
    font-size: 16px;
}
p{
    min-height: fit-content;
    height: 6vw;
    font-size: 14px;
}
@media(max-width: 2095px) {
h1{
    font-size: 24px;
}
}
@media(max-width: 1930px) {
p{
    height: 8vw;
}
h1{
    height: 2vw;
}
}
@media(max-width: 1615px) {
p{
    height: 11vw;
}
h1{
    height: 3vw;
}
}
@media(max-width: 1500px) {
p{
    height: 13vw;
}
}
@media(max-width: 1365px) {
h1{
    height: 8vw;
}
h2 {
    height: 4vw;
}
}
@media(max-width: 1330px) {
    p{
    height: 18vw;
}
}
@media(max-width: 1300px) {
    p{
    height: 16vw;
}
}
@media(max-width: 1190px) {
    height: 45vw;
}
@media(max-width: 1050px) {
    height: 50vw;
}
@media(max-width: 1015px) {
    width: 40%;
    margin-bottom: 5vw;
    height: 45vw;
    h1{
        height: fit-content;

    }
}
@media(max-width: 900px) {
    height: 30vw;
    width: 75%;
h1 {
    height: 5vw;
    font-size: 22px;
}
h3{
    height: 2vw;
}
}
@media(max-width: 815px) {
    height: fit-content;
p{
    height: fit-content;
}
h3{
    height: 3vw;
}
}
@media(max-width: 700px) {
    h1{
        font-size: 20px;
    }
}
@media(max-width: 630px) {
    h1{
        font-size: 18px;
    }
}
@media(max-width: 550px) {
    height: 55vw;
h1{
    height: 10vw;
}
}
@media(max-width: 500px) {
    width: 90%;
}
`

