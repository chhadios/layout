import React from 'react';
import { Container } from 'react-bootstrap';
import video from "../components/media/Bg Leaves Animation-01.mp4";
const MainLayout = (props) => {
    return (
        <Container className="mt-5 mb-5">
            <video
                autoPlay loop muted
                style={{
                    position: "absolute",
                    width: "100%",
                    left: "50%",
                    top: "50%",
                    height: "100%",
                    objectFit: "cover",
                    transform: "translate(-50%,-50%)",
                    zIndex: "-1"
                }}
            >
                <source src={video} type="video/mp4" />
            </video>
            {props.children}
        </Container>
    )
}
export default MainLayout