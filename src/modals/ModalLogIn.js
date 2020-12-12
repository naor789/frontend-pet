import React, { useState } from 'react'
import { Modal, Button, Form } from "react-bootstrap";


export default function ModalLogIn() {
    const [modalLogIn, setModalLogIn] = useState(false)
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();


    const openModalLogIn = () =>
        setModalLogIn(true);


    const handleClose = () => 
        setModalLogIn(false);

    const handleSubmit = (event) => {
        event.preventDefault()
        const userLogIn = {
            email: email,
            password: password,
        };
        console.log(userLogIn);
        setPassword("");
        setEmail("");
    }
    return (
        <>
            <Button
                className="btn btn-secondary my-2 my-sm-0 mr-4"
                type="button"
                onClick={openModalLogIn}
            > Log In </Button>

            <Modal show={modalLogIn} onHide={handleClose}>

                {/* < Modal.Dialog className="d-flex align-items-center justify-content-center"> */}
                <Modal.Header>
                    <Modal.Title>Login</Modal.Title>
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

