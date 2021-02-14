import React from 'react'
import { Card, Button } from "react-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";


export default function Pet(props) {
    const { name, adoptionStatus, picture, _id } = props.pet

    return (


        <Card style={{ width: "18rem" }}>
            <Card.Header></Card.Header>
            <Card.Body>
                <Card.Title> name: {name}</Card.Title>
                <Card.Img variant="top" id="petsPhoto" src={picture} alt={name} className="w-100 " />
                <Card.Text> Adoption Status:{adoptionStatus} </Card.Text>
                <Link variant="primary" to={`/petcard/${_id}`}>
                    <Button className="button">
                        see more
                    </Button>
                </Link>
            </Card.Body>
        </Card>


    )
}
