import React, { useState, } from 'react'
import { Button, Card, Container, Form, Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import axios from 'axios'


export default function ProfileSetting() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [firsName, setFirsName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [bio, setBio] = useState("");
    const history = useHistory();



    const handleSubmit = async (event) => {
        event.preventDefault()
        const res = await axios.put(`http://localhost:5000/api/user/${localStorage.getItem('id')}`, {
            email: email,
            password: password,
            firsName: firsName,
            lastName: lastName,
            phoneNumber: phoneNumber,

        })
        setPassword("");
        setEmail("");
        setFirsName("");
        setLastName("");
        setPhoneNumber("");
        setBio("");
        history.push('/HomeLogin')

    }

    return (
        <>
            <Container className="container">
                <Card className=" mx-auto mb-4 mt-4 px-3 py-3 w-50 bg-light text-dark">
                    <Form className="mb-4" onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label className=" mt-3" >Email</Form.Label>
                            <Form.Control type="email" value={email} required
                                onChange={(event) => setEmail(event.target.value)} />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label className=" mt-3" >Password</Form.Label>
                            <Form.Control type="password" value={password} required
                                onChange={(event) => setPassword(event.target.value)} />
                        </Form.Group>
                        <Form.Group id="firsName">
                            <Form.Label className=" mt-3" >Firs Name</Form.Label>
                            <Form.Control type="email" value={firsName} required
                                onChange={(event) => setFirsName(event.target.value)} />
                        </Form.Group>
                        <Form.Group id="lastName">
                            <Form.Label className=" mt-3" >Last Name</Form.Label>
                            <Form.Control type="email" value={lastName} required
                                onChange={(event) => setLastName(event.target.value)} />
                        </Form.Group>
                        <Form.Group id="phoneNumber">
                            <Form.Label className=" mt-3" >Phone Number</Form.Label>
                            <Form.Control type="email" value={phoneNumber} required
                                onChange={(event) => setPhoneNumber(event.target.value)} />
                        </Form.Group>
                        <Form.Group id="bio">
                            <Form.Label className=" mt-3" >bio</Form.Label>
                            <Form.Control type="bio" value={bio} required
                                onChange={(event) => setBio(event.target.value)} />
                        </Form.Group>

                        <Button onClick={handleSubmit} className="w-100 mt-3 button" type="submit" > Save changes </Button>
                    </Form>
                </Card>

            </Container>

        </>);
}

