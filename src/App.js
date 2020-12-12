import React, { useState } from 'react'
import './App.css';
import { Nav, Navbar, Container } from "react-bootstrap";
// import ModalLogIn from '../modals/ModalLogIn';
// import ModalSignUp from '../modals/ModalSignUp';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ModalLogIn from './modals/ModalLogIn';
import ModalSignUp from './modals/ModalSignUp';
import ProfileSetting from './pages/ProfileSetting';
import MyPets from './pages/MyPets';
import SearchPet from './pages/SearchPet';
import Admin from './pages/Admin';

// Modal.setAppElement('#root');
function App() {

  // const [modalLogIn, setModalLogIn] = useState(false)
  // const [modalSignUp, setModalSignUp] = useState(false)

  // const openModalLogIn = () => {
  //   setModalLogIn(true)
  // }

  // const openModalSignUp = () => {
  //   setModalSignUp(true)
  // }


  return (
    <Router>
      <div className=" container-fluid w-100 ">
        <div className="row p-5">
          <Navbar bg="dark" variant="dark" className="navbar-expand-lg navbar navbar-dark bg-primary p-2 shadow-lg" fixed="top">
            <Nav className="collapse navbar-collapse d-flex justify-content-between">
              <Link className="link" to="/">Home</Link>
              <Link className="link" to="/ProfileSetting">Profile Setting</Link>
              <Link className="link" to="/MyPets">My Pets</Link>
              <Link className="link" to="/SearchPet">Search Pet</Link>
              <Link className="link" to="/Admin">Admin</Link>
              <form className="form-inline my-2 my-lg-0 float-end">
                <ModalLogIn />
                <ModalSignUp />
              </form>
            </Nav>
          </Navbar>
        </div>

        <Switch>
          <Route exact path="/">
            <Home ></Home>
          </Route>
          <Route path="/ProfileSetting">
            <ProfileSetting></ProfileSetting>
          </Route>
          <Route path="/MyPets">
            <MyPets ></MyPets>
          </Route>
          <Route path="/SearchPet">
            <SearchPet ></SearchPet>
          </Route>
          <Route path="/Admin">
            <Admin ></Admin>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
