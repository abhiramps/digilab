import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap';
import './NavBar.scss'
export default function NavBarComponent() {
    return (
        <>
            <Navbar expand="lg" bg="white" variant="light" className='NAVBAR-LIGHT' fixed='top' collapseOnSelect='false'>
                <Container className=''>
                    <Navbar.Brand className='BRAND fs-3 fw-bold' href="#">DIGI<span className='text-green'>LAB</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll"/>
                    <Navbar.Collapse id="navbarScroll" 

                    >
                        <Nav className='me-auto'></Nav>
                        <Nav 
                            className="my-2 my-lg-0 NAVBAR-NAV "
                            style={{ maxHeight: '400px'  }}
                            navbarScroll
                        >
                            {/* <Nav.Link className='NAV-LINK py-3 px-3 px-xl-4 text-start ms-5 ms-sm-0' href="#home"><span className='ms-5 ms-sm-0'>Home</span></Nav.Link> */}
                            <Nav.Link className='NAV-LINK py-3 px-3 px-xl-4 ' href="#home"><span className='ms-5 ms-sm-0'>Home</span></Nav.Link>
                            <Nav.Link className='NAV-LINK py-3 px-3 px-xl-4 ' href="#services"><span className='ms-5 ms-sm-0'>services</span></Nav.Link>
                            <Nav.Link className='NAV-LINK py-3 px-3 px-xl-4 ' href="#projects"><span className='ms-5 ms-sm-0'>projects</span></Nav.Link>
                            <Nav.Link className='NAV-LINK py-3 px-3 px-xl-4 ' href="#about"><span className='ms-5 ms-sm-0'>about</span></Nav.Link>
                            <Nav.Link className='NAV-LINK py-3 px-3 px-xl-4 ' href="#action2"><span className='ms-5 ms-sm-0'>testimony</span></Nav.Link>
                            <Nav.Link className='NAV-LINK py-3 px-3 px-xl-4 ' href="#blog"><span className='ms-5 ms-sm-0'>blog</span></Nav.Link>
                            <Nav.Link className='NAV-LINK py-3 px-3 px-xl-4 ' href="#contact"><span className='ms-5 ms-sm-0'>contact</span></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
