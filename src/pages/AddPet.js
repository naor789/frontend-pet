import React, { useState } from 'react'
import { Col, Button, Form, Row, Image } from "react-bootstrap";
import logoblack from "../img/logoblack.png"


export default function AddPet() {
    const [type, setType] = useState("Dog");
    const [name, setName] = useState("");
    const [adoptionStatus, setAdoptionStatus] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [color, setColor] = useState("");
    const [bio, setBio] = useState("");
    const [dietaryRestrictions, setDietaryRestrictions] = useState("");
    const [breed, setBreed] = useState("");
    const [picture, setPicture] = useState(null)
    const [hypoallergenic, setHypoallergenic]= useState(false)

    const handleFileUpload = (e) => {
        const file = e.target.files[0]
        setPicture(file)
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        let formData = new FormData();
        formData.append("type", type);
        formData.append("name", name);
        formData.append("adoptionStatus", adoptionStatus);
        formData.append("height", height);
        formData.append("weight", weight);
        formData.append("color", color);
        formData.append("bio", bio);
        formData.append("dietaryRestrictions", dietaryRestrictions);
        formData.append("breed", breed);
        formData.append("hypoallergenic", hypoallergenic)
        // formData.append("picture", picture);
        const requestOptions = {
            method: 'POST',
            body: formData
        }

        fetch("http://localhost:5000/api/pet", requestOptions)
            .then(res => {
                console.log(formData);
                console.log(res.status);
            })

        // history.push('/')
        // const reload = window.location.reload()
    }




    return (
        <div className="container ">
            <Form onSubmit={handleSubmit} className=" mx-auto mt-2 px-3 py-3 w-50 bg-light text-dark">
                <Row>
                    <Col>
                        <Form.Group controlId="Type">
                            <Form.Label className="mt-1">Type</Form.Label>
                            <Form.Control as="select" defaultValue="Dog"
                                value={type}
                                onChange={(event) => setType(event.target.value)}    >
                                <option>Dog</option>
                                <option>Cat</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="name">
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
                        <Form.Group controlId="adoptionStatus">
                            <Form.Label className="mt-2">Adoption status</Form.Label>
                            <Form.Control type="text"
                                value={adoptionStatus}
                                required
                                onChange={(event) => setAdoptionStatus(event.target.value)} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="dietaryRestrictions">
                            <Form.Label className="mt-2">Dietary restrictions</Form.Label>
                            <Form.Control type="text"
                                value={dietaryRestrictions}
                                onChange={(event) => setDietaryRestrictions(event.target.value)} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="breed">
                            <Form.Label className="mt-2">Breed</Form.Label>
                            <Form.Control type="text"
                                value={breed}
                                onChange={(event) => setBreed(event.target.value)} />
                        </Form.Group>

                    </Col>
                </Row>

                <Row>
                    {/* <Col sm={4}>
                        <Form.Group  >
                            <Form.Label className="mt-3 ">Upload picture</Form.Label>
                            <Form.File type='file' name='picture' onChange={handleFileUpload} required />
                        </Form.Group>
                    </Col> */}
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
                                    value={true} 
                                    id="yesButton"
                                    checked={hypoallergenic === true}
                                    onChange={(event) => setHypoallergenic(event.target.value)}/>
                                <Form.Check
                                    className="mx-4"
                                    type="radio"
                                    label="No"
                                    name="No"
                                    value={false} 
                                    id="noButton"
                                    checked={hypoallergenic === false}
                                    onChange={(event) => setHypoallergenic(event.target.value)}/>
                            </Col>
                        </Form.Group>
                    </Col>

                </Row>
                <Row>
                    <Col>
                        <Form.Group controlId="height">
                            <Form.Label className="mt-2">Height</Form.Label>
                            <Form.Control type="text"
                                value={height}
                                onChange={(event) => setHeight(event.target.value)}

                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="weight">
                            <Form.Label className="mt-2">Weight</Form.Label>
                            <Form.Control type="text"
                                value={weight}
                                onChange={(event) => setWeight(event.target.value)}

                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="color">
                            <Form.Label className="mt-2">Color</Form.Label>
                            <Form.Control type="text"
                                value={color}
                                onChange={(event) => setColor(event.target.value)}

                            />
                        </Form.Group>
                    </Col>

                </Row>



                <Form.Group controlId="bio">
                    <Form.Label className="mt-2">Bio</Form.Label>
                    <Form.Control as="textarea"
                        rows={3}
                        value={bio}
                        onChange={(event) => setBio(event.target.value)} />
                </Form.Group>
                <Button className="mt-3 button"  type="submit"> Save </Button>
            </Form>


        </div>
    )
}
