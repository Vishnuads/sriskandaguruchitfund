import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // ✅ Removed 'Loop'
import "swiper/css";


import user1 from '../images/testminals/saravanan.png'
import user2 from '../images/testminals/balamurugan.png'
import user3 from '../images/testminals/muthuraj.png'
import user4 from '../images/testminals/ganeshan.png'
import user5 from '../images/testminals/elzum.png'

// icons

import { FaStar } from "react-icons/fa6";



const testimonials = [
    {
        name: "Saravanan",
        position: "Owner of Saloon",
        star: Array(5).fill(<FaStar className="text-yellow-400 " />),
        img: user1,
        text: "Skandaguru Chits was a great support during a tough time. When my salon faced a financial emergency, I didn’t know what to do. That’s when I turned to my savings with Skandaguru Chits. The process was quick and easy, and I received the funds without any hassle. It helped me manage the situation smoothly. I am really grateful for their reliable service. Skandaguru Chits is truly a trusted financial backup!",
    },
    {
        name: "Balamurugan V R",
        position: "Owner of medical shop ",
        star: Array(5).fill(<FaStar className="text-yellow-400" />),
        img: user2,
        text: "I’m Balamurugan, and Skandaguru Chits has been a valuable part of my financial planning. When it was time to fund my children’s higher education, the savings I had built over time proved to be extremely useful. The returns were rewarding, allowing me to support their future without financial strain. I am truly grateful to Skandaguru Chits for providing a secure and beneficial savings option.",
    },
    {
        name: "Muthuraj ",
        position: "Auto Driver",
        star: Array(5).fill(<FaStar className="text-yellow-400" />),
        img: user3,
        text: "I’m Muthuraj, and owning a new auto was always my dream, but the high cost made it seem impossible. That’s when my savings with Skandaguru Chits proved to be valuable. The returns from my contribution helped me purchase the auto, and now my business is growing better than ever. Skandaguru Chits didn’t just support me financially—it helped me achieve my goal. I am truly grateful for the opportunity it provided.",
    },
    {
        name: "Arjunan Ganesan",
        position: "Owner of Vegetable shop",
        star: Array(5).fill(<FaStar className="text-yellow-400" />),
        img: user4,
        text: "I’m Arjunan, and saving a large amount was always a challenge. Skandaguru Chits made it easy with flexible payment options. I could contribute daily, weekly, or monthly at my convenience. Over time, I built a substantial savings fund. Their reliable system made managing my finances effortless.",
    },
    {
        name: "Ezham Suvai",
        position: "Owner of Ezham Suvai",
        star: Array(5).fill(<FaStar className="text-yellow-400" />),
        img: user5,
        text: "As a customer of Skandaguru Chits, I’ve experienced the benefits of systematic savings. My savings grew over time, and when I needed funds, the process was smooth and hassle-free. I received my money without delays and even got exciting gifts. Skandaguru Chits makes saving easy and rewarding, and I’m grateful to be part of it.",
    },
];



const Testimonials = () => {
    return (
        <div className="w-full">
            <div className="mx-auto md:px-8 h-full">
                <Swiper

                    modules={[Autoplay]}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                    spaceBetween={30}
                    slidesPerView={1} // Default to 1 slide
                    breakpoints={{
                        768: { slidesPerView: 1 },
                        1024: { slidesPerView: 3 },
                    }}

                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index} className="h-full">
                            <div className="h-[330px] md:min-h-[450px]  flex flex-col justify-between items-start gap-4  px-4 md:px-8 py-6 md:py-10 font-[Montserrat] bg-white rounded-lg drop-shadow-md">
                                {/* Stars */}
                                <div className="flex justify-center space-x-1 mt-2 text-[16px] md:text-[20px]">
                                    {testimonial.star}
                                </div>

                                {/* Testimonial Text */}
                                <div className="text-start text-[12px] md:text-[14px] leading-6 text-gray-600 font-[Nunito] flex-1">
                                    {testimonial.text}
                                </div>

                                {/* User Info */}
                                <div className="flex  items-center gap-2 sm:flex-row gap-x-3 md:gap-3  mt-2 md:mt-4">
                                    <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
                                        <img
                                            src={testimonial.img}
                                            loading="lazy"
                                            alt={testimonial.name}
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>

                                    <div>
                                        <div className=" text-[14px] md:text-[18px] font-medium text-black tracking-[px] sm:text-left font-yoonche">
                                            {testimonial.name}
                                        </div>
                                        <p className=" text-[9px] text-gray-500 sm:text-left md:text-[13px]">
                                            {testimonial.position}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;
