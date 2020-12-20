import React, { useState } from 'react'
import { Col, Button, Form, Row, Image } from "react-bootstrap";
import logoblack from "../img/logoblack.png"


export default function AddPet() {

    const [name, setName] = useState("");
    const [adoptionStatus, setAdoptionStatus] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [color, setColor] = useState("");
    const [bio, setBio] = useState("");
    const [dietaryRestrictions, setDietaryRestrictions] = useState("");
    const [breed, setBreed] = useState("");


    const handleSubmit = (event) => {
        event.preventDefault()
        const newPet = {
            // id: Math.random(),
            name: name,
            adoptionStatus: adoptionStatus,
            height: height,
            weight: weight,
            color: color,
            bio: bio,
            dietaryRestrictions: dietaryRestrictions,
            breed: breed,

        };
        console.log(newPet);
        setName("");
        setAdoptionStatus("");
        setHeight("");
        setWeight("");
        setColor("");
        setBio("");
        setDietaryRestrictions("");
        setBreed("");
    }

    return (
        <div className="container ">
            <Form onSubmit={handleSubmit} className=" mx-auto mt-4 px-3 py-3 w-50 bg-light text-dark">
                <Row>
                    <Col>
                        <Form.Group controlId="Type">
                            <Form.Label className="mt-1">Type</Form.Label>
                            <Form.Control as="select" defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>Dog</option>
                                <option>Cat</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="Name">
                            <Form.Label className="mt-2">Name</Form.Label>
                            <Form.Control type="text"
                                value={name}
                                required
                                onChange={(event) => setName(event.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group controlId="AdoptionStatus">
                            <Form.Label className="mt-2">Adoption status</Form.Label>
                            <Form.Control type="text"
                                value={adoptionStatus}
                                required
                                onChange={(event) => setAdoptionStatus(event.target.value)} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="DietaryRestrictions">
                            <Form.Label className="mt-2">Dietary restrictions</Form.Label>
                            <Form.Control type="text"
                                value={dietaryRestrictions}
                                onChange={(event) => setDietaryRestrictions(event.target.value)} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="DietaryRestrictions">
                            <Form.Label className="mt-2">Breed</Form.Label>
                            <Form.Control type="text"
                                value={breed}
                                onChange={(event) => setBreed(event.target.value)} />
                        </Form.Group>

                    </Col>
                </Row>

                <Row>
                    <Col sm={4}>
                        <Form.Group  >
                            <Form.Label className="mt-3 ">Upload picture</Form.Label>
                            <Form.File id="imgFile" required />
                        </Form.Group>
                    </Col>
                    <Col sm={4} >

                        <Image src={logoblack} width="60%" className="logo-form" />
                    </Col>
                    <Col sm={4}>
                        <Form.Group >
                            <Form.Label className="mt-2" as="legend" column sm={2} >
                                Hypoallergenic</Form.Label>
                            <Col sm={10}>
                                <Form.Check
                                    className="mx-4"
                                    type="radio"
                                    label="Yes"
                                    name="Yes"
                                    id="yesButton"
                                />
                                <Form.Check
                                    className="mx-4"
                                    type="radio"
                                    label="No"
                                    name="No"
                                    id="noButton"
                                />
                            </Col>
                        </Form.Group>
                    </Col>

                </Row>
                <Row>
                    <Col>
                        <Form.Group controlId="Height">
                            <Form.Label className="mt-2">Height</Form.Label>
                            <Form.Control type="text"
                                value={height}
                                onChange={(event) => setHeight(event.target.value)}

                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="Weight">
                            <Form.Label className="mt-2">Weight</Form.Label>
                            <Form.Control type="text"
                                value={weight}
                                onChange={(event) => setWeight(event.target.value)}

                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="Color">
                            <Form.Label className="mt-2">Color</Form.Label>
                            <Form.Control type="text"
                                value={color}
                                onChange={(event) => setColor(event.target.value)}

                            />
                        </Form.Group>
                    </Col>

                </Row>



                <Form.Group controlId="Bio">
                    <Form.Label className="mt-2">Bio</Form.Label>
                    <Form.Control as="textarea"
                        rows={3}
                        value={bio}
                        onChange={(event) => setBio(event.target.value)} />
                </Form.Group>
                <Button className="mt-3" variant="primary" type="submit"> Save </Button>
            </Form>


        </div>
    )
}
