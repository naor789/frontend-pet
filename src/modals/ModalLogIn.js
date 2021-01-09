import React, { useState } from 'react'
import { Modal, Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import axios from 'axios'


export default function ModalLogIn() {
    const [modalLogIn, setModalLogIn] = useState(false)
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const history = useHistory();


    const openModalLogIn = () =>
        setModalLogIn(true);


    const handleClose = () =>
        setModalLogIn(false);

    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await axios.post("http://localhost:5000/api/user/login", {
            email: email,
            password: password,
        });

        const logIn = await axios.post("http://localhost:5000/api/user/login", {
            email: email,
            password: password
        })
        if (logIn.status === 200) {
            localStorage.setItem('token', response.data);
        }
        setModalLogIn(false);
        console.log(logIn)
        history.push('/')
        const reload = window.location.reload()
    }

    // const handleSubmit = (event) => {
    //     event.preventDefault()
    //     const userLogIn = {
    //         email: email,
    //         password: password,
    //     };
    //     console.log(userLogIn);
    //     setPassword("");
    //     setEmail("");
    // }
    return (
        <>
            <Button
                className="btn btn-secondary my-2 my-sm-0 mx-3"

                type="button"
                onClick={openModalLogIn}
            > Log In </Button>

            <Modal show={modalLogIn} onHide={handleClose}>

                {/* < Modal.Dialog className="d-flex align-items-center justify-content-center"> */}
                <Modal.Header>

                    <Modal.Title>Log In</Modal.Title>
                    <Button variant="light" onClick={handleClose} type="button">x</Button>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" value={email} required
                                onChange={(event) => setEmail(event.target.value)} />

                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" value={password} required
                                onChange={(event) => setPassword(event.target.value)} />
                        </Form.Group>
                        <Button onClick={handleSubmit} className="w-100" type="submit">
                            Log In </Button>
                    </Form>

                </Modal.Body>
                {/* <div className="log-in w-100 text-center mt-2"> */}
                {/* Need an account?
                    </div> */}
                {/* <Link className="link-blue" to="/Signup">Sign Up</Link> */}
            </Modal>
        </>
    );

}

