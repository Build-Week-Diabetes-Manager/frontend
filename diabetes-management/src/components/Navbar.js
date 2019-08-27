import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Form, Button, FormControl } from "react-bootstrap"
import { BrowserRouter, Link } from "react-router-dom"

export const Navbar = () => {
return (
<div className="navbar">
<h1>Diabetes Manager</h1>
<>

<Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
    <Nav.Link> 
      <Link href="#home">Home</Link>
    </Nav.Link>
    <Nav.Link> 
      <Link href="#features">Login</Link>
    </Nav.Link> 
    <Nav.Link> 
      <Link href="#pricing">Sign Up</Link>
    </Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
  </Navbar>

</>
</div>
    )
}
