import React, { useState } from 'react'
import { Tab, Nav, Col, Row, Container } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import './Services.scss';
function Services() {
    const [ServicesItem] = useState([
        {
            label: 'Business Strategy',
            icon: 'ic:baseline-business-center',
            description: {
                des1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Nesciunt voluptate, quibusdam sunt iste dolores consequatur',
                des2: 'Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis!Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.'
            },
            key: 'first'
        },
        {
            label: 'Research',
            icon: 'healthicons:virus-lab-research-test-tube',
            description: {
                des1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Nesciunt voluptate, quibusdam sunt iste dolores consequatur',
                des2: 'Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis!Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.'
            },
            key: 'second'
        },
        {
            label: 'Data Analysis',
            icon: 'et:search',
            description: {
                des1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Nesciunt voluptate, quibusdam sunt iste dolores consequatur',
                des2: 'Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis!Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.'
            },
            key: 'third'
        },
        {
            label: 'UI Design',
            icon: 'bi:ui-checks',
            description: {
                des1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Nesciunt voluptate, quibusdam sunt iste dolores consequatur',
                des2: 'Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis!Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.'
            },
            key: 'fourth'
        },
        {
            label: 'Ux Design',
            icon: 'fluent:quiz-new-28-regular',
            description: {
                des1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Nesciunt voluptate, quibusdam sunt iste dolores consequatur',
                des2: 'Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis!Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.'
            },
            key: 'fifth'
        },
        {
            label: 'Technology',
            icon: 'ic:twotone-biotech',
            description: {
                des1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Nesciunt voluptate, quibusdam sunt iste dolores consequatur',
                des2: 'Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis!Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.'
            },
            key: 'sixth'
        },
        {
            label: 'Creative',
            icon: 'cib:adobe-creative-cloud',
            description: {
                des1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Nesciunt voluptate, quibusdam sunt iste dolores consequatur',
                des2: 'Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis!Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.'
            },
            key: 'seventh'
        }

    ])
    return (
        <div id='services' className='bg-lighter'>
            <Container>

                <Tab.Container defaultActiveKey="first" >
                    <Row>
                        <Col md={4}>
                            <Nav variant="pills" className="flex-column py-5 bg-green">
                                {
                                    ServicesItem.map(item => (
                                        <Nav.Item className='px-5 py-2'>
                                            <Nav.Link eventKey={item.key} className='text-light fs-5'>
                                                <Icon icon={item.icon} />
                                                {item.label}
                                            </Nav.Link>
                                        </Nav.Item>
                                    ))
                                }

                            </Nav>
                        </Col>
                        <Col md={8} className='p-sm-5 p-lg-1'>
                            <Tab.Content className='tabcontent ps-lg-2'>
                                {
                                    ServicesItem.map(item => (
                                        <Tab.Pane eventKey={item.key} className='p-3'>
                                            <span className='icons text-green'>
                                                <Icon icon={item.icon} />
                                            </span>
                                            <h2 className='py-4 fw-light'>{item.label}</h2>
                                            <p className='fw-lighter lh-lg'>{item.description.des1}</p>
                                            <p className='fw-lighter lh-lg'>{item.description.des2}</p>
                                            <a href='#home'>
                                                <button className='btn btn-green text-white rounded-pill px-4 py-3'>learn more</button>
                                            </a>
                                        </Tab.Pane>
                                    ))

                                }
                               
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        </div>
    )
}

export default Services
