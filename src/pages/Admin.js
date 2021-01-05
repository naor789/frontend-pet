import React, { useState } from 'react'
import { Tab, Tabs } from "react-bootstrap";
import AddPet from './AddPet';
import MyPets from './MyPets';



export default function Admin() {
    // type
    // img
    //  Hypoallergenic



    return (

        <div className="container">
            <Tabs defaultActiveKey="addPet" id="uncontrolled-tab-example">
                <Tab eventKey="addPet" className="tabs" title="Add pet">
                    <AddPet />
                </Tab>
                <Tab eventKey="userList" className="tabs" title="User list">
<MyPets/>
                </Tab>

            </Tabs>
        </div>
    )
}
