import React, { useState, useEffect } from 'react';
import { Row } from "react-bootstrap";
import Pet from './Pet'
import axios from 'axios'



export default function MyPets() {
    const [petsList, setPetsList] = useState([])



    useEffect(() => {
        const getPetsList = async () => {
            const res = await axios.get('http://backend-pet.herokuapp.com/api/pet')
            setPetsList(res.data);
            console.log(petsList);
        }
        getPetsList()
    }, [])


    return (
        <div className="container">
            <Row>
                {petsList.map((pet) => (
                    <Pet key={pet.id} pet={pet} />
                )
                )}
            </Row>
        </div>

    )
}
