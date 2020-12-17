import React,{useState} from 'react'
import { Card, Button, Accordion, CardDeck, Container } from "react-bootstrap";
import dog from "../img/dog.jpg"

export default function MyPets() {
const [button, setButton] = useState(false)

    const showMore = () =>
        setButton(true);


    return (
        <div className="container ">
            <Button size="lg" type="button" className="button" >All pets</Button>
            <Button size="lg" className="button" type="button" >Saved pets</Button>
            <CardDeck className="mt-5">
                <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={dog} className="w-100" />
                    <Card.Body>
                        <Card.Title>My pets</Card.Title>
                        <Card.Text> name: </Card.Text>
                        <Card.Text> Adoption Status: </Card.Text>
                        <Card.Text> name: </Card.Text>
                                    <Button onClick={showMore}>
                                        See more..
      </Button>
                                                                        <Card.Text> Height </Card.Text>
                                    <Card.Text>weight</Card.Text>
                                    <Card.Text>color</Card.Text>
                                    <Card.Text>bio</Card.Text>
                                    <Card.Text>dietaryRestrictions</Card.Text>
                                    <Card.Text>breed</Card.Text>

                            </Card.Body>
                </Card>
            </CardDeck>
        </div>
    )
}
