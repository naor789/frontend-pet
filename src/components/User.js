import React from 'react'
import { Card } from "react-bootstrap";


export default function User(user) {
    const { email, firstName, phoneNumber } = user.user;


    return (

        <div className="container w-50 ">
            <Card >
                <Card.Header></Card.Header>
                <Card.Body>
                    <Card.Title> name:{firstName} </Card.Title>
                    <Card.Text> email: {email}</Card.Text>
                    <Card.Text> phone number: {phoneNumber} </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
