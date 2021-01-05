import React from 'react'
import homePage from '../img/homePage.jpg'
import { Col, Row } from "react-bootstrap";


export default function Home() {
    // const [modalLogIn, setModalLogIn] = useState(false)
    // const [modalSignUp, setModalSignUp] = useState(false)

    // const openModalLogIn = () => {
    //     setModalLogIn(true)
    // }

    // const openModalSignUp = () => {
    //     setModalSignUp(true)
    // }

    return (
        <>
            <div className="container homePage">
                {/* <Row className="justify-content-md-center">
                    <Col xs={6} md={6}> */}
                <h1 className="welcome">WELCOME </h1>
                <span className="aboutUs">Adopting a rescued animal is one of the greatest feelings<br /> there is,
                    the little ones feel grateful and their way of saying<br /> thank you is with their unconditional love,
                        if you are thinking<br /> on having a pet, you should consider adopting first</span>
                <h4 className="quote">"Some things just fill <br/> your heart without trying"</h4>
                {/* </Col>
                    <Col xs={6} md={4}> */}
                <span><img src={homePage} alt="dog and a child" width="90%" /></span>

                {/* </Col> */}
                {/* </Row> */}



            </div>

        </>
    )
}
