import React, { useState}from 'react'
import { InputGroup, Button, FormControl, Form , Card} from "react-bootstrap";
import dogandcat from "../img/dogandcat.jpg"


export default function SearchPet() {
    const [searchPet, setSearchPet] = useState("");


    const handleSubmit = (event) => {
        event.preventDefault()
        const newSearch = {
            searchPet: searchPet
        };
        console.log(newSearch);
        setSearchPet("");
    }

    return (
        <>
            
            <div className="container w-50 search">

                <Card >
                    <Card.Img src={dogandcat} alt="dog and a cat" className="mx-auto " ></Card.Img>
                    <Card.ImgOverlay>
                        <Form onSubmit={handleSubmit}>
                            <InputGroup className="mb-3">
                                <InputGroup className="mb-3">
                                    <FormControl
                                        placeholder="Search for pet.."
                                        aria-label="Search"
                                        value={searchPet}
                                        onChange={(event) => setSearchPet(event.target.value)} />
                                    <InputGroup.Append>
                                        <Button onClick={handleSubmit} variant="dark">Search</Button>
                                    </InputGroup.Append>
                                </InputGroup>

                            </InputGroup>
                        </Form>
                    </Card.ImgOverlay>
                </Card>

        </div>
                </>);
}
