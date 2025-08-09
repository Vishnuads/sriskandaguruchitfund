import React, { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'

import star from '../images/star.png'
import minStar from '../images/min_star.png'
import arrow from '../images/arrow.png'

import man from '../images/man.png'
import chart from '../images/chart.png'
import high1 from '../images/logo-01.jpg'
import high2 from '../images/logo-02.jpg'
import high3 from '../images/logo-03.jpg'

import secure1 from '../images/secure_icon.png'
import secure2 from '../images/saving_icon.png'

import chart2 from '../images/chart1.jpg'
import chart3 from '../images/chart2.jpg'

import why1 from '../images/why1.png'
import why2 from '../images/why2.png'
import why3 from '../images/why3.png'
import why4 from '../images/why4.png'

import contact from '../images/chit_contact.png'



import icon1 from '../images/1.png'

import serviceText from '../images/services.png'

import how1 from '../images/how1.png'
import how2 from '../images/how2.png'
import how3 from '../images/how3.png'

import line from '../images/line.png'

import banner from '../images/video_banner.jpg'
import team1 from '../images/team-2.jpg'

import smallBanner from '../images/small_banner.jpg'



// icons
import { RiSecurePaymentFill } from "react-icons/ri";
import { GrMoney } from "react-icons/gr";
import { FaPlay } from "react-icons/fa";

import { LuFacebook } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import Testimonials from '../components/Testimonials'
import History from '../components/History';
import ChitFundTables from '../components/ChidFundTable';
import Branch from '../components/Branch';
import Form from '../components/Form';

import Document from '../components/Document';
import PlanForm from '../components/PlanForm';
import Faq from '../components/Faq';



const Home = () => {


    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);


    const topPage = () => {
        window.scrollTo(0, 0);
    };



    const arrowRef = useRef(null);
    const arrowRef1 = useRef(null);
    const starRef = useRef(null);
    const starRef1 = useRef(null);
    const chartRef = useRef(null);
    const chartRef1 = useRef(null);
    const chartRef2 = useRef(null);

    useEffect(() => {
        // Floating animation for the arrow image
        gsap.to(arrowRef.current, {
            y: 30,           // Vertical floating distance
            duration: 2,     // Duration of the floating animation
            repeat: -1,      // Infinite loop
            yoyo: true,      // Move up and down
            ease: "sine.inOut", // Smooth sine wave effect
        });

        // Floating animation for the arrow image
        gsap.to(arrowRef1.current, {
            y: 50,
            x: -20,           // Vertical floating distance
            duration: 2,     // Duration of the floating animation
            repeat: -1,      // Infinite loop
            yoyo: true,      // Move up and down
            ease: "sine.inOut", // Smooth sine wave effect
        });

        // Floating animation for the star image with a phase shift
        gsap.to(starRef.current, {
            y: -30,          // Vertical floating distance (opposite direction)
            duration: 1.5,   // Slightly different duration for variation
            repeat: -1,      // Infinite loop
            yoyo: true,      // Move up and down
            ease: "sine.inOut", // Smooth sine wave effect
            delay: 0.5,      // Slight delay to create a wave effect
        });

        // Floating animation for the star1 image with a phase shift
        gsap.to(starRef1.current, {
            y: -10,          // Vertical floating distance (opposite direction)
            x: -70,          // Vertical floating distance (opposite direction)
            duration: 1.5,   // Slightly different duration for variation
            repeat: -1,      // Infinite loop
            yoyo: true,      // Move up and down
            ease: "sine.inOut", // Smooth sine wave effect
            delay: 0.5,      // Slight delay to create a wave effect
        });

        // Floating animation for the chart
        gsap.to(chartRef.current, {
            y: -30,          // Vertical floating distance (opposite direction)
            duration: 1.5,   // Slightly different duration for variation
            repeat: -1,      // Infinite loop
            yoyo: true,      // Move up and down
            ease: "sine.inOut", // Smooth sine wave effect
            delay: 0.5,      // Slight delay to create a wave effect
        });
        // Floating animation for the chart1
        gsap.to(chartRef1.current, {
            x: -40,          // Vertical floating distance (opposite direction)
            duration: 1.5,   // Slightly different duration for variation
            repeat: -1,      // Infinite loop
            yoyo: true,      // Move up and down
            ease: "sine.inOut", // Smooth sine wave effect
            delay: 0.5,      // Slight delay to create a wave effect
        });
        gsap.to(chartRef2.current, {
            x: -40,          // Vertical floating distance (opposite direction)
            y: -20,
            rotate: 10,         // Vertical floating distance (opposite direction)
            duration: 1.5,   // Slightly different duration for variation
            repeat: -1,      // Infinite loop
            yoyo: true,      // Move up and down
            ease: "sine.inOut", // Smooth sine wave effect
            delay: 0.5,      // Slight delay to create a wave effect
        });
    }, []);



    return (
        <>

            <div className='overflow-hidden'>


                <div>
                    {/* <Document /> */}
                 
                </div>

                <section className='w-full'>
                    <div className='w-full relative'>


                        {/* Floating Arrow Image */}
                        <div className='absolute bottom-10 -left-4 md:-right-20 w-full flex justify-start'>
                            <img ref={arrowRef} src={arrow} className='w-20 md:w-48 object-cover' alt='arrow' />
                        </div>

                        {/* Floating Arrow Image */}
                        <div className='absolute top-14  left-0  w-full flex justify-start'>
                            <img ref={arrowRef1} src={minStar} className=' w-14 md:w-16 object-cover' alt='arrow' />
                        </div>

                        {/* Floating Star Image */}
                        <div className='absolute -bottom-0 md:bottom-10 right-0 md:right-20 w-full flex justify-end'>
                            <img ref={starRef} src={star} className='w-20 md:w-36 object-cover' alt='star' />
                        </div>


                        <div className='py-16 md:py-28'>
                            <div className=" flex flex-col items-center justify-center gap-y-3 bg-whtie">
                                <div className='bg-red-900/10 px-6 py-1.5 rounded-xl md:rounded-full mb-2'>
                                    <p class="text-[11px] md:text-[12px] font-[Montserrat] font-medium uppercase  bg-gradient-to-r from-[#9b3440] to-[#c3a020] text-transparent bg-clip-text">
                                        Savings Made Easy
                                    </p>
                                </div>

                                <div className='flex flex-col items-center '>
                                    <h1 className="font-[Rubik] text-gray-900 tracking-[2px] text-[1.3rem] md:text-[55px] font-medium">Your Savings, Your Security, </h1>
                                    <h1 className="font-[Rubik] text-gray-900 tracking-[2px] text-[1.3rem] md:text-[55px] -mt-1 font-medium">  Your Future! </h1>
                                </div>

                                <div className='mt-3 md:mt-6  mb-4 md:mb-5'>
                                    <p className='text-[14px] md:text-[20px] text-gray-600   md:w-[75%] text-center mx-auto font-[Montserrat]'> your savings are your power—commit wisely and secure your future today with us.</p>
                                </div>

                                <ScrollLink to="contact" smooth={true} duration={500} onClick={topPage} className="hover:text-[#ddad32]  cursor-pointer z-40">
                                    <button className="cursor-pointer flex justify-end items-end w-fit md:w-fit mr-2 hover:scale-105 duration-300 bg-gradient-to-tr from-[#9b3440] to-[#ead076] from-30%  px-7  md:px-12 py-2 md:py-4 rounded-xl md:rounded-full text-[14px] md:text-[16px] font-semibold text-white ">
                                        Grow With Us
                                    </button>
                                </ScrollLink>

                            </div>
                        </div>

                    </div>
                </section>


                <section className='pt-24 md:pt-20'>
                    <div className='w-full px-4 md:w-[80%] mx-auto  flex justify-center items-center relative'>

                        <div className='absolute  top-0 md:top-10  left-8 md:left-14 z-30 '>
                            <img ref={chartRef} src={high2} className='w-24 md:w-80 object-cover rounded-xs md:rounded-md shadow-md drop-shadow-sm' alt='none' />
                        </div>

                        <div className='absolute bottom-3 md:bottom-5 left-5 md:left-28 z-30 '>
                            <img ref={chartRef2} src={high3} className='w-14 md:w-32  object-cover rounded-sm shadow-md drop-shadow-sm' alt='none' />
                        </div>


                        <div className='absolute  top-0 md:-top-5 right-6  md:right-14 z-30 '>
                            <img ref={chartRef1} src={high1} className='w-16 md:w-72 object-cover rounded-sm md:rounded-md shadow-md drop-shadow-sm' alt='none' />
                        </div>

                        <div className='w-[20rem] md:w-[50rem] h-[10rem] md:h-[26rem] rounded-t-full bg-gradient-to-t from-[#ddad32]  to-white to-95% flex justify-center items-center relative'>

                            <div className='absolute bottom-0 w-full flex justify-center items-center'>
                                <img src={man} className='w-[65%] md:w-[60%] object-cover' alt='none' />
                            </div>

                        </div>

                    </div>
                </section>

                {/* ---------------- reach  ---------------------- */}

                <section className='bg-black py-10 md:py-16'>
                    <div className='w-full  md:w-[85%] mx-auto'>

                        <div className='grid grid-cols-2 md:grid-cols-4  md:gap-x-12 gap-y-12  font-[Montserrat] text-white'>

                            <div>
                                <div className='flex flex-col items-center ' data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
                                    <h2 className='font-semibold text-[22px] md:text-[55px] '>100+</h2>
                                    <p className='text-[12px] md:text-[16px]'>Expert Team Members</p>
                                </div>
                            </div>
                            <div>
                                <div className='flex flex-col items-center ' data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
                                    <h2 className='font-semibold text-[22px] md:text-[55px]'>20K+</h2>
                                    <p className=' text-[12px] md:text-[16px]'>Our trusted partners</p>
                                </div>
                            </div>
                            <div>
                                <div className='flex flex-col items-center ' data-aos="fade-up" data-aos-delay="50" data-aos-duration="2000">
                                    <h2 className='font-semibold text-[22px] md:text-[55px]'>₹50</h2>
                                    <p className='text-[12px] md:text-[16px]'>Minimum savings</p>
                                </div>
                            </div>
                            <div>
                                <div className='flex flex-col items-center ' data-aos="fade-up" data-aos-delay="50" data-aos-duration="3000">
                                    <h2 className='font-semibold text-[22px] md:text-[55px]'>99%</h2>
                                    <p className='text-[12px] md:text-[16px]'>Customer Satisfaction</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>


                {/* --------------- Secure Retirement  --------------------- */}

                <section className='pt-16 md:pt-36  pb-10 md:pb-20 font-[Montserrat]'>
                    <div className='w-full px-4 md:w-[85%] mx-auto'>

                        <div className='flex flex-col md:flex-row items-center justify-center gap-x-4 gap-y-10 '>

                            <div className='w-full md:w-[40%] h-full mx-auto bg-[#fbf0e8] rounded-md md:rounded-xl  px-4 md:px-8 pt-6 md:pt-12' data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">

                                <div className='h-full'>

                                    <div className='flex items-center justify-between '>
                                        <h2 className='font-semibold text-[18px] md:text-[26px] tracking-tight font-[Sora]'>Secure Retirement</h2>
                                        {/* <div className='bg-gradient-to-bl from-[#9b3440] to-[#ead076] from-30% rounded-full size-12 flex justify-center items-center'>
                                            <RiSecurePaymentFill className='text-[26px]  text-white  ' />
                                        </div> */}
                                        <div>
                                            <img src={secure1} className='w-10 md:w-14 object-cover' alt='none' />
                                        </div>
                                    </div>
                                    <div className='py-3 md:py-5'>
                                        <p className='font-semibold text-[13px] md:text-[15px] tracking-tight text-gray-800 '>Big dreams start with small steps</p>
                                        <p className='font-medium  text-[12px] md:text-[15px] tracking-tight text-gray-500 mt-1'>Small daily savings of Rs. 50 can lead to big achievements, helping you secure a stress-free and prosperous life. </p>
                                    </div>
                                    <div>
                                        <img src={chart2} className='w-full rounded-t-xl object-cover' alt='chart' />
                                    </div>


                                </div>
                            </div>


                            <div className='w-full md:w-[60%] h-full mx-auto bg-[#fbf0e8] rounded-md md:rounded-xl px-4 md:px-8 pt-6 md:pt-12' data-aos="fade-up" data-aos-delay="50" data-aos-duration="2000">

                                <div className='h-full'>

                                    <div className='flex items-center justify-between '>
                                        <h2 className='font-semibold text-[18px] md:text-[26px] tracking-tight font-[Sora]'>Flexible Saving Options</h2>
                                        <div>
                                            <img src={secure2} className='w-10 md:w-14 object-cover' alt='none' />
                                        </div>
                                    </div>
                                    <div className='py-3 md:py-6'>
                                        <p className='text-[13px] md:text-[15px] tracking-tight text-gray-800 font-semibold'>Daily, Weekly, Monthly based scheme</p>
                                        <p className='font-medium text-[12px] md:text-[15px] tracking-tight text-gray-500 mt-1 '>A flexible savings scheme designed specifically for daily wage earners, allowing you to save conveniently on a daily, weekly, or monthly basis.</p>
                                    </div>

                                    <div>
                                        <img src={chart3} className='w-full object-cover rounded-t-xl' alt='chart' />
                                    </div>


                                </div>

                            </div>

                        </div>

                    </div>
                </section>



                {/* ------------------------- Why Choose US  ---------------*/}

                <section className='py-10 md:py-20 bg-gray-50'>
                    <div className='w-full px-4 md:w-[85%] mx-auto  font-[Montserrat]'>

                        <div className='flex flex-col md:flex-row items-center justify-center gap-y-10'>

                            <div className='w-full md:w-[45%] mx-auto' data-aos="fade-right" data-aos-delay="50" data-aos-duration="2000">

                                <div>

                                    <div className='bg-red-900/10 opacity-85 drop-shadow-xs px-6 py-1.5 rounded-full mb-5 w-fit'>
                                        <p class="text-[10px] md:text-[12px]  font-semibold  uppercase  bg-gradient-to-r from-[#9b3440] to-[#c3a020]  text-transparent bg-clip-text">
                                            why choose us
                                        </p>
                                    </div>

                                    <div className='flex flex-col items-start  gap-y-2 md:gap-y-4'>
                                        <h2 className='text-[20px] md:text-[40px] font-bold capitalize tracking-tight font-[Sora]'>Smart Choices Today, Bright Future Ahead!</h2>
                                        <p className='text-[14px] md:text-[17px] leading-6 md:leading-7 font-medium text-gray-500'>With years of experience in the field, our team of experts treats every client with personalized care and dedication.</p>
                                    </div>

                                    <div>
                                        <ScrollLink to="contact" smooth={true} duration={500} onClick={topPage} className="  cursor-pointer z-40">
                                            <button className="mt-4 md:mt-8 cursor-pointer flex justify-end items-end w-fit mr-2 bg-gradient-to-tr from-[#9b3440] to-[#ead076] from-30%  px-4 md:px-10  py-1.5 md:py-3.5 rounded-lg md:rounded-3xl text-[12px] md:text-[14px] font-semibold text-white ">
                                                Start Saving
                                            </button>
                                        </ScrollLink>
                                    </div>

                                </div>

                            </div>


                            <div className='w-full md:w-[55%] mx-auto md:px-10'>

                                <div className='flex flex-col md:flex-row items-center gap-x-4  gap-y-8 md:gap-y-6'>

                                    <div className='w-full md:w-[50%] mx-auto md:mb-24  space-y-8 md:space-y-12' >

                                        <div>
                                            <div className=' flex flex-col justify-center  bg-white rounded-md px-5 md:px-8  py-4 md:py-6 drop-shadow-xs' data-aos="fade-up-left" data-aos-delay="50" data-aos-duration="2000">
                                                <div className='mb-3'>
                                                    {/* <GrMoney className='text-[40px] text-fuchsia-500  drop-shadow-md' /> */}
                                                    <div>
                                                        <img src={why1} className='w-12 md:w-[22%] drop-shadow-sm object-cover' alt='none' />
                                                    </div>

                                                </div>

                                                <div className='flex flex-col gap-y-2 items-start'>
                                                    <h3 className='font-semibold text-[16px] md:text-[18px] text-gray-800 tracking-tight font-[Sora]'>Smart and Secure</h3>
                                                    <p className='font-medium text-[12px] md:text-[14px] text-gray-600 leading-5 md:leading-6'>Manage your finances smartly and securely with our trusted schemes, ensuring hassle-free savings and customized wealth-building options for your growth.</p>
                                                </div>

                                            </div>
                                        </div>
                                        <div>
                                            <div className=' flex flex-col justify-center  bg-white rounded-md px-4 md:px-8 py-4 md:py-8 drop-shadow-xs' data-aos="fade-up" data-aos-delay="50" data-aos-duration="3000">
                                                <div className='mb-3'>
                                                    <div>
                                                        <img src={why2} className='w-12 md:w-[22%] drop-shadow-sm object-cover' alt='none' />
                                                    </div>
                                                </div>

                                                <div className='flex flex-col gap-y-2 items-start'>
                                                    <h3 className='font-semibold text-[16px] md:text-[18px] text-gray-800 tracking-tight font-[Sora]'>Personalized Savings Jar</h3>
                                                    <p className='font-medium text-[12px]  md:text-[14px] text-gray-600 leading-5 md:leading-6'>Save daily, weekly, or monthly—just like a piggy bank, but smarter, with added interest to grow your money effortlessly.</p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>


                                    <div className='w-full md:w-[50%] mx-auto md:mt-24  space-y-8 md:space-y-12'>

                                        <div>
                                            <div className=' flex flex-col justify-center  bg-white rounded-md px-4  md:px-8  py-4 md:py-10 drop-shadow-xs' data-aos="fade-up-left" data-aos-delay="50" data-aos-duration="2000">
                                                <div className='mb-3'>
                                                    <div>
                                                        <img src={why3} className=' w-14 md:w-[28%] drop-shadow-sm object-cover' alt='none' />
                                                    </div>
                                                </div>

                                                <div className='flex flex-col gap-y-2 items-start'>
                                                    <h3 className='font-semibold text-[16px] md:text-[18px] text-gray-800 tracking-tight font-[Sora]'>Instant fund access</h3>
                                                    <p className='font-medium text-[12px] md:text-[14px] text-gray-600 leading-5 md:leading-6'>Get instant access to funds during emergencies with our hassle-free process, ensuring quick and seamless financial support.</p>
                                                </div>

                                            </div>
                                        </div>


                                        <div>
                                            <div className=' flex flex-col justify-center  bg-white rounded-md px-4 md:px-8 py-4 md:py-10 drop-shadow-xs' data-aos="fade-up" data-aos-delay="50" data-aos-duration="3000">
                                                <div className='mb-3'>
                                                    <div>
                                                        <img src={why4} className='w-12 md:w-[22%] drop-shadow-sm object-cover' alt='none' />
                                                    </div>
                                                </div>

                                                <div className='flex flex-col gap-y-2 items-start'>
                                                    <h3 className='font-semibold text-[16px] md:text-[18px] text-gray-800 tracking-tight font-[Sora]'>Guaranteed Growth</h3>
                                                    <p className='font-medium text-[12px] md:text-[14px] text-gray-600  leading-5 md:leading-6'>Our chit fund schemes offer consistent returns without market volatility, ensuring a stable and predictable financial future for you.</p>
                                                </div>

                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </section>


                {/* --------------------- services   ------------------- */}

                <section className='pt-10 md:pt-20  pb-24 md:pb-48 bg-black relative' id='schemes'>

                    <div className="absolute bottom-8 md:bottom-2 w-full flex justify-center items-center">
                        <div className="relative w-full">
                            <img src={serviceText} className="w-[75%] object-cover mx-auto opacity-45" alt="none" />
                            <div className="absolute bottom-0 left-0 w-full h-[30%] md:h-[90%] bg-gradient-to-b from-transparent to-black opacity-95"></div>
                        </div>
                    </div>

                    <div className='w-full px-4 md:w-[85%] mx-auto font-[Montserrat]'>

                        <div className='flex flex-col items-center gap-y-2 mb-6 md:mb-10'>
                            <div className='bg-red-100/20 opacity-85 drop-shadow-xs px-7 md:px-10 py-1.5 md:py-2.5 rounded-full w-fit'>
                                <p class="text-[10px] md:text-[12px]   font-semibold  uppercase  bg-gradient-to-r from-[#9b3440] to-[#c3a020] text-transparent bg-clip-text">
                                    Schemes
                                </p>
                            </div>
                            <h2 className='font-bold text-center text-[26px] md:text-[40px] text-white font-[Rubik]'>Save Today, Worry Less Tomorrow!</h2>
                        </div>

                        <ChitFundTables />


                        {/* <div className='grid grid-cols-2 gap-x-6 gap-y-10 mt-12'>

                            <div>
                                <div className='bg-white px-6 py-12 rounded-xl' data-aos="fade-up-left" data-aos-delay="50" data-aos-duration="1000">

                                    <div className='flex items-center justify-center '>



                                        <h2 className='font-bold text-[26px] mb-8 '>20 Months</h2>
                                    </div>

                                    <div>
                                        <div class="flex flex-col">
                                            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                                <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                                    <div class="overflow-hidden">
                                                        <table class="min-w-full">
                                                            <thead class="border-b">
                                                                <tr>
                                                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">S.N</th>
                                                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Monthly Payable</th>
                                                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Chit Value</th>
                                                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Total Members</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr class="border-b">
                                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">1</td>
                                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">2,500</td>
                                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">50,000</td>
                                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">20</td>
                                                                </tr>
                                                                <tr class="bg-white border-b">
                                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">2</td>
                                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">5,000</td>
                                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">1,00,000</td>
                                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">20</td>
                                                                </tr>
                                                                <tr class="bg-white border-b">
                                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">3</td>
                                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">25,000</td>
                                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">5,00,000</td>
                                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">20</td>
                                                                </tr>
                                                                <tr class="bg-white border-b">
                                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">4</td>
                                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">50,000</td>
                                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">10,00,000</td>
                                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">20</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>

                            <div>
                                <div className='bg-white px-6 py-12 rounded-xl' data-aos="fade-up-left" data-aos-delay="50" data-aos-duration="2000">

                                    <div className='flex items-center justify-center '>

                                        <div className=' bg-gradient-to-bl from-[#9b3440] to-[#ead076] from-30% rounded-full size-20 flex justify-center items-center'>
                                            <RiSecurePaymentFill className='text-[42px]  text-white  ' />
                                        </div>
                                    </div>

                                    <div className='flex flex-col items-center gap-y-6 mt-8'>
                                        <div className='flex flex-col items-center gap-y-2'>
                                            <h2 className='font-medium text-[22px]  tracking-[1px] font-[Rubik]'>Retirement Solutions</h2>
                                            <p className='text-[15px] font-medium text-center text-gray-500 '>Duis aute irure dolor in velit one reprehenderit in voluptate more esse cillum dolore neris.</p>
                                        </div>

                                        <div>
                                            <button className='font-semibold text-[14px] text-gray-700 '>Discover More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div>
                                <div className='bg-white px-6 py-12 rounded-xl' data-aos="fade-up-left" data-aos-delay="50" data-aos-duration="3000">

                                    <div className='flex items-center justify-center '>

                                        <div className=' bg-gradient-to-bl from-[#9b3440] to-[#ead076] from-30% rounded-full size-20 flex justify-center items-center'>
                                            <RiSecurePaymentFill className='text-[42px]  text-white  ' />
                                        </div>
                                    </div>

                                    <div className='flex flex-col items-center gap-y-6 mt-8'>
                                        <div className='flex flex-col items-center gap-y-2'>
                                            <h2 className='font-medium text-[22px]  tracking-[1px] font-[Rubik]'>Retirement Solutions</h2>
                                            <p className='text-[15px] font-medium text-center text-gray-500 '>Duis aute irure dolor in velit one reprehenderit in voluptate more esse cillum dolore neris.</p>
                                        </div>

                                        <div>
                                            <button className='font-semibold text-[14px] text-gray-700 '>Discover More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div>
                                <div className='bg-white px-6 py-12 rounded-xl' data-aos="fade-up-left" data-aos-delay="50" data-aos-duration="3000">

                                    <div className='flex items-center justify-center'>

                                        <div className='bg-gradient-to-bl from-[#9b3440] to-[#ead076] from-30% rounded-full size-20 flex justify-center items-center'>
                                            <RiSecurePaymentFill className='text-[42px]  text-white  ' />
                                        </div>
                                    </div>

                                    <div className='flex flex-col items-center gap-y-6 mt-8'>
                                        <div className='flex flex-col items-center gap-y-2'>
                                            <h2 className='font-medium text-[22px]  tracking-[1px] font-[Rubik]'>Retirement Solutions</h2>
                                            <p className='text-[15px] font-medium text-center text-gray-500 '>Duis aute irure dolor in velit one reprehenderit in voluptate more esse cillum dolore neris.</p>
                                        </div>

                                        <div>
                                            <button className='font-semibold text-[14px] text-gray-700 '>Discover More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div> */}

                    </div>
                </section>

                {/* ------------------- Work Process ------------ */}

                <section className='pt-10 md:pt-20 pb-10 md:pb-28 bg-gradient-to-b from-white to-gray-50 font-[Montserrat] relative'>

                    {/* Floating Star Image */}
                    <div className='absolute  -bottom-5 md:-bottom-12  right-0 md:right-28 w-full flex justify-end'>
                        <img ref={starRef1} src={star} className='w-10 md:w-36 object-cover' alt='star' />
                    </div>

                    <div className='w-full px-4 md:w-[85%] mx-auto'>


                        <div className='flex flex-col items-center  mb-8 md:mb-0'>
                            <div className='bg-red-900/10 opacity-85 drop-shadow-sm px-7  py-1.5 md:py-2.5 rounded-full w-fit'>
                                <p class="text-[10px] md:text-[12px] font-semibold  uppercase bg-gradient-to-r from-[#9b3440] to-[#c3a020] text-transparent bg-clip-text">
                                    Work Process
                                </p>
                            </div>
                            <h2 className='font-semibold text-[28px] md:text-[44px] text-black tracking-[1px] capitalize mt-2 font-[Rubik]'>How it works</h2>
                        </div>


                        <div className='grid grid-cols-1 md:grid-cols-3 gap-x-6  '>

                            <div>
                                <div className=' md:px-6 py-4 md:py-12 rounded-xl' data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">

                                    <div className='flex items-center justify-center relative '>

                                        {/* <div className=' bg-gradient-to-bl from-[#9b3440] to-[#ead076] from-30% rounded-full size-16 flex justify-center items-center'>
                                            <RiSecurePaymentFill className='text-[35px]  text-white  ' />
                                        </div> */}
                                        <div>
                                            <img src={how1} className='w-12 md:w-16 object-cover' alt='none' />
                                        </div>
                                        <div className='absolute top-8 -right-32 md:flex justify-end w-full hidden '>
                                            <img src={line} className='w-[60%] object-cover' alt='none' />
                                        </div>
                                    </div>

                                    <div className='flex flex-col items-center gap-y-2 mt-4 md:mt-8'>

                                        <h2 className='font-medium text-[14px] md:text-[16px] text-center font-[Rubik] '>Register & Verify Your Documents</h2>
                                        <p className='text-[12px] md:text-[13px] font-medium text-center text-gray-500 '>Fill out the application form, submit  ID proof, and provide reference details to get started. </p>

                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className=' md:px-6 py-4 md:py-12 rounded-xl' data-aos="fade-up" data-aos-delay="50" data-aos-duration="2000">

                                    <div className='flex items-center justify-center relative'>

                                        <div>
                                            <img src={how2} className='w-14 md:w-16 object-cover' alt='none' />
                                        </div>

                                        <div className='absolute top-8 -right-32 md:flex justify-end w-full hidden'>
                                            <img src={line} className='w-[60%] object-cover' alt='none' />
                                        </div>

                                    </div>

                                    <div className='flex flex-col items-center gap-y-2 mt-4 md:mt-8'>

                                        <h2 className='font-medium text-[14px] md:text-[16px]  text-center font-[Rubik] '>Choose the Right Chit for You</h2>
                                        <p className='text-[12px] md:text-[13px] font-medium text-center text-gray-500 '> Select your preferred chit and pay daily, weekly, or monthly before the due date. </p>

                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className=' px-4 md:px-6 py-4 md:py-12 rounded-xl' data-aos="fade-up" data-aos-delay="50" data-aos-duration="3000">

                                    <div className='flex items-center justify-center '>

                                        <div>
                                            <img src={how3} className='w-14 md:w-16 object-cover' alt='none' />
                                        </div>
                                    </div>

                                    <div className='flex flex-col items-center gap-y-2  mt-4 md:mt-8'>

                                        <h2 className='font-medium  text-[14px] md:text-[16px] text-center  font-[Rubik] '>Start Growing Your Wealth</h2>
                                        <p className='text-[12px] md:text-[13px] font-medium text-center text-gray-500 '>Begin your savings journey with us and secure your financial future effortlessly. </p>

                                    </div>
                                </div>
                            </div>

                        </div>


                        {/* <div className=' mt-10 md:mt-4'>
                            <div className='relative rounded-xl overflow-hidden' data-aos="fade-up" data-aos-delay="50" data-aos-duration="2000">
                                <div className='relative'>
                                    <img src={banner} className='w-full object-cover rounded-md md:rounded-xl' alt='none' />
                                    <div className='w-full backdrop-blur-[1px] bg-black/35 inset-0 absolute top-0 w'></div>
                                </div>


                                <div className='absolute inset-0 flex justify-center items-center'>
                                    <span className="relative flex size-10 md:size-20 cursor-po">
                                        
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ddad32] duration-500 opacity-75 scale-100"></span>
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#e9ce73] opacity-55 duration-[1200ms] delay-300 scale-110"></span>
                                        <span className="absolute inline-flex h-full w-full animate-pulse rounded-full bg-[#c59b1a] opacity-50 duration-[1600ms] delay-600 scale-125"></span>
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#b38a14] opacity-40 duration-[2000ms] delay-900 scale-140"></span>

                                        <span className="absolute inline-flex h-full w-full animate-spin rounded-full bg-[#f0c14b] opacity-30 duration-[3000ms] delay-1000"></span>

                                       
                                        <span className="relative inline-flex size-10 md:size-20 rounded-full bg-[#d8ad1d] justify-center items-center animate-pulse duration-700">
                                            <FaPlay className='text-white  text-[10px] md:text-[30px]' />
                                        </span>
                                    </span>
                                </div>

                            </div>
                        </div> */}

                    </div>
                </section>


                {/* Explore Our Locations */}
                <section className='bg-gradient-to-b from-gray-50 via-blue-50 to-gray-50'>


                    <div className='w-full px-4 md:w-[95%] mx-auto'>


                        <div className='flex flex-col items-center  mb-3 md:mb-0'>
                            <div className='bg-red-900/10 opacity-85 drop-shadow-sm px-7  py-1.5 md:py-2.5 rounded-full w-fit'>
                                <p class="text-[10px] md:text-[12px] font-semibold  uppercase bg-gradient-to-r from-[#9b3440] to-[#c3a020] text-transparent bg-clip-text">
                                    our branches - collections
                                </p>
                            </div>
                            <h2 className='font-semibold text-[24px] md:text-[44px] text-black  md:tracking-[1px] capitalize mt-2 font-[Rubik]'>Explore Our Locations</h2>
                        </div>


                        <div>
                            <Branch />
                        </div>

                    </div>
                </section>


                {/* ------------- Our Team  ------------------- */}

                {/* <section className='pt-28 pb-16 bg-gray-50 font-[Montserrat]' id='team'>
                    <div className='w-[80%] mx-auto'>


                        <div className='flex flex-col items-center mb-10'>
                            <div className='bg-red-900/10 opacity-85 drop-shadow-sm px-7 py-2.5 rounded-full w-fit'>
                                <p class="text-[12px] font-semibold  uppercase  bg-gradient-to-r from-[#9b3440] to-[#c3a020] text-transparent bg-clip-text">
                                    Our Team
                                </p>
                            </div>
                            <h2 className='font-medium text-[44px] text-black tracking-[1px] capitalize mt-2 font-[Rubik]'>Our Expert Team</h2>
                        </div>


                        <div className='grid grid-cols-4 gap-x-4 font-[Nunito]'>



                            <div>
                                <div className='  h-full' data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
                                    <div>
                                        <div className='relative rounded-md overflow-hidden group'>

                                            <img src={team1} className='w-full object-cover group-hover:scale-110 duration-700' alt='none' />

                                            <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
                                                <div className='bg-gradient-to-bl from-red-900/65 to-yellow-300/35  rounded-md scale-0 group-hover:scale-100 transition-transform duration-700 ease-out h-full w-full flex items-center justify-center gap-x-6'>

                                                    <div className='size-10 rounded-full bg-white  hover:bg-gradient-to-br from-fuchsia-500 to-blue-500 flex justify-center items-center'>
                                                        <LuFacebook className='text-[15px] text-black  hover:text-white' />
                                                    </div>
                                                    <div className='size-10 rounded-full bg-white  hover:bg-gradient-to-br from-fuchsia-500 to-blue-500 flex justify-center items-center'>
                                                        <FaInstagram className='text-[15px] text-black  hover:text-white' />
                                                    </div>
                                                    <div className='size-10 rounded-full bg-white  hover:bg-gradient-to-br from-fuchsia-500 to-blue-500 flex justify-center items-center'>
                                                        <FaXTwitter className='text-[15px] text-black  hover:text-white' />
                                                    </div>


                                                </div>
                                            </div>
                                        </div>

                                        <div className='flex flex-col items-center justify-center mt-6 group '>
                                            <h3 className='font-[Rubik] text-[21px] font-medium tracking-[1px]'>Ronald Richards</h3>
                                            <p className='text-[18px] antialiased text-gray-600 font-medium'>Digital Marketer</p>
                                        </div>

                                    </div>

                                </div>
                            </div>


                            <div>
                                <div className='  h-full' data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
                                    <div>
                                        <div className='relative rounded-md overflow-hidden group'>

                                            <img src={team1} className='w-full object-cover group-hover:scale-110 duration-700' alt='none' />

                                            <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
                                                <div className='bg-gradient-to-bl from-red-900/65 to-yellow-300/35  rounded-md scale-0 group-hover:scale-100 transition-transform duration-700 ease-out h-full w-full flex items-center justify-center gap-x-6'>

                                                    <div className='size-10 rounded-full bg-white  hover:bg-gradient-to-br from-fuchsia-500 to-blue-500 flex justify-center items-center'>
                                                        <LuFacebook className='text-[15px] text-black  hover:text-white' />
                                                    </div>
                                                    <div className='size-10 rounded-full bg-white  hover:bg-gradient-to-br from-fuchsia-500 to-blue-500 flex justify-center items-center'>
                                                        <FaInstagram className='text-[15px] text-black  hover:text-white' />
                                                    </div>
                                                    <div className='size-10 rounded-full bg-white  hover:bg-gradient-to-br from-fuchsia-500 to-blue-500 flex justify-center items-center'>
                                                        <FaXTwitter className='text-[15px] text-black  hover:text-white' />
                                                    </div>


                                                </div>
                                            </div>
                                        </div>

                                        <div className='flex flex-col items-center justify-center mt-6 group '>
                                            <h3 className='font-[Rubik] text-[21px] font-medium tracking-[1px]'>Ronald Richards</h3>
                                            <p className='text-[18px] antialiased text-gray-600 font-medium'>Digital Marketer</p>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div>
                                <div className='  h-full' data-aos="fade-up" data-aos-delay="50" data-aos-duration="2000">
                                    <div>
                                        <div className='relative rounded-md overflow-hidden group'>

                                            <img src={team1} className='w-full object-cover group-hover:scale-110 duration-700' alt='none' />

                                            <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
                                                <div className='bg-gradient-to-bl from-red-900/65 to-yellow-300/35  rounded-md scale-0 group-hover:scale-100 transition-transform duration-700 ease-out h-full w-full flex items-center justify-center gap-x-6'>

                                                    <div className='size-10 rounded-full bg-white  hover:bg-gradient-to-br from-fuchsia-500 to-blue-500 flex justify-center items-center'>
                                                        <LuFacebook className='text-[15px] text-black  hover:text-white' />
                                                    </div>
                                                    <div className='size-10 rounded-full bg-white  hover:bg-gradient-to-br from-fuchsia-500 to-blue-500 flex justify-center items-center'>
                                                        <FaInstagram className='text-[15px] text-black  hover:text-white' />
                                                    </div>
                                                    <div className='size-10 rounded-full bg-white  hover:bg-gradient-to-br from-fuchsia-500 to-blue-500 flex justify-center items-center'>
                                                        <FaXTwitter className='text-[15px] text-black  hover:text-white' />
                                                    </div>


                                                </div>
                                            </div>
                                        </div>

                                        <div className='flex flex-col items-center justify-center mt-6 group '>
                                            <h3 className='font-[Rubik] text-[21px] font-medium tracking-[1px]'>Ronald Richards</h3>
                                            <p className='text-[18px] antialiased text-gray-600 font-medium'>Digital Marketer</p>
                                        </div>

                                    </div>

                                </div>
                            </div>


                            <div>
                                <div className='  h-full' data-aos="fade-up" data-aos-delay="50" data-aos-duration="3000">
                                    <div>
                                        <div className='relative rounded-md overflow-hidden group'>

                                            <img src={team1} className='w-full object-cover group-hover:scale-110 duration-700' alt='none' />

                                            <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
                                                <div className='bg-gradient-to-bl from-red-900/65 to-yellow-300/35  rounded-md scale-0 group-hover:scale-100 transition-transform duration-700 ease-out h-full w-full flex items-center justify-center gap-x-6'>
                                                    <div className='size-10 rounded-full bg-white  hover:bg-gradient-to-br from-fuchsia-500 to-blue-500 flex justify-center items-center'>
                                                        <LuFacebook className='text-[15px] text-black  hover:text-white' />
                                                    </div>
                                                    <div className='size-10 rounded-full bg-white  hover:bg-gradient-to-br from-fuchsia-500 to-blue-500 flex justify-center items-center'>
                                                        <FaInstagram className='text-[15px] text-black  hover:text-white' />
                                                    </div>
                                                    <div className='size-10 rounded-full bg-white  hover:bg-gradient-to-br from-fuchsia-500 to-blue-500 flex justify-center items-center'>
                                                        <FaXTwitter className='text-[15px] text-black  hover:text-white' />
                                                    </div>


                                                </div>
                                            </div>
                                        </div>

                                        <div className='flex flex-col items-center justify-center mt-6 group '>
                                            <h3 className='font-[Rubik] text-[21px] font-medium tracking-[1px]'>Ronald Richards</h3>
                                            <p className='text-[18px] antialiased text-gray-600 font-medium'>Digital Marketer</p>
                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                </section> */}



                {/* -------------------- small banner -------------------- */}

                <section className='pt-10 md:pt-28 pb-8 md:pb-10 bg-gradient-to-b from-gray-50 via-blue-50 to-blue-50'>
                    <div className='w-full px-4 md:w-[80%] mx-auto' data-aos="fade-up" data-aos-delay="50" data-aos-duration="2000">

                        <div>
                            <img src={smallBanner} className='w-full object-cover rounded-md md:rounded-xl' alt='none' />
                        </div>

                    </div>
                </section>



                {/* ---------------------- Testimonials -------------------- */}
                <section className='py-10 md:py-20 bg-gradient-to-br from-blue-50 via-[#eff6ff] to-[#f1eee4] font-[Montserrat]' id='testimonials'>
                    <div className='w-full px-4 md:w-[85%] mx-auto'>

                        <div className='flex flex-col items-center mb-6 md:mb-10' data-aos="fade-up" data-aos-delay="50" data-aos-duration="3000">
                            <div className='bg-red-900/10 opacity-95 drop-shadow-sm px-7 py-1.5 md:py-2.5 rounded-full w-fit'>
                                <p class="text-[10px] md:text-[12px] font-semibold  uppercase  bg-gradient-to-r from-[#9b3440] to-[#c3a020] text-transparent bg-clip-text">
                                    Testimonials
                                </p>
                            </div>
                            <h2 className='font-medium text-[28px] md:text-[44px] text-black tracking-[1px] capitalize mt-2 font-[Rubik]'>Love From Clients</h2>
                        </div>


                        <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="2000">
                            <Testimonials />
                        </div>

                    </div>
                </section>






                {/* ---------------------- FAQ -------------------- */}
                <section className='py-10 md:py-20 bg-gradient-to-tr from-blue-50 via-[#eff6ff] to-[#f1eee4] font-[Montserrat]'>

                    <div className='w-full px-4 md:w-[85%] mx-auto'>

                        <div className='flex flex-col items-center mb-6 md:mb-10' data-aos="fade-up" data-aos-delay="50" data-aos-duration="3000">
                            <div className='bg-red-900/10 opacity-85 drop-shadow-sm px-7 py-1.5 md:py-2.5 rounded-full w-fit'>
                                <p class="text-[11px] md:text-[12px] font-semibold  uppercase  bg-gradient-to-r from-[#9b3440] to-[#c3a020] text-transparent bg-clip-text ">
                                    General FAQ
                                </p>
                            </div>
                            <h2 className='font-medium text-center text-[28px] md:text-[44px] text-black tracking-[1px] capitalize mt-2 font-[Rubik]'>Frequently Asked Questions</h2>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="2000">
                            <Faq />
                        </div>

                    </div>

                </section>


                {/* -------------- History ------------------- */}

                <section className=' font-[Rubik] pt-10  pb-10 md:pb-8 bg-gradient-to-b from-[#f1f6fc] to-white' id='story'>

                    <div>
                        <History />
                    </div>

                </section>



                {/* Contact Form section */}

                <section className='bg-gradient-to-b from-white to-slate-50  pt-2 pb-10 md:py-20' id='contact'>
                    <div className='w-full px-4 md:w-[80%] mx-auto font-[Rubik]'>


                        <div className='flex flex-col items-center mb-12 md:mb-4' data-aos="fade-up" data-aos-delay="50" data-aos-duration="3000">
                            <div className='bg-red-900/10 opacity-85 drop-shadow-sm px-7 py-1.5 md:py-2.5 rounded-full w-fit'>
                                <p class="text-[10px] md:text-[12px] font-semibold  uppercase  bg-gradient-to-r from-[#9b3440] to-[#c3a020] text-transparent bg-clip-text ">
                                    Get in Touch with Us!
                                </p>
                            </div>
                            <h2 className='font-medium text-center text-[16px] md:text-[40px]  md:w-[70%] text-black  md:tracking-[1px] capitalize mt-2 font-[Rubik]'>Secure Your Savings, Grow Your Wealth - Let's Connect Today! </h2>
                        </div>

                        <div className='flex flex-col md:flex-row gap-y-14 items-center justify-center'>

                            <div className='w-full md:w-[50%] mx-auto'>
                                <div>
                                    <div className='flex justify-center'>
                                        <img src={contact} className='w-[90%]  md:w-[80%] drop-shadow-md object-cover' alt='none' />
                                    </div>
                                </div>
                            </div>


                            <div className='w-full md:w-[50%] mx-auto'>
                                <div>
                                    <Form />
                                </div>
                            </div>


                        </div>

                    </div>
                </section>





            </div>



        </>
    )
}

export default Home