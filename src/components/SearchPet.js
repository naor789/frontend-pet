import React, { useState, useEffect, useContext } from 'react'
import { InputGroup, Button, FormControl, Form, Card, Collapse, Row } from "react-bootstrap";
import dogandcat from "../img/dogandcat.jpg"
import axios from 'axios'
import Pet from "./Pet"
import { UserContext } from "../context/UserContext";



export default function SearchPet() {
    const [searchType, setSearchType] = useState("");
    const [open, setOpen] = useState(false);
    const [searchAdoptionStatus, setSearchAdoptionStatus] = useState("");
    const [searchHeight, setSearchHeight] = useState("");
    const [searchWeight, setSearchWeight] = useState("");
    const [searchName, setSearchName] = useState("");
    const [petList, setPetList] = useState([])
    const { baseURL } = useContext(UserContext);


    useEffect(() => {
        const getPetsList = async () => {
            const res = await axios.get(`${baseURL}/api/pet`)
            setPetList(res.data);
        }
        getPetsList()
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault()
        const newSearch = {
            searchType: searchType,
            searchAdoptionStatus: searchAdoptionStatus,
            searchHeight: searchHeight,
            searchWeight: searchWeight,
            searchName: searchName,
        };
        const res = await axios.get(`${baseURL}/api/pet/search?type=${searchType}&&height=${searchHeight}&&weight=${searchWeight}&&name=${searchName}&&adoptionStatus=${searchAdoptionStatus}`)
        setPetList(res.data);
        setSearchType("");
        setSearchAdoptionStatus("");
        setSearchHeight("");
        setSearchWeight("");
        setSearchName("");
    }

    return (
        <>
            <div className="container search mb-5 mt-5">
                <Card >
                    <Card.Img src={dogandcat} alt="dog and a cat" className="mx-auto" size="lg" block></Card.Img>
                    <Card.ImgOverlay>
                        <Form onSubmit={handleSubmit}>
                            <InputGroup className="mb-2">
                                <InputGroup className="mb-2">
                                    <FormControl
                                        placeholder="Search for pet.."
                                        aria-label="Search"
                                        value={searchType}
                                        onChange={(event) => setSearchType(event.target.value)} />
                                    <InputGroup.Append>
                                        <Button onClick={handleSubmit} variant="dark">Search</Button>

                                        <Button
                                            className="button"
                                            onClick={() => setOpen(!open)}
                                            aria-controls="savedPets"
                                            aria-expanded={open}
                                        > Advanced search</Button>
                                    </InputGroup.Append>
                                </InputGroup>

                            </InputGroup>
                            <Collapse in={open}>
                                <div className="collapseList" id="savedPets">
                                    <Form.Group >
                                        <Form.Label className="white-text">Adoption status</Form.Label>
                                        <Form.Control
                                            aria-label="Adoption status"
                                            value={searchAdoptionStatus}
                                            onChange={(event) => setSearchAdoptionStatus(event.target.value)}
                                            type="text" />
                                        <Form.Text >
                                        </Form.Text>

                                        <Form.Label className="white-text">Height</Form.Label>
                                        <Form.Control
                                            aria-label="Adoption status"
                                            value={searchHeight}
                                            onChange={(event) => setSearchHeight(event.target.value)}
                                            type="text" />
                                        <Form.Text >
                                        </Form.Text>

                                        <Form.Label className="white-text">Weight</Form.Label>
                                        <Form.Control
                                            value={searchWeight}
                                            onChange={(event) => setSearchWeight(event.target.value)}
                                            type="text" />
                                        <Form.Text>
                                        </Form.Text>

                                        <Form.Label className="white-text">Type</Form.Label>
                                        <Form.Control
                                            value={searchType}
                                            onChange={(event) => setSearchType(event.target.value)}
                                            type="text" />
                                        <Form.Text >
                                        </Form.Text>

                                        <Form.Label className="white-text">Name</Form.Label>
                                        <Form.Control
                                            value={searchName}
                                            onChange={(event) => setSearchName(event.target.value)}
                                            type="text" />
                                        <Form.Text >
                                        </Form.Text>
                                    </Form.Group>
                                    <Button onClick={handleSubmit} variant="dark" className="mt-2">Search</Button>
                                </div>
                            </Collapse>

                        </Form>
                    </Card.ImgOverlay>
                </Card>
                <div className="container mt-5 pt-3">
                    <Row>
                        {petList.map((pet) => (
                            <Pet key={pet.id} pet={pet} />
                        )
                        )}
                    </Row>
                </div>
            </div>
        </>);
}
