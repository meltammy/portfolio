import React from 'react';
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
z-index: 1;
`

export const LinkHeader = styled.a`
margin-left: 5vw;
color: white;
text-decoration: none;
`

export const SocialBar = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
position: relative;
`