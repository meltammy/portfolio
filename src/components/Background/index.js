import React from 'react';
import './style.scss';

import { Container } from '../styledComponents/index'

const renderTriangles = () => {
    const array = []
    for (let i = 0; i < 40; i++) {
        array.push(i)
    }
    return array
}

function Background(props) {
    return (
        <Container darkMode={props.darkMode}>
            <div className='background'>
                    {renderTriangles().map(i => {
                        return (<span />)
                    })}
            </div>
        </Container>
    );
}
export default Background;