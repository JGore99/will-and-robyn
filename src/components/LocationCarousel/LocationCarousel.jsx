import React from "react"
import Carousel from 'react-bootstrap/Carousel'
import './LocationCarousel.css'
// import {MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos} from 'react-icons/md'
import LeFanfare01 from '../../images/le_fanfare01a.png'
import LeFanfare02 from '../../images/le_fanfare02.png'
import LeFanfare03 from '../../images/le_fanfare03.png'
import LeFanfare04 from '../../images/le_fanfare04.png'
import LeFanfare05 from '../../images/le_fanfare05.png'
// import LeFanfare06 from '../../images/le_fanfare06.png'

    
const LocationCarousel = () => { 
  return (
    <div>
      <Carousel> 
      <Carousel.Item interval={null} slide={true} touch={true}>
          <img
            className="d-block w-100"
            src={LeFanfare01}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={null} slide={true} touch={true}>
          <img
            className="d-block w-100"
            src={LeFanfare02}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={null} slide={true} touch={true}>
          <img
            className="d-block w-100"
            src={LeFanfare03}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={null} slide={true} touch={true}>
          <img
            className="d-block w-100"
            src={LeFanfare04}
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={null} slide={true} touch={true}>
          <img
            className="d-block w-100"
            src={LeFanfare05}
            alt="Fifth slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )   
}

export default LocationCarousel
