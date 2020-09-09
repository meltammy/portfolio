import React from 'react';
import '../App.css';
import styled from 'styled-components'

export const HireMe = styled.div`
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
h1{
    font-size: 38px;
    margin-bottom: 4vh;

}
p{
    font-size: 22px;
    width: 50%;
}
b{
    font-size: 22px;
    width: 50%;
}
`