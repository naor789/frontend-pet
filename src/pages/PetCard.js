import React, { useState, useEffect } from 'react'
import { Card, Button } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import axios from 'axios'


export default function PetCard(props) {
    let { id } = useParams();
    const petID = id;
    const [pet, setPet] = useState({});


    useEffect(() => {
        const getPetById = async () => {
            const res = await axios.get(`http://localhost:5000/api/pet/${petID}`)
            setPet(res.data);
        }
        getPetById()
    }, [])

    return (

        <div className="container w-50 ">
            <Card >
                <Card.Header></Card.Header>
                <Card.Body>
                    <Card.Title> name: {pet.name}</Card.Title>
                    <Card.Img variant="top" id="petsPhoto" src={pet.picture} alt={pet.name} className="w-100 " />
                    <Card.Text> Adoption Status:{pet.adoptionStatus} </Card.Text>
                    <Card.Text> Height: {pet.height} </Card.Text>
                    <Card.Text>weight: {pet.weight}</Card.Text>
                    <Card.Text>color: {pet.color}</Card.Text>
                    <Card.Text>bio: {pet.bio}</Card.Text>
                    <Card.Text>dietaryRestrictions: {pet.dietaryRestrictions}</Card.Text>
                    <Card.Text>breed:{pet.breed}</Card.Text>
                    <Link to="/mypets" >
                        <Button className="button"  > Back </Button>
                    </Link>
                    <Button className="m-3 button"> Return </Button>
                    <Button className="m-3 button" > Adopt </Button>
                    <Button className="m-3 button" > Foster </Button>
                    <Button className="m-3 button" > Save </Button>
                </Card.Body>
            </Card>


        </div>
    )
}
