import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import './Research.scss'
function Research() {

    const [ResearchItems] = useState([
        {
            label: 'market Research',
            des: 'even the all powerfull pointing has no control about the blind'
        },
        {
            label: 'financial service',
            des: 'even the all powerfull pointing has no control about the blind'
        },
        {
            label: 'online marketing',
            des: 'even the all powerfull pointing has no control about the blind'
        },
        {
            label: '24/7 help &  support',
            des: 'even the all powerfull pointing has no control about the blind'
        },
    ])

    return (
        <div className='research-component animation '>
            <Container fluid>
                <Row>
                    <Col md={6}>

                    </Col>
                    <Col md={6} className='px-0'>
                        {
                            ResearchItems.map(item => (
                                <div as={Col} className='research-bg'>
                                    <a href='#home' md={4} className='research text-decoration-none text-black d-flex flex-row align-items-center justify-content-start  w-100 py-lg-4 py-md-3 border-top border-bottom border-1 border-transparent'>
                                        <span className='icon-arrow fs-3 px-3 text-green'>
                                            <Icon icon="akar-icons:arrow-left" />
                                        </span>
                                        <div className='para lh-lg'>
                                            <h4 className='text-capitalize fw-normal text-green'>{item.label}</h4>
                                            <p className='fw-light'>{item.des}</p>
                                        </div>
                                    </a>
                                </div>
                            ))
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Research
