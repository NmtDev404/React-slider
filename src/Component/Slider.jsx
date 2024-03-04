// import React, { useState, useEffect, useRef, } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SliderDesign from './SliderDesign';
// import Products from '../Data';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// const Slider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex === Products.length - 1 ? 0 : prevIndex + 1));
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [currentIndex]); // Empty dependency array to run effect only once on component mount

//   return (
//     <div >
//     <div className='max-w-[1200px] m-auto   '>
//       <div>
//          <h1 className='font-medium text-xl p-2'>Shop by Categories</h1>
//       </div>

//       <div className='  '>
//              <Swiper className='lg:left-[10%] mt-7'
//       slidesPerView={2}
     
//         centeredSlides={true}
//         loop={true}
//         autoplay={{
//           delay: 1500,
//           disableOnInteraction: false
//         }}
//        igation={true}
//         modules={[Autoplay, Pagination, Navigation]}
        
//         // Update currentIndex on slide change
//       >
//         {Products.map((item, index) => (
//           <SwiperSlide key={index} className=''>
          
//           <SliderDesign className=''
//               image={item.imgSrc}
//               proName={item.name}
//               proCount={7}
//             />
            
            
//           </SwiperSlide>
//         ))}
//                </Swiper>
//       </div>
//     </div>
     
    
//     </div>
//   );
// };

// export default Slider;
import React, { useState, useEffect } from 'react';
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
    <div className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-medium text-xl p-2">Shop by Categories</h1>
      </div>

      <div className="relative mt-7 lg:left-[10%] md:left-[9%] sm:left-[15%] text-sm lg:text-base " >
        <Swiper
          slidesPerView={3}
          centeredSlides={"true"}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false
          }}
          navigation={""}
          modules={[Autoplay, Pagination, Navigation]}
          // Update currentIndex on slide change
          onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 3
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 5
            }
          }}
        >
          {Products.map((item, index) => (
            <SwiperSlide key={index}>
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
  );
};

export default Slider;
