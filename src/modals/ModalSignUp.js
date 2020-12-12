import React, { useState } from 'react'
import { Modal, Button, Form } from "react-bootstrap";
import { Last } from 'react-bootstrap/esm/PageItem';
// import Modal from 'react-modal'


export default function ModalSignUp() {
    const [usersList, setUsersList] = useState([])
    const [phoneNumber, setPhoneNumber] = useState("");
    const [firsName, setFirsName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [email, setEmail] = useState("");
    const [modalSignUp, setModalSignUp] = useState(false)

    const openModalSignUp = () =>
        setModalSignUp(true);


    const handleClose = () =>
        setModalSignUp(false);


    const handleSubmit = (event) => {
        event.preventDefault()
        // setEmail(email);
        // setPassword(password);
        const newUser = {
            id: Math.random(),
            email: email,
            password: password,
            firsName: firsName,
            lastName: lastName,
            passwordConfirm: passwordConfirm,
            phoneNumber: phoneNumber,

        };
        console.log(newUser);
        setPassword("");
        setEmail("");
        setFirsName("");
        setLastName("");
        setPhoneNumber("");
        setPasswordConfirm("");
    }

    return (
        <>
            <Button
                className="btn btn-secondary my-2 my-sm-0 mr-4"
                type="button"
                onClick={openModalSignUp}
            >Sign Up	</Button>

            <Modal show={modalSignUp} onHide={handleClose}>
                {/* < Modal.Dialog className="d-flex align-items-center justify-content-center"> */}
                <Modal.Header closeButton>
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
                        <Form.Group id="confirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" value={passwordConfirm} required
                                onChange={(event) => setPasswordConfirm(event.target.value)} />
                        </Form.Group>
                        <Form.Group id="firsName">
                            <Form.Label>Firs Name</Form.Label>
                            <Form.Control type="email" value={firsName} required
                                onChange={(event) => setFirsName(event.target.value)} />
                        </Form.Group>
                        <Form.Group id="lastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="email" value={lastName} required
                                onChange={(event) => setLastName(event.target.value)} />
                        </Form.Group>
                        <Form.Group id="phoneNumber">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="email" value={phoneNumber} required
                                onChange={(event) => setPhoneNumber(event.target.value)} />
                        </Form.Group>
                        <Button onClick={handleSubmit} className="w-100" type="submit"
                        >
                            Log In </Button>
                    </Form>

                </Modal.Body>
                <div className="log-in w-100 text-center mt-2">
                    Need an account?
                    </div>
                {/* <Link className="link-blue" to="/Signup">Sign Up</Link> */}
            </Modal>
        </>
    );

}
