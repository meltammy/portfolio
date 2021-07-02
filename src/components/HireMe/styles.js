import React from 'react';
import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
height: fit-content;
padding-top: 16vh;
padding-bottom: 6vh;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
text-align: center;
color: ${props => (props.darkMode ? 'white' : 'black')};

h1{
    font-size: 30pt;
    margin-bottom: 4vh;
    color: #ffbd4a;
}
p{
    font-size: 20pt;
}
b{
    font-size: 20pt;
    font-weight: normal;
}
@media(max-width: 800px) {
    h1{
        font-size: 26pt;
    }
    p{
        font-size: 16pt;
    }
    b{
        font-size: 16pt;
    }
}
@media(max-width: 600px) {
    h1{
        font-size: 22pt;
    }
    p{
        font-size: 12pt;
    }
    b{
        font-size: 12pt;
    }
}
`
export const ContactContainer = styled.div`
margin-top:6vh;
display:flex;
flex-direction:column;
`

export const SocialBar = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
position: relative;
height: 35vh;
width: 250px;
a{
    text-decoration:none;
    color: ${props => (props.darkMode ? 'white' : '#1d1d1d')};
    :hover{
        color: #ffdb4a;
    }
}
`
