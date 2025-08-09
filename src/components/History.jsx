import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { gsap } from 'gsap';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Icons
import { MdOutlineArrowRight } from "react-icons/md";
import { MdOutlineArrowLeft } from "react-icons/md";


const timelineData = [
    {
        year: '2016',
        title: 'Foundation & Vision',
        description: 'Started with experience, trust, and 200 customers.',
    },
    {
        year: '2016',
        title: 'Grand Launch on Vijayadasami ',
        description: 'Gold prizes rewarded for customer participation.',
    },
    {
        year: '2017',
        title: 'First Expansion to Kundrathur',
        description: 'New branch opened within six months.',
    },
    {
        year: '2022',
        title: 'Rapid Growth Across States',
        description: 'Branches established in Tamil Nadu and Andhra Pradesh.',
    },
    {
        year: '2024',
        title: 'Serving 5000+ Customers ',
        description: 'Strong community with personalized customer service.',
    },
    {
        year: '2024',
        title: 'Customer Benefits ',
        description: 'Gifts, monthly visits, multiple payment options.',
    },
    {
        year: '2025',
        title: 'Major Expansion Plan  ',
        description: ' Statewide presence with staff incentive programs.',
    },
];

const History = () => {
    const sliderRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            '.timeline-slide',
            { opacity: 0, x: 50 },
            {
                opacity: 1,
                x: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out',
            }
        );
    }, []);

    const handlePrev = () => {
        sliderRef.current.slickPrev();
    };

    const handleNext = () => {
        sliderRef.current.slickNext();
    };




    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2500,
        slidesToShow: 4, // Default for tablets and above
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 640, // Mobile screens (< 640px)
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024, // Larger screens (≥ 1024px)
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
        ],
    };





    return (
        <div className="w-full mx-auto pb-8 md:py-10">
            <div className="w-full px-4 md:w-[85%] mx-auto">
                <div className="flex items-start md:items-center justify-between w-full">
                    <div className="flex flex-col items-start mb-5  md:w-[70%]">
                        <div className="bg-red-900/10 opacity-85 drop-shadow-sm  px-4 md:px-7 py-1.5 md:py-2.5 rounded-md md:rounded-xl w-fit">
                            <p className="text-[12px] md:text-[12px] font-semibold uppercase bg-gradient-to-r from-[#9b3440] to-[#c3a020] text-transparent bg-clip-text">
                                Our History
                            </p>
                        </div>

                        <h2 className="font-semibold text-[18px] md:text-[36px] text-black tracking-[1px] capitalize mt-2 font-[Sora]">
                            The Story of Growth & Trust
                        </h2>
                    </div>

                    {/* Custom Arrows */}
                    <div className="flex justify-center items-center gap-x-1  md:gap-x-3.5 md:mt-5  w-[20%] ">
                        <button
                            onClick={handlePrev}
                            className="size-7 md:size-10 flex justify-center items-center bg-red-950/65 hover:bg-red-900 transition duration-300  rounded-md md:rounded-lg cursor-pointer p-1"
                        >
                            <MdOutlineArrowLeft className="text-[28px] text-white font-bold" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="size-7 md:size-10 flex justify-center items-center bg-red-950/65 hover:bg-red-900 transition duration-300 rounded-md md:rounded-lg cursor-pointer p-1"
                        >
                            <MdOutlineArrowRight className="text-[28px] text-white font-bold" />
                        </button>
                    </div>

                </div>
            </div>


            <div className="relative w-[100%] mx-auto">
                <div className="absolute top-1/3 w-full h-0.5 md:h-1 drop-shadow-lg bg-[#9b3440] transform -translate-y-1/2"></div>

                <Slider ref={sliderRef} {...settings} className="timeline-slider w-[95%] mx-auto">
                    {timelineData.map((item, index) => (
                        <div
                            key={index}
                            className="timeline-slide rounded-lg relative mt-4 md:mt-10 hover:scale-105 transition-transform duration-500"
                        >
                            <div className="flex items-start mb-2 w-[90%] mx-auto">
                                <div className="relative">
                                    <div className="timeline-circle bg-gradient-to-tr from-[#9b3440] to-[#ead076] from-30%  w-12 md:w-16  h-12 md:h-16 rounded-full flex items-center justify-center text-white text-[10px] md:text-[12px] font-semibold">
                                        {item.year}
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col w-[90%] mx-auto mt-4  md:mt-9">
                                <h3 className="text-[16px] md:text-[20px] font-bold text-gray-800 font-[Sora]">{item.title}</h3>
                                <p className="text-[10px] md:text-[14px] text-gray-500 mt-2">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </Slider>


            </div>
        </div>
    );
};

export default History;
