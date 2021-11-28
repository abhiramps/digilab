import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Icon } from '@iconify/react';
import './Footer.scss'
function Footer() {
    const [Links] = useState(
        ['Home', 'About', 'Service', 'Projects', 'Contact']
    )
    const [Services] = useState([
        'WebDesign', 'Web Development', 'Business Strategy', 'Data Analysis', 'Graphic Design'
    ])
    const [Question] = useState([
        {
            icon: 'carbon:location-filled',
            style: 'fs-4 me-2',
            text: '203 Fake St. Mountain View, San Francisco, California, USA'
        },
        {
            icon: 'fluent:call-20-filled',
            style: 'fs-6 me-2',
            text: '+2 392 3929 210'
        },
        {
            icon: 'ant-design:mail-filled',
            style: 'fs-6 me-2',
            text: 'info@yourdomain.com'
        }
    ])
    const [SocialLinks] = useState([
        {
            icon:'ant-design:twitter-circle-filled',
            link:'twitter'
        },
        {
            icon:'entypo-social:facebook-with-circle',
            link:'fb'
        },
        {
            icon:'ant-design:instagram-filled',
            link:'insta'
        },
    ])
    return (
        <div className='footer bg-black text-white'>
            <Container fluid className=' container-lg'>
                <Row className='py-5'>
                    <Col sm={6} md={3} className='col-6'>
                        <h5 className='pt-5 pb-3 py-sm-5 fw-bold fs-4'>About Digilab</h5>
                        <span className='fw-light lh-lg'>
                            Far far away, behind the word mountains,
                            far from the countries Vokalia and Consonantia,
                            there live the blind texts.
                        </span>
                        <div className='fs-1 w-50 d-flex align-items-center justify-content-between py-5 '>
                            {
                                SocialLinks.map(item=>(
                                    <a href={`#${item.link}`} className='text-decoration-none text-white'>
                                        <Icon icon={item.icon} />
                                    </a>
                                ))
                            }
                        </div>
                    </Col>
                    <Col sm={6} md={3} className='col-6'>
                        <h5 className='pt-5 pb-3 py-sm-5 fw-bold fs-4 text-center'>Links</h5>
                        {
                            Links.map(item => (
                                <a href={`#${item.toLocaleLowerCase()}`} className='d-flex align-items-center justify-content-center  text-decoration-none text-lighter py-2'>
                                    <Icon icon="akar-icons:arrow-right" />
                                    <label>{item}</label>
                                </a>
                            ))
                        }
                    </Col>
                    <Col sm={6} md={3} className='col-6'>
                        <h5 className='pt-5 pb-3 py-sm-5 fw-bold fs-4'>Services</h5>
                        {
                            Services.map(item => (
                                <a href={`#${item.toLocaleLowerCase()}`} className='d-flex align-items-center text-decoration-none text-lighter py-2'>
                                    <Icon icon="akar-icons:arrow-right" />
                                    <label>{item}</label>
                                </a>
                            ))
                        }


                    </Col>
                    <Col sm={6} md={3} className='col-6'>
                        <h5 className='pt-5 pb-1 py-sm-5 fw-bold fs-4'>Have a Questions?</h5>
                        {
                            Question.map(item => (
                                <div className='overflow d-flex align-items-start text-decoration-none text-lighter py-2'>
                                    <Icon icon={item.icon} className={item.style} />
                                    <span>{item.text}</span>
                                </div>
                            ))
                        }

                    </Col>
                </Row>
                <Row className='text-center'>
                    <p >Copyright ©2021 All rights reserved | This template is made with  by Colorlib</p>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
