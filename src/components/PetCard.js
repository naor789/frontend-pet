import React, { useState, useEffect, useContext } from 'react'
import { Card, Button } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import axios from 'axios'
import { UserContext } from '../context/UserContext';


export default function PetCard(props) {
    let { id } = useParams();
    const petID = id;
    const [pet, setPet] = useState({});
    const { baseURL } = useContext(UserContext);


    useEffect(() => {
        const getPetById = async () => {
            const res = await axios.get(`${baseURL}/api/pet/${petID}`)
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
                    <Link to="/searchpet" >
                        <Button className="button"  > Back </Button>
                    </Link>
                </Card.Body>
            </Card>


        </div>
    )
}
