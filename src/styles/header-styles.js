import React from 'react';
import '../App.css';
import styled from 'styled-components'

export const Header = styled.div`
width: 100%;
height: 10vh;
display: flex;
position: sticky;
top: 0;
left: 0;
color: white;
justify-content: flex-end;
align-items: center;
scroll-snap-align: start;
`

export const LinkHeader = styled.a`
margin-left: 5vw;
color: white;
text-decoration: none;
`

export const SocialBar = styled.div`
width: fit-content;
height: 35vh;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
position: relative;
top: 5vw;
@media(max-width: 500px) {
  left: 90%;
}
`