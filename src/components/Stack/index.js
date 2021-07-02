import React, { useEffect, useState } from 'react';
import front from '../../img/front.png'
import back from '../../img/back.png'
import { Container, StackContainer, MainContainer, ListContainer } from './styles'
import firebase from 'firebase'

function Stack(props) {
    const [stacks, setStacks] = useState([])
    const db = firebase.firestore();

    useEffect(() => {
        var docRef = db.collection("stacks").doc("stacks");

        docRef.get().then((doc) => {
            if (doc.exists) {
                setStacks(doc.data().value);
            } else {
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }, [])

    return (
        <Container id='stack'>
            <MainContainer darkMode={props.darkMode}>
                <StackContainer>
                    <img src={front}></img>
                    <h1>Front-end</h1>
                    {/* Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> */}
                    <p>Desenvolvimento de aplicações
                        web responsivas utilizando HTML, CSS e
                        JavaScript.
                    </p>
                </StackContainer>
                <StackContainer>
                    <img src={back}></img>
                    <h1>Back-end</h1>
                    {/* Icons made by <a href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp">Eucalyp</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> */}
                    <p>Aplicações utilizando NodeJS,
                        Typescript e MySQL.
                        Criação de API's para
                        comunicação com front-end.
                    </p>
                </StackContainer>
                <ListContainer>
                    {stacks?.map(item => (<span>{item}</span>))}
                </ListContainer>
            </MainContainer>
        </Container>
    );
}
export default Stack;