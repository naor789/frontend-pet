import React, { useState, useEffect } from 'react'
import { Tab, Tabs, Row } from "react-bootstrap";
import AddPet from './AddPet';
import User from './User';
import axios from 'axios'




export default function Admin() {
    const [userList, setUserList] = useState([])



    useEffect(() => {
        const getUsersList = async () => {
            const res = await axios.get('http://localhost:5000/api/user')
            setUserList(res.data);
            console.log(userList);
        }
        getUsersList()
    }, [])



    return (

        <div className="container">
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
