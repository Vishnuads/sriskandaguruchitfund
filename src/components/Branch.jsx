import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Autoplay } from "swiper/modules";

// Import client logos
import client1 from "../images/branch/01.jpg";
import client2 from "../images/branch/02.jpg";
import client3 from "../images/branch/03.jpg";
import client4 from "../images/branch/04.jpg";
import client5 from "../images/branch/05.jpg";
import client6 from "../images/branch/06.jpg";
import client7 from "../images/branch/07.jpg";
import client8 from "../images/branch/08.jpg"; 

const clientLogos = [client1, client2, client3, client4, client5, client6, client7, client8];

const Branch = () => {
    return (
        <div className="w-full  py-3 md:py-10 flex justify-center items-center">
            <Swiper
                slidesPerView={5} // Default: Laptop (>= 1024px)
                breakpoints={{
                    320: { slidesPerView: 3, spaceBetween: 1 },  // Mobile
                    768: { slidesPerView: 3, spaceBetween: 15 },  // Tablet
                    1024: { slidesPerView: 5, spaceBetween: 20 }, // Laptop
                }}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                {clientLogos.map((logo, index) => (
                    <SwiperSlide key={index} className="flex items-center justify-center  px-3 md:px-14">
                        <img src={logo} alt={`Client ${index + 1}`} className=" h-auto drop-shadow-lg rounded-md md:rounded-xl object-contain" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Branch;
