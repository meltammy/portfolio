import React, { useEffect, useState } from 'react';
import { Container, TextAboutMe, CV } from './styles'
import firebase from 'firebase'

function AboutMe(props) {
  const [cv, setCv] = useState(null)
  const db = firebase.firestore();

  useEffect(() => {
      var docRef = db.collection("aboutMe").doc("cv");

      docRef.get().then((doc) => {
          if (doc.exists) {
            setCv(doc.data().value);
          } else {
              console.log("No such document!");
          }
      }).catch((error) => {
          console.log("Error getting document:", error);
      });
  }, [])

  return (
    <Container id='aboutMe'>
      <TextAboutMe darkMode={props.darkMode} className='textAboutMe'>
        <h1> Melissa Tammy</h1>
        <p>Desenvolvedora Web Full Stack, analista de sistemas, fotógrafa e apaixonada por ciência e tecnologia.</p>
        {cv && <CV darkMode={props.darkMode} target="_blank" href={cv} download>CV em PDF</CV>}
      </TextAboutMe>
    </Container>
  );
}
export default AboutMe;