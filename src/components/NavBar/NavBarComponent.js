import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap';
import './NavBar.scss'
export default function NavBarComponent() {
    return (
        <>
            <Navbar expand="lg" bg="white" variant="light" className='NAVBAR-LIGHT' fixed='top' collapseOnSelect='false'>
                <Container>
                    <Navbar.Brand className='BRAND' href="#">DIGI<span className='text-green'>LAB</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll"/>
                    <Navbar.Collapse id="navbarScroll" >
                        <Nav 
                            className="me-auto my-2 my-lg-0 NAVBAR-NAV"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link className='NAV-LINK' href="#home"><span>Home</span></Nav.Link>
                            <Nav.Link className='NAV-LINK' href="#services"><span>services</span></Nav.Link>
                            <Nav.Link className='NAV-LINK' href="#projects"><span>projects</span></Nav.Link>
                            <Nav.Link className='NAV-LINK' href="#about"><span>about</span></Nav.Link>
                            <Nav.Link className='NAV-LINK' href="#action2"><span>testimony</span></Nav.Link>
                            <Nav.Link className='NAV-LINK' href="#blog"><span>blog</span></Nav.Link>
                            <Nav.Link className='NAV-LINK' href="#contact"><span>contact</span></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
