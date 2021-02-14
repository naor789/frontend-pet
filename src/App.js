import React, { useState, useEffect } from 'react'
import './App.css';
import { Nav, Navbar, Image, Button, Col, Row } from "react-bootstrap";
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ModalLogIn from './modals/ModalLogIn';
import ModalSignUp from './modals/ModalSignUp';
import ProfileSetting from './components/ProfileSetting';
import SearchPet from './components/SearchPet';
import Admin from './components/Admin';
import logo from "./img/logo.png";
import Pet from "./components/Pet"
import PetCard from './components/PetCard';
import { UserContext } from './context/UserContext';

export const baseURL = 'http://localhost:5000';

function App() {

  const [currentUser, setCurrentUser] = useState("");

  const value = {
    currentUser,
    setCurrentUser,
    baseURL,
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem('token');
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setCurrentUser(foundUser);
    }
  }, []);

  const logout = () => {
    localStorage.clear();
    window.location.reload()
  }

  return (
    <UserContext.Provider value={value}>
      <Router>
        <div className=" container-fluid w-100  ">
          <div className="row p-3">
            <Navbar bg="dark" variant="dark" className="navbar-expand-lg navbar navbar-dark bg-primary shadow-lg " fixed="top">
              <Nav className="collapse navbar-collapse d-flex justify-content-between p-0">
                <Image src={logo} alt="logo-nav" width="4%"></Image>
                {!currentUser ?
                  <div className="collapse navbar-collapse d-flex justify-content-between mx-5">
                    <Link className=" nav" to="/">Home</Link>
                    <Link className=" nav " to="/searchpet">Search Pet</Link>
                    <form className="form-inline my-2 my-lg-0 float-end">
                      <ModalLogIn />
                      <ModalSignUp />
                    </form>
                  </div>
                  :
                  <div className="collapse navbar-collapse d-flex justify-content-between mx-4">
                    <Link className=" nav" to="/">Home</Link>
                    <Link className=" nav" to="/searchpet">Search Pet</Link>
                    <Link className=" nav" to="/profilesetting">Profile Setting</Link>
                    <Link className=" nav" to="/admin">Dashboard</Link>
                    <form className="form-inline my-2 my-lg-0 float-end">
                      <Button onClick={logout} className="mx-3" type="button" >Log Out </Button>
                    </form>
                  </div>
                }

              </Nav>
            </Navbar>
          </div>
          <Switch>
            <Route exact path="/">
              <Home ></Home>
            </Route>
            <Route path="/profilesetting">
              <ProfileSetting></ProfileSetting>
            </Route>
            <Route path="/petcard/:id">
              <PetCard ></PetCard>
            </Route>
            <Route path="/searchpet">
              <SearchPet ></SearchPet>
            </Route>
            <Route path="/admin">
              <Admin ></Admin>
            </Route>
            <Route path="/pet">
              <Pet></Pet>
            </Route>
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
