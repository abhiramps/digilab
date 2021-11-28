import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Icon } from '@iconify/react';
import moment from 'moment';
import './Blog.scss'

import Blogimg1 from '../../images/ximage_1.jpg.pagespeed.ic.wkbgK5sCWT.webp'
import Blogimg2 from '../../images/ximage_2.jpg.pagespeed.ic.hPYaVjNW0H.webp'
import Blogimg3 from '../../images/ximage_3.jpg.pagespeed.ic.XJ5IolSvSy.webp'



function Blog() {
    const [BlogItems] = useState([
        {
            date: '03/12/2019',
            imgUrl:Blogimg1,
            title: 'Why Lead Generation is Key for Business Growth',
            describtion: 'A small river na med Duden flows by their place and supplies it with the necessary regelialia.',
            msg: 2
        },
        {
            date: '03/10/2019',
            imgUrl:Blogimg2,
            title: 'Why Lead Generation is Key for Business Growth',
            describtion: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
            msg: 3
        },
        {
            date: '03/05/2019',
            imgUrl:Blogimg3,
            title: 'Why Lead Generation is Key for Business Growth',
            describtion: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
            msg: 5
        }
    ])

    return (
        <div className='pt-5' id='blog'>
            <Container className='pt-4'>
                <Row className='d-flex justify-content-center'>
                    <div className='d-flex flex-column align-items-center justify-content-center w-50'>
                        <h5 className='text-green fw-normal fs-6 pb-2'>BLOG</h5>
                        <h1 className='fw-normal pb-2'>OUR BLOG</h1>
                        <p className='text-center fw-lighter lh-lg py-4'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                    </div>
                </Row>
                <Row className='p-2'>
                    {
                        BlogItems.map(item => (

                            <Col  md={4} lg={4} className='py-sm-5'>
                                <div className='blog-item d-flex flex-column align-items-center'>
                                    <div className='blog-img'>
                                        <div className='overlay'></div>
                                        <img
                                         src={item.imgUrl} 
                                        // src={item}
                                         alt='img'/>
                                    </div>

                                    <div className='blog-date d-flex align-items-center bg-green text-white'>
                                        <label className='ps-3 pe-2'>{moment(item.date).format('DD')}</label>
                                        <div className='d-flex flex-column align-items-center'>
                                            <span>{moment(item.date).format('MMMM')}</span>
                                            <span>{moment(item.date).format('YYYY')}</span>
                                        </div>
                                    </div>
                                    <p className='fs-5 pt-3 w-100'>{item.title}</p>
                                    <p className='fw-lighter'>{item.describtion}</p>
                                    <div className='d-flex align-items-center w-100 justify-content-between py-2'>
                                        <button className='btn btn-green rounded-pill text-white '>
                                            Read more
                                            <Icon icon="akar-icons:arrow-right" />
                                        </button>
                                        <div className='fw-lighter'>
                                            <label className='pe-3'>Admin</label>
                                            <Icon icon="bx:bxs-message-detail" />
                                            <label>{item.msg}</label>
                                        </div>
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

export default Blog
