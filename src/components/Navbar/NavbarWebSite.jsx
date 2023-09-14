import React, { useState } from 'react';
//Me traigo el estilo de css y los distintos componentes que ya creo boostrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import "./NavbarWebSite.css"
import { Home } from '@mui/icons-material';

const NavbarWebSite = () => {
    const [active, setActive] = useState(null);
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" >
                <Container>
                    <Navbar.Brand href="/"><Home /></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link
                            as={Link}
                            to="/"
                            className={active == 'home'?'active':'hover'}
                            onClick={()=>setActive('home')}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/list"
                            className={active == 'list'?'active':'hover'}
                            onClick={()=>setActive('list')}
                        >
                            Product List
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/create"
                            className={active == 'create'?'active':'hover'}
                            onClick={()=>setActive('create')}
                        >
                            Create Product
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavbarWebSite