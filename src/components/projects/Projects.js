import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import { CarouselProvider, Slider, Slide, DotGroup, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './Projects.scss'


import ProjectImg1 from '../../images/xproject-1.jpg.pagespeed.ic.Z5DG65N_vh.webp'
import ProjectImg2 from '../../images/xproject-2.jpg.pagespeed.ic.BQ-gyenFLa.webp'
import ProjectImg3 from '../../images/xproject-3.jpg.pagespeed.ic.odO5nAvlq1.webp'
import ProjectImg4 from '../../images/xproject-4.jpg.pagespeed.ic.OmfOxcGLqL.webp'
import ProjectImg5 from '../../images/xproject-5.jpg.pagespeed.ic.SspqbUWjpi.webp'
import ProjectImg6 from '../../images/xproject-6.jpg.pagespeed.ic.JGXDTOqWBB.webp'

function Projects() {

    const [Projectitems] = useState([
        {
            index: 0,
            imgUrl: ProjectImg1,
            title: 'Project Title1',
            designation: 'Website Design'
        },
        {
            index: 1,
            imgUrl: ProjectImg2,
            title: 'Project Title2',
            designation: 'Website Design'
        },
        {
            index: 2,
            imgUrl: ProjectImg3,
            title: 'Project Title3',
            designation: 'Website Design'
        },
        {
            index: 3,
            imgUrl: ProjectImg4,
            title: 'Project Title4',
            designation: 'Website Design'
        },
        {
            index: 4,
            imgUrl: ProjectImg5,
            title: 'Project Title5',
            designation: 'Website Design'
        },
        {
            index: 5,
            imgUrl: ProjectImg6,
            title: 'Project Title',
            designation: 'Website Design'
        },
    ])
    return (
        <div id='projects' className='pb-3 pb-sm-5 bg-lighter'>
            <Container className='d-flex flex-column align-items-center justify-content-center'>
                <h5 className='pt-5 mt-5 text-green fw-light'>ACCOMPLISHMENTS</h5>
                <h2 className='fs-1 fw-normal'>OUR PROJECTS</h2>
                <p className='py-4 fw-lighter text-center'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                <CarouselProvider
                    naturalSlideWidth={50}
                    naturalSlideHeight={60}
                    totalSlides={6}
                    isPlaying={true}
                    visibleSlides={3}
                    className='w-100'
                >
                    <Slider>
                        {
                            Projectitems.map(item => (
                                <Slide index={item.index} className='projects'>
                                    <Image src={item.imgUrl} className='image px-2' />
                                    <div className="overlay d-flex flex-column align-items-start justify-content-center">
                                        <h4 className="text-white">{item.title}</h4>
                                        <h6 className="text-white">{item.designation}</h6>
                                    </div>
                                </Slide>
                            ))
                        }
                    </Slider>
                    <DotGroup className='d-flex flex-row align-items-center justify-content-center'
                        // dotNumbers={true} 
                        showAsSelectedForCurrentSlideOnly={true}
                    />
                </CarouselProvider>
            </Container>

        </div>
    )
}

export default Projects
