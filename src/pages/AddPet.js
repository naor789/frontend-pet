import logoblack from "../img/logoblack.png"
import axios from 'axios'
import React, { useState } from 'react';
import { Form, Button, Card, Col, Row, Image } from 'react-bootstrap';



export default function AddPet() {
    const [formData, setFormData] = useState({
        type: 'Dog',
        name: '',
        adoptionStatus: 'Available',
        height: 0,
        weight: 0,
        color: '',
        bio: '',
        dietaryRestrictions: '',
        breed: '',
        hypoallergenic: false,
    });
    const [picture, setPicture] = useState('');
    const [previewPetImage, setPreviewPetImage] = useState('');
    const [petImage, setPetImage] = useState();
    const [disabled, setDisabled] = useState(false);
    const [loading, setLoading] = useState(false);
    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        previewFile(file);
        setPetImage(file);
    };
    const previewFile = async (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewPetImage(reader.result);
        };
    };
    const onSubmitForm = async (e) => {
        e.preventDefault();
        setLoading(true);
        setDisabled(true);
        const reader = new FileReader();
        reader.readAsDataURL(petImage);
        console.log();
        setTimeout(async () => {
            let newPet = {
                type,
                name,
                adoptionStatus,
                height,
                weight,
                color,
                bio,
                dietaryRestrictions,
                breed,
                hypoallergenic,
                image: reader.result,
            };
            try {
                const config = {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                };
                const body = JSON.stringify(newPet);
                await axios.post('http://backend-pet.herokuapp.com/api/pet', body, config);

                setFormData({
                    type: 'Dog',
                    name: '',
                    adoptionStatus: 'Available',
                    height: 0,
                    weight: 0,
                    color: '',
                    bio: '',
                    dietaryRestrictions: '',
                    breed: '',
                    hypoallergenic: false,
                });
                setPicture('');
                setPreviewPetImage('');
            } catch (err) {
                console.error(err.response);
            }
            setLoading(false);
            setDisabled(false);
        }, 2000);
    };
    const {
        type,
        name,
        adoptionStatus,
        height,
        weight,
        color,
        bio,
        dietaryRestrictions,
        breed,
        hypoallergenic,
    } = formData;


    return (
        <div className="container ">
            <Form onSubmit={onSubmitForm} className=" mx-auto mt-2 px-3 py-3 w-50 bg-light text-dark">
                <Row>
                    <Col>
                        <Form.Group controlId="Type">
                            <Form.Label className="mt-1">Type</Form.Label>
                            <Form.Control as="select" defaultValue="Dog"
                                value={type}
                                name='type'
                                onChange={(e) => onChange(e)} >
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
                                name='name'
                                onChange={(e) => onChange(e)} />
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
                                onChange={(e) => onChange(e)}
                                name='adoptionStatus' />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="dietaryRestrictions">
                            <Form.Label className="mt-2">Dietary restrictions</Form.Label>
                            <Form.Control type="text"
                                value={dietaryRestrictions}
                                name='dietaryRestrictions'
                                onChange={(e) => onChange(e)}
                            // onChange={(event) => setDietaryRestrictions(event.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="breed">
                            <Form.Label className="mt-2">Breed</Form.Label>
                            <Form.Control type="text"
                                value={breed}
                                onChange={(e) => onChange(e)}
                                name='breed' />
                        </Form.Group>

                    </Col>
                </Row>

                <Row>
                    <Col sm={4}>
                        <Form.Group>
                            <Form.File id="picture" value={picture} onChange={handleFileUpload} />
                        </Form.Group>
                        <Col>
                            {previewPetImage && <img
                                src={previewPetImage}
                                alt='pet'
                                style={{ height: '150px' }}
                            />}
                        </Col>
                    </Col>
                    <Col sm={4} >
                        <Image src={logoblack} width="60%" className="logo-form" />
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Hypoallergenic :</Form.Label>
                            <Form.Control
                                as='select'
                                name='hypoallergenic'
                                value={hypoallergenic}
                                onChange={(e) => onChange(e)}   >
                                <option value={true}>Yes</option>
                                <option value={false}>No</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>

                </Row>
                <Row>
                    <Col>
                        <Form.Group controlId="height">
                            <Form.Label className="mt-2">Height</Form.Label>
                            <Form.Control type="text"
                                value={height}
                                name='height'
                                onChange={(e) => onChange(e)} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="weight">
                            <Form.Label className="mt-2">Weight</Form.Label>
                            <Form.Control type="text"
                                value={weight}
                                name='weight'
                                onChange={(e) => onChange(e)} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="color">
                            <Form.Label className="mt-2">Color</Form.Label>
                            <Form.Control type="text"
                                value={color}
                                name='color'
                                onChange={(e) => onChange(e)} />
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group controlId="bio">
                    <Form.Label className="mt-2">Bio</Form.Label>
                    <Form.Control as="textarea"
                        rows={3}
                        value={bio}
                        name='bio'
                        onChange={(e) => onChange(e)} />
                </Form.Group>
                <Button className="mt-3 button" type="submit"> Save </Button>
            </Form>


        </div>
    )

};
// export default AddPet;