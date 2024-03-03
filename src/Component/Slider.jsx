import React, { useState, useEffect, useRef, } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SliderDesign from './SliderDesign';
import Products from '../Data';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === Products.length - 1 ? 0 : prevIndex + 1));
    }, 1000);

    return () => clearInterval(interval);
  }, [currentIndex]); // Empty dependency array to run effect only once on component mount

  return (
    <div >
    <div className='max-w-[1400px] m-auto   '>
      <div>
         <h1 className='font-medium text-xl p-2'>Shop by Categories</h1>
      </div>

      <div className='  '>
             <Swiper className=''
      slidesPerView={4}
     
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false
        }}
       igation={true}
        modules={[Autoplay, Pagination, Navigation]}
        
        // Update currentIndex on slide change
      >
        {Products.map((item, index) => (
          <SwiperSlide key={index} className=''>
          
          <SliderDesign
              image={item.imgSrc}
              proName={item.name}
              proCount={7}
            />
            
            
          </SwiperSlide>
        ))}
               </Swiper>
      </div>
    </div>
     
    
    </div>
  );
};

export default Slider;
