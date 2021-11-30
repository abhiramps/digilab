import React,{useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './About.scss'

import AboutImg1 from '../../images/xabout.jpg.pagespeed.ic.HSODV3A6VL.webp'


function About() {
    const [seconds, setSeconds] = useState(0);
    React.useEffect(() => {
        if (seconds < 20) {
          setTimeout(() => setSeconds(seconds + 1), 300);
        }
      });
    return (
        <div id='about' className='py-5'> 
            <Container>
                <Row >
                    <Col md={5} className='about-image d-none d-md-block'>
                        <img src={AboutImg1} alt='img'/>
                    </Col>
                    <Col md={7}  className='about-conntents p-lg-5'>
                        <h5 className='text-green fw-light fs-6 font-monospace' >WELCOME TO DIGILAB</h5> 
                        <h2 className='fw-normal'>We Are Digital Agency</h2>
                        <p className='fw-lighter pt-3  lh-lg'>A small river named Duden flows by their place and supplies it with the necessary regelialia.
                            It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                        <p className='fw-lighter py-xl-3 py-lg-1 lh-lg m-0'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however
                            a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                        <p className='fw-lighter pb-lg-5 lh-lg lh-sm'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country,
                            in which roasted parts of sentences fly into your mouth.</p>

                        <div className='green-box bg-green '>
                            <div className='d-flex py-3 flex-column align-items-start justify-content-center'>
                                <span className='fs-2 fw-light'>{seconds}</span>
                                <span className='fs-5 fw-light'>YEARS OF EXPERIENCE</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About
