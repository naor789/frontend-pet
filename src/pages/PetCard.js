import React, { useState } from 'react'
import { Card, Button } from "react-bootstrap";
import dog from "../img/dog.jpg"
import { BrowserRouter as Router, Link } from "react-router-dom";


export default function PetCard(props) {
    // const [button, setButton] = useState(false)
    const { name, adoptionStatus, height, weight, color, bio, dietaryRestrictions, breed, picture } = props.pet


    return (

        <div className="container w-50 ">

        <Card >
            <Card.Header>Featured</Card.Header>
            <Card.Body>
                <Card.Title> name: {name}</Card.Title>
                {/* <Card.Img variant="top" id="petsPhoto" src={`http://localhost:5000/${picture}`} alt={name} className="w-100 " /> */}
                <Card.Text> Adoption Status:{adoptionStatus} </Card.Text>
                <Card.Text> Height: {height} </Card.Text>
                <Card.Text>weight: {weight}</Card.Text>
                <Card.Text>color: {color}</Card.Text>
                <Card.Text>bio: {bio}</Card.Text>
                <Card.Text>dietaryRestrictions: {dietaryRestrictions}</Card.Text>
                <Card.Text>breed:{breed}</Card.Text>
                <Link variant="primary" to="/MyPets" >
                    <Button  > see more </Button>
                </Link>
            </Card.Body>
        </Card>


       </div>
    )
}
