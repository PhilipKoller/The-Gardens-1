import React, { useState, useEffect } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
const axios = require('axios');

const ImageCarousel = ({ activeStyle }) => {
  //Data Check
  if (!activeStyle[0]) {
    return null;
  }

  const photoUrl = activeStyle[0].photos.map(photo => {
    return photo.url;
  });

  // State Hooks
  const [current, setCurrent] = useState(0);
  const length = photoUrl.length;

  // Right Arrow Click Function
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  // Left Arrow Click Function
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  //Data Check
  if (!Array.isArray(photoUrl) || photoUrl.length <= 0) {
    return null
  }

  //  Carousel Construct
  return (
    <section className='relative flex flex-col justify-center max-h-full overflow-hidden'>
      <div className="flex flex-col justify-center max-h-3/4 w-full overflow-hidden object-cover object-bottom">
        <div className='absolute top-1/2 left-8 z-10 cursor-pointer select-none text-5xl'>
            <FaArrowAltCircleLeft onClick={prevSlide}/>
        </div>
        <div className='absolute top-1/2 right-8 z-10 cursor-pointer select-none text-5xl'>
            <FaArrowAltCircleRight onClick={nextSlide}/>
        </div>
        {photoUrl.map((image, index) => {
          return (
            <>
                {index === current && (<img key={index} src={image} alt='random image'
                className='-z-5 rounded-md'/>)}
            </>
          )
        })}
      </div>
    </section>
  )
};

export default ImageCarousel;