import React, { useState, useEffect } from 'react';
import { Card, Button, CardDeck, Col, Row } from "react-bootstrap";
import dog from "../img/dog.jpg"
import { BrowserRouter as Router, Link } from "react-router-dom";
import Pet from './Pet'
import axios from 'axios'



export default function MyPets() {
    const [button, setButton] = useState(false)
    const [petsList, setPetsList] = useState([])



    useEffect(() => {
        const getPetsList = async () => {
            const res = await axios.get('http://localhost:5000/api/pet')
            setPetsList(res.data);
            console.log(petsList);
        }
        getPetsList()
    }, [])  


    return (
        // <div>
           <div className="container">
            <Row>
            {petsList.map((pet) => (
                <Pet key={pet.id} pet={pet} />
            )
            )}
            </Row>
        </div>

        /* <Button size="lg" type="button" className="button" >All pets</Button>
        <Button size="lg" className="button" type="button" >Saved pets</Button>
        <CardDeck className="mt-5">
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={dog} className="w-100" />
                <Card.Body >
                    <Card.Title>My pets</Card.Title>
                    <Card.Text> name: {name} </Card.Text>
                    <Card.Text> Adoption Status: </Card.Text>
                    <Card.Text> name: </Card.Text>
                    <Link className="link-blue" to="/Pet" >
                        <Button  >
                            See more
                        </Button>
                    </Link>
                    {/* <Card.Text> Height </Card.Text>
                    <Card.Text>weight</Card.Text>
                    <Card.Text>color</Card.Text>
                    <Card.Text>bio</Card.Text>
                    <Card.Text>dietaryRestrictions</Card.Text>
                    <Card.Text>breed</Card.Text> */

        /* </Card.Body>
                        </Card >
                    </CardDeck > * /} */
        // </div >
    )
}
