import React, { useState } from 'react'
import { InputGroup, Button, FormControl, Form, Card, Collapse , Row } from "react-bootstrap";
import dogandcat from "../img/dogandcat.jpg"
import axios from 'axios'
import Pet from "./Pet"

export default function SearchPet() {
    const [searchType, setSearchType] = useState("");
    const [open, setOpen] = useState(false);
    const [searchAdoptionStatus, setSearchAdoptionStatus] = useState("");
    const [searchHeight, setSearchHeight] = useState("");
    const [searchWeight, setSearchWeight] = useState("");
    const [searchName, setSearchName] = useState("");
    const [petList , setPetList] = useState([])
const [showResults , setShowResults]= useState(false)



    const handleSubmit = async (event) => {
        event.preventDefault()
        const newSearch = {
            searchType: searchType,
            searchAdoptionStatus: searchAdoptionStatus,
            searchHeight: searchHeight,
            searchWeight: searchWeight,
            searchName: searchName,
        };
        const res = await axios.get(`http://localhost:5000/api/pet/search?type=${searchType}&&height=${searchHeight}&&weight=${searchWeight}&&name=${searchName}&&adoptionStatus=${searchAdoptionStatus}`)
        setPetList(res.data);
        setShowResults(true)
        console.log(petList);
        }

      
    //     setSearchType("");
    //     setSearchAdoptionStatus("");
    //     setSearchHeight("");
    //     setSearchWeight("");
    //     setSearchName("");

    // }

    return (
        <>
            <div className="container search">

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
                                    <Button onClick={handleSubmit} variant="dark" className="mt-2 ">Search</Button>
                                </div>
                            </Collapse>

                        </Form>
                    </Card.ImgOverlay>
                </Card>
                {!showResults ?
                    <div className="container">
                        <Row>
                            {petList.map((pet) => (
                                <Pet key={pet.id} pet={pet} />
                            )
                            )}
                        </Row>
                    </div>  
            :<span></span>
            }
            </div>
        </>);
}
