import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const _ = () => {

    const navStyles = {
        color: '#fff',
        paddingLeft: '50px',
        textTransform: 'uppercase'
    };

    ///NavBar Styled with Bootstrap and Linked with React-Router..
    return (
        <Navbar bg="dark" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="d-flex m-auto">
                    <NavLink to='/' style={navStyles} activeStyle={{fontWeight: 'bold'}}>Home</NavLink>
                    <NavLink to='/layouts' style={navStyles} activeStyle={{fontWeight: 'bold'}}>Layouts</NavLink>
                    <NavLink to='/themings' style={navStyles} activeStyle={{fontWeight: 'bold'}}>Themings</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default _;