import React, { useState } from 'react'
import { Col, Button, Form, Row, Image } from "react-bootstrap";
// import logoblack from "../img/logoblack.png"



export default function Admin() {
    // type
    // img
    //  Hypoallergenic

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
        <div className="container admin">
            {/* <Image src={logoblack} width="10%" className="logo-form" /> */}
            <Form onSubmit={handleSubmit} className=" mx-auto mt-4 px-3 py-3 w-50 bg-light text-dark">
                <Form.Row>
                    <Form.Group as={Col} controlId="Type">
                        <Form.Label className="mt-1">Type</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>Dog</option>
                            <option>Cat</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="Name">
                        <Form.Label className="mt-2">Name</Form.Label>
                        <Form.Control type="text"
                            value={name}
                            required
                            onChange={(event) => setName(event.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="AdoptionStatus">
                        <Form.Label className="mt-2">Adoption status</Form.Label>
                        <Form.Control type="text"
                            value={adoptionStatus}
                            required
                            onChange={(event) => setAdoptionStatus(event.target.value)}

                        />
                    </Form.Group>
                </Form.Row>

                {/* <div class="input-group mb-3">
  <input type="file" class="form-control" id="inputGroupFile02">
  <label class="input-group-text" for="inputGroupFile02">Upload</label>
</div> */}

                <Form.Group as={Col} >
                    <Form.Label className="mt-3 mr-3">Upload picture</Form.Label>
                    <Form.File id="imgFile" required />
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="Height">
                        <Form.Label className="mt-2">Height</Form.Label>
                        <Form.Control type="text"
                            value={height}
                            onChange={(event) => setHeight(event.target.value)}

                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="Weight">
                        <Form.Label className="mt-2">Weight</Form.Label>
                        <Form.Control type="text"
                            value={weight}
                            onChange={(event) => setWeight(event.target.value)}

                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="Color">
                        <Form.Label className="mt-2">Color</Form.Label>
                        <Form.Control type="text"
                            value={color}
                            onChange={(event) => setColor(event.target.value)}

                        />
                    </Form.Group>

                </Form.Row>

                <Form.Group controlId="Bio">
                    <Form.Label className="mt-2">Bio</Form.Label>
                    <Form.Control type="text"
                        value={bio}
                        onChange={(event) => setBio(event.target.value)}
                    />
                </Form.Group>

                <fieldset>
                    <Form.Group >
                        <Form.Label className="mt-2" as="legend" column sm={2} >
                            Hypoallergenic
      </Form.Label>
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
                </fieldset>
                <Form.Group controlId="DietaryRestrictions">
                    <Form.Label className="mt-2">Dietary restrictions</Form.Label>
                    <Form.Control type="text"
                        value={dietaryRestrictions}
                        onChange={(event) => setDietaryRestrictions(event.target.value)}

                    />

                </Form.Group> <Form.Group controlId="DietaryRestrictions">
                    <Form.Label className="mt-2">Breed</Form.Label>
                    <Form.Control type="text"
                        value={breed}
                        onChange={(event) => setBreed(event.target.value)}

                    />
                </Form.Group>

                <Button className="mt-3" variant="primary" type="submit">
                    Save
  </Button>
            </Form>
        </div>
    )
}
