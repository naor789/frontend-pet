import React, { useState } from 'react'
import { Card, Button } from "react-bootstrap";
import dog from "../img/dog.jpg"
import { BrowserRouter as Router, Link } from "react-router-dom";


export default function Pets() {
    const [button, setButton] = useState(false)


    return (
        <div className="container w-50 ">

            <Card>
                {/* <Card.Header>Featured</Card.Header> */}
                <Card.Body>
                    {/* <Card.Title>Special title treatment</Card.Title> */}
                    <Card.Img variant="top" src={dog} className="w-100 " />
                    <Card.Text> name: </Card.Text>
                    <Card.Text> Adoption Status: </Card.Text>
                    <Card.Text> name: </Card.Text>
                        <Card.Text> Height </Card.Text>
                        <Card.Text>weight</Card.Text>
                        <Card.Text>color</Card.Text>
                        <Card.Text>bio</Card.Text>
                        <Card.Text>dietaryRestrictions</Card.Text>
                        <Card.Text>breed</Card.Text>
                    <Link variant="primary" to="/MyPets" >
                        <Button  >
Back                            </Button>
                    </Link>
                </Card.Body>
            </Card>

        </div>
    )
}
