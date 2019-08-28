import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
// import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap"
// import { BrowserRouter, Link, Router, Route } from "react-router-dom"
// import Signup from "./Signup.js"; 
// import Login from "./Login.js"; 
// import App from '../App.js';

export const NavBar = () => {
return (
  
<div className="navbar">
<h1>Diabetes Manager</h1>
 {/* <>
 <Router> 
 <Navbar bg="light" variant="light">
     <Navbar.Brand href="#home">Navbar</Navbar.Brand>
     <Nav className="mr-auto">
     <Nav.Link> 
       <Link to="/">Home</Link>
     </Nav.Link>
     <Nav.Link> 
       <Link to="/Signup">Sign Up</Link>
     </Nav.Link> 
     <Nav.Link> 
       <Link href="#Login">Login</Link>
     </Nav.Link>
     </Nav>
     <Form inline>
       <FormControl type="text" placeholder="Search" className="mr-sm-2" />
       <Button variant="outline-primary">Search</Button>
    </Form>
  </Navbar> 

  <div> 

  <Route path="/" component={App} />
  <Route path="/Signup" component={Signup} />
  <Route path="/Login" component={Login} />   

  </div> 
  </Router>

</> */}
</div>
    )
}
