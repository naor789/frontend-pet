import React, { useState } from 'react'
import { Card, Button } from "react-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";


export default function User(user) {
    // const [button, setButton] = useState(false)
    const { email, name , phoneNumber } = user.user;
  

    return (

        <div className="container w-50 ">
            <Card >
                <Card.Header></Card.Header>
                <Card.Body>
                    <Card.Title> name:{name} </Card.Title>
                    {/* <Card.Img variant="top" id="petsPhoto" src={`http://localhost:5000/${picture}`} alt={name} className="w-100 " /> */}
                    <Card.Text> email: {email }</Card.Text>
                    <Card.Text> phone number: {phoneNumber} </Card.Text>
                    {/* <Card.Text>bio: {bio}</Card.Text>
                    <Card.Text>dietaryRestrictions: {dietaryRestrictions}</Card.Text>
                    <Card.Text>breed:{breed}</Card.Text> */}
                    {/* <Link variant="primary" to="/MyPets" >
                        <Button  > see more </Button>
                    </Link> */}
                </Card.Body>
            </Card>


        </div>
    )
}
