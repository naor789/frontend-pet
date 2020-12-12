import React, { useState } from 'react'
import { Button, Card, Container, Form } from "react-bootstrap";


export default function ProfileSetting() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [firsName, setFirsName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [email, setEmail] = useState("");
    const [bio, setBio] = useState("");



    const handleSubmit = (event) => {
        event.preventDefault()
        // setEmail(email);
        // setPassword(password);
        const updateProfile = {
            id: Math.random(),
            email: email,
            password: password,
            firsName: firsName,
            lastName: lastName,
            passwordConfirm: passwordConfirm,
            phoneNumber: phoneNumber,

        };
        console.log(updateProfile);
        setPassword("");
        setEmail("");
        setFirsName("");
        setLastName("");
        setPhoneNumber("");
        setPasswordConfirm("");
        setBio("");
    }

    return (
        <>
            <Container className="container">
                <Card className=" mx-auto mt-4 px-3 py-3 w-50 bg-light text-dark">
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
                        <Form.Group id="bio">
                            <Form.Label>bio</Form.Label>
                            <Form.Control type="bio" value={bio} required
                                onChange={(event) => setBio(event.target.value)} />
                        </Form.Group>

                        <Button onClick={handleSubmit} className="w-100" type="submit" > Save changes </Button>
                    </Form>
                </Card>

            </Container>

        </>);
}

