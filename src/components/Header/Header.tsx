import React from 'react';
import {Button, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import logo from "../../logo.svg";

type Props = {}

const Header = ({}: Props) => {
    return (
        <Navbar bg="dark" variant="dark" className="header">
            <Navbar.Brand href="#home" className="header__logo">
                <img alt="" src={logo} width="30" height="30" className="d-inline-block align-top"/> uide
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Places</Nav.Link>
                <Nav.Link href="#features">History</Nav.Link>
                <Nav.Link href="#pricing">Find</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2 bg-dark text-light"/>
                <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
    );
}

export default Header;
