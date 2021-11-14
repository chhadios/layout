import React from "react";
import { Container } from 'react-bootstrap';
import logo from "../components/media/Robo 2.gif"
function Content() {
  return (
    <>
    <Container className="containt" >
        <div className="containt-text">
            DESIGN THAT MAKES
             A DIFFERENCE
        </div>
    <img src={logo}/>
    </Container>
    </>
  );
}

export default Content;