import React, { useState } from 'react'
import { Tab, Tabs } from "react-bootstrap";
import AddPet from './AddPet';



export default function Admin() {
    // type
    // img
    //  Hypoallergenic



    return (

        <div className="container">
            <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                <Tab eventKey="home" className="tabs" title="Home">
                    <AddPet />
                </Tab>
                <Tab eventKey="profile" className="tabs" title="Profile">



                </Tab>

            </Tabs>
        </div>
    )
}
