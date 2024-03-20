import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function App(props) {
    const ImagesData = props.image;
  const [swiperRef, setSwiperRef] = useState(null);
  return (
    <div className="container mt-5 mb-5">
      <h2
        className="d-flex justify-content-start align-items-center text-warning "
        style={{ borderLeft: "5px solid black", padding: "0px 0px 0px 10px" }}
      >
       Offer Zone
      </h2>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={4}
        spaceBetween={30}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 1,
          },

          576: {
            slidesPerView: 2,
          },

          768: {
            slidesPerView: 3,
          },

          992: {
            slidesPerView: 4,
          },

          1200: {
            slidesPerView: 4,
          },
        }}
      >
         {ImagesData?.map((item, index) => (
        <div key={index}>
           <SwiperSlide>
          <img src={item.imageUrl} />
        </SwiperSlide>
        </div>
      ))}
        
      </Swiper>
    </div>
  );
}
