import React, { useState, useEffect, useContext } from 'react'
import { Tab, Tabs, Row } from "react-bootstrap";
import AddPet from './AddPet';
import User from './User';
import axios from 'axios';
import { UserContext } from '../context/UserContext';




export default function Admin() {
    const [userList, setUserList] = useState([])
    const { baseURL } = useContext(UserContext);



    useEffect(() => {
        const getUsersList = async () => {
            const res = await axios.get(`${baseURL}/api/user`)
            setUserList(res.data);
        }
        getUsersList()
    }, [])



    return (

        <div className="container mt-5">
            <Tabs defaultActiveKey="addPet" id="uncontrolled-tab-example">
                <Tab eventKey="addPet" className="tabs" title="Add pet">
                    <AddPet />
                </Tab>
                <Tab eventKey="userList" className="tabs" title="User list">
                    <Row>
                        {userList.map((user) => (
                            <User key={user.id} user={user} />
                        )
                        )}
                    </Row>
                </Tab>

            </Tabs>
        </div>
    )
}
