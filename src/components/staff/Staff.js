import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Icon } from '@iconify/react';
import './Staff.scss'

import StaffImg1 from '../../images/xstaff-1.jpg.pagespeed.ic.DDJlhGaqPr.webp'
import StaffImg2 from '../../images/xstaff-2.jpg.pagespeed.ic.vCkmred_Cl.webp'
import StaffImg3 from '../../images/xstaff-3.jpg.pagespeed.ic.oaAscphLC9.webp'
import StaffImg4 from '../../images/xstaff-4.jpg.pagespeed.ic.cQr8SaSCSP.webp'

function Staff() {

    const [StaffItrms] = useState([{
        name: 'Lloyd Wilson',
        designation: 'CEO, FOUNDER',
        imgUrl: StaffImg1,
        socialLink: [
            { link: 'twitter', icon:'akar-icons:twitter-fill' ,style:'fs-6'},
            { link: 'fb', icon:'bx:bxl-facebook',style:'fs-5'},
            { link: 'gplus', icon:'ant-design:google-plus-outlined' ,style:'fs-5'},
            { link: 'insta', icon:'akar-icons:instagram-fill' ,style:'fs-6'}
        ]
    },
    {
        name: 'Rachel Parker',
        designation: 'WEB DESIGNER',
        imgUrl: StaffImg2,
        socialLink: [
            { link: 'twitter', icon:'akar-icons:twitter-fill' ,style:'fs-6'},
            { link: 'fb', icon:'bx:bxl-facebook' ,style:'fs-5'},
            { link: 'gplus', icon:'ant-design:google-plus-outlined' ,style:'fs-5'},
            { link: 'insta', icon:'akar-icons:instagram-fill' ,style:'fs-6'}
        ]
    },
    {
        name: 'Ian Smith',
        designation: 'WEB DEVELOPER',
        imgUrl: StaffImg3,
        socialLink: [
            { link: 'twitter', icon:'akar-icons:twitter-fill',style:'fs-6'},
            { link: 'fb', icon:'bx:bxl-facebook',style:'fs-5'},
            { link: 'gplus', icon:'ant-design:google-plus-outlined' ,style:'fs-5'},
            { link: 'insta', icon:'akar-icons:instagram-fill' ,style:'fs-6'}
        ]
    },
    {
        name: 'Alicia Henderson',
        designation: 'GRAPHIC DESIGNER',
        imgUrl: StaffImg4,
        socialLink: [
            { link: 'twitter', icon:'akar-icons:twitter-fill',style:'fs-6'},
            { link: 'fb', icon:'bx:bxl-facebook',style:'fs-5'},
            { link: 'gplus', icon:'ant-design:google-plus-outlined' ,style:'fs-5'},
            { link: 'insta', icon:'akar-icons:instagram-fill',style:'fs-6' }
        ]
    },
    ])

    return (
        <div className='pt-2'>
            <Container className='pt-4'>
                <Row className='d-flex justify-content-center'>
                    <div className='d-flex flex-column align-items-center justify-content-center w-75 p-0 pb-lg-3'>
                        <h5 className='text-green fw-normal fs-6 pb-2'>ABOUT US</h5>
                        <h1 className='fw-normal pb-1'>OUR STAFF</h1>
                        <p className='text-center fw-lighter lh-lg py-2'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                    </div>
                </Row>
                <Row className='g-5'>
                    {
                        StaffItrms.map(item => (
                            <Col lg={3} md={6} sm={12}>
                                <div className='staff-item d-flex flex-column justify-content-center align-items-center'>
                                    <img
                                        src={item.imgUrl}
                                        // src="./xstaff-1.jpg.pagespeed.ic.DDJlhGaqPr"
                                        className='rounded-circle' alt='img' />
                                    <span className='py-2 fs-4 fw-normal'>{item.name}</span>
                                    <p className='text-green fw-normal py-1'>{item.designation}</p>
                                    <div className='social-icons d-flex align-items-center justify-content-around w-50 px-sm-5 px-md-0'>

                                        {
                                            item.socialLink.map(itm=>
                                                (
                                                    <a href={`#${itm.link}`} className='text-decoration-none text-black'>
                                                        <Icon icon={itm.icon} className={itm.style} />
                                                    </a>
                                                ))
                                        }
                                    </div>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Staff
