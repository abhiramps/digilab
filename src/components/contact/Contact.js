import React, { useState } from 'react'
import { Container, Row, Col,Form } from 'react-bootstrap'
import { Icon } from '@iconify/react';
import './Contact.scss'
import MapContainer from '../map/MapContainer';
// import GoogleM from '../map/GoogleM';
// import { MapContainer } from '../map/MapContainer';
function Contact() {
    const [ContactItems] = useState([
        {
            name: 'Address',
            icon: 'entypo:address',
            details: '198 West 21th Street, Suite 721 New York NY 10016'
        },
        {
            name: 'CONTACT NUMBER',
            icon: 'bx:bxs-phone',
            details: '+ 1235 2355 98'
        },
        {
            name: 'EMAIL ADDRESS',
            icon: 'bx:bxl-telegram',
            details: 'info@yoursite.com'
        },
        {
            name: 'WEBSITE',
            icon: 'emojione-monotone:globe-showing-europe-africa',
            details: 'yoursite.com'
        }
    ])

    return (
        <div className='pt-5' id='contact'>
            <Container className='pt-4'>
                <Row className='d-flex justify-content-center'>
                    <div className='d-flex flex-column align-items-center justify-content-center w-50'>
                        <h5 className='text-green fw-normal fs-6 pb-2'>CONTACT</h5>
                        <h1 className='fw-normal pb-2'>CONTACT US</h1>
                        <p className='text-center fw-lighter lh-lg py-4'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                    </div>
                </Row>
                <Row className='p-2 text-white g-4 g-md-5 gy-sm-3 gy-xm-3'>
                    {
                        ContactItems.map(item => (
                            <Col sm={6} md={6} lg={3} className='col-12'>
                                <div className='contact-card bg-green d-flex flex-column align-items-center'>
                                    <div className='address-icons fs-2 pt-5'>
                                        <Icon icon={item.icon} />
                                    </div>
                                    <p className='pt-5 pb-3 text-center fs-5 text-uppercase'>{item.name}</p>
                                    <p className='text-center px-2 fw-lighter'>{item.details}</p>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
                <Row className='pt-5'>
                    <Col sm={12} md={6} lg={6} className='order-2 order-sm-2 order-md-1 order-lg-1'>
                        <MapContainer />
                    </Col>
                    <Col sm={12} md={6} lg={6} className='order-1 order-sm-1 order-md-2 order-lg-2'>
                        <Form className='p-4'>
                            <Form.Group className="mb-3 py-1" controlId="exampleForm.ControlInput1" >
                                <Form.Control type="text" placeholder="Your Name" className='py-3'/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control type="email" placeholder="Your Email" className='py-3'/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control type="text" placeholder="Subject" className='py-3'/>
                            </Form.Group>   

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" placeholder='message' rows={3} className='pb-5' />
                            </Form.Group>
                            <button className='btn btn-green text-white rounded-pill px-5 py-3'>Send Message</button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contact
