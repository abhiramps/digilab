import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './carousel.scss'
import { Carousel } from 'react-responsive-carousel';
import { Col, Row } from 'react-bootstrap';


import CarousalImg1 from '../../images/xbg_1.jpg.pagespeed.ic.v29wE0lnZv.webp';
import CarousalImg2 from '../../images/xbg_2.jpg.pagespeed.ic.MAIRIZ0TuN.webp';


function CarouselComponent() {

    return (
        <div id='home'>
            <Carousel
                className='vh-100 hero'
                autoPlay infiniteLoop interval='3000'
                emulateTouch={true}
                preventMovementUntilSwipeScrollTolerance={true}
                swipeable={true}
                verticalSwipe={true}
                // axis={vertical}
                // width='700px' 
                // showStatus={false}
                // showArrows={false}
                // selectedItem={0}
                showThumbs={false}
                // showIndicators={false}
            >
                <div className='slide-1'>
                    <Row className='gx-5'>                    
                        <Col lg={6} className='section-1'>
                            <div className='overlay'></div>
                            <div className='text text-lg-start text-md-center px-4'>
                                <span className='text-green text-uppercase ws-3 ls-3'>welcome to the digilab</span>
                                <h1 className='heading-1 fs-1 fw-light my-3'>Small Details Make A Big <span className='fw-bold'>Impression</span></h1>
                                <p className='fs-5 mb-5'>
                                    A small river named Duden flows by their place and supplies it with the necessary regelialia.
                                    It is a paradisematic country.
                                </p>
                                <button className='btn btn-green text-white rounded-pill px-5 py-3'>Get in touch</button>
                            </div>
                        </Col>
                        <Col lg={6} className='section-2'>
                            <img  className='vh-100 object-fit-cover'
                             src={CarousalImg1}
                             alt='img'
                              />
                        </Col>
                    </Row>
                </div>

                <div className='slide-2'>
                    <Row className='gx-5'>
                        <Col lg={6}  className='section-2' >
                            <div className='overlay'></div>
                            <div className='text text-lg-start text-md-center px-4'>
                                <span className='text-green text-uppercase ws-3 ls-3'>welcome to the digilab</span>
                                <h1 className='heading-1 fs-1 fw-light my-3'><span className='fw-bold'>Strategic </span> Design and <span className='fw-bold'>Technology Agency</span></h1>
                                <p className='fs-5 mb-5'>
                                    A small river named Duden flows by their place and supplies it with the necessary regelialia.
                                    It is a paradisematic country.
                                </p>
                                <p>
                                    <button className='btn btn-green text-white rounded-pill px-5 py-3'>Get in touch</button>
                                </p>
                            </div>
                        </Col>
                        <Col lg={6}  className='section-2'> 
                            <img className='vh-100 object-fit-cover' 
                                src={CarousalImg2} alt='img'/>
                        </Col>
                    </Row>
                </div>
            </Carousel>
        </div>
    )
}

export default CarouselComponent
