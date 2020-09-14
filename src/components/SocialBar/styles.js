import React from 'react';
import styled from 'styled-components'

export const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
position: relative;
a{
    text-decoration:none;
    color: ${props => (props.darkMode ? 'white' : '#1d1d1d')};
    :hover{
        color: #ffdb4a;
    }
}

`