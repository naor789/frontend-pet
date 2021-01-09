import React, { useState } from 'react'
import { Card, Button } from "react-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";


export default function User(user) {
    const { email, name, phoneNumber } = user.user;


    return (

        <div className="container w-50 ">
            <Card >
                <Card.Header></Card.Header>
                <Card.Body>
                    <Card.Title> name:{name} </Card.Title>
                    <Card.Text> email: {email}</Card.Text>
                    <Card.Text> phone number: {phoneNumber} </Card.Text>
                </Card.Body>
            </Card>


        </div>
    )
}
