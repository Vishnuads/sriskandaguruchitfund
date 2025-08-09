import React from 'react'

// import logo from '../images/64.png'
import logo from '../images/logo.png'
// import line from '../images/banner/line.png'


//icons
import { FiInstagram } from "react-icons/fi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { ImWhatsapp } from "react-icons/im";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { LuFacebook } from "react-icons/lu";
import { FaThreads } from "react-icons/fa6";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { TbDeviceLandlinePhone } from "react-icons/tb";


import { MdOutlineMail } from "react-icons/md";
import { FaMobileScreen } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";




import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';


const Footer = () => {

    function topPage() {
        window.scroll(0, 0)
    }

    return (
        <>

            <div className='w-full relative bg-[#000000]'>

                <div class="  font-[Nunito]  pt-8 md:pt-14 z-40">
                    <div class="px-4  w-full  md:w-[90%] mx-auto md:px-4 sm:px-6 text-gray-800  grid  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 ">

                        <div class=" p-2 md:p-4">
                            <img src={logo} className='w-24 sm:w-14 md:w-40  object-cover drop-shadow-lg  shadow-gray-light' alt="" />

                            <div>
                                <p className='text-white  text-[10px] md:text-[12px] mt-4 pr-6'>Secure, flexible, and rewarding savings to help you build a brighter and more stable financial future.</p>
                            </div>
                            <div>
                                <div class="mt-1 md:mt-2 flex-col  flex gap-x-4 md:gap-x-8 ">

                                    <div className='mt-1 md:mt-6 flex-row  flex gap-x-4 md:gap-x-4  '>
                                        <Link to='https://x.com/sri_skandaguru' target='_blank'  className='group'>
                                            <div className='w-6 h-6 md:w-8 md:h-8 bg-black border border-gray-500  group-hover:border-[#deb139]  rounded-full flex justify-center items-center shadow-md drop-shadow-md  cursor-pointer hover:shadow-lg hover:drop-shadow-xl hover:animate-bounce'>
                                                <FaSquareXTwitter className='text-[12px] sm:text-[13px] md:text-[14px] text-gray-500 group-hover:text-[#deb139]' />
                                            </div>
                                        </Link>

                                        <Link to="https://www.instagram.com/sri_skandaguru_chitfunds/?hl=en" target='_blank' className='group'>
                                            <div className='w-6 h-6 md:w-8 md:h-8 bg-black border border-gray-500 group-hover:border-[#deb139]  rounded-full flex justify-center items-center shadow-md drop-shadow-md  cursor-pointer hover:shadow-lg hover:drop-shadow-xl hover:animate-bounce'>
                                                <FiInstagram className='text-[12px] sm:text-[13px] md:text-[14px] text-gray-500 group-hover:text-[#deb139]' />
                                            </div>
                                        </Link>

                                    
                                        <Link to="https://www.linkedin.com/in/sri-skandaguru-chit-funds-private-limited-chitfunds-227a8234a/" target='_blank' className="group">
                                            <div className='w-6 h-6 md:w-8 md:h-8 bg-black border border-gray-500 group-hover:border-[#deb139]  rounded-full flex justify-center items-center shadow-md drop-shadow-md  cursor-pointer hover:shadow-lg hover:drop-shadow-xl hover:animate-bounce'>
                                                <PiLinkedinLogoBold className='text-[12px] sm:text-[13px] md:text-[16px] text-gray-500  group-hover:text-[#deb139]' />
                                            </div>
                                        </Link>

                                        <Link to='https://www.facebook.com/people/Sri-Skandaguru-Chitfunds/61574165063256/' target='_blank' className='group'>
                                            <div className='w-6 h-6 md:w-8 md:h-8 bg-black border border-gray-500 group-hover:border-[#deb139]  rounded-full flex justify-center items-center shadow-md drop-shadow-md cursor-pointer hover:shadow-lg hover:drop-shadow-xl hover:animate-bounce'>
                                                <LuFacebook className='text-[12px] sm:text-[13px] md:text-[16px] text-gray-500 group-hover:text-[#deb139] ' />
                                            </div>
                                        </Link>


                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="p-2 md:p-4">
                            <div className="text-[12px] sm:text-[15px] md:text-[16px] uppercase text-white font-bold">Quick Links</div>
                            <Link className="text-gray-100 my-3 block text-[12px] sm:text-[14px] md:text-[15px] cursor-pointer hover:text-red-500" to="/" smooth={true} duration={500}>
                                Home
                            </Link>
                            <ScrollLink className="text-gray-100 my-3 block text-[12px] sm:text-[14px] md:text-[15px] cursor-pointer hover:text-red-500" to="schemes" smooth={true} duration={500}>
                                Schemes
                            </ScrollLink>
                            <ScrollLink className="text-gray-100 my-3 block text-[12px] sm:text-[14px] md:text-[15px] cursor-pointer hover:text-red-500" to="testimonials" smooth={true} duration={500}>
                            Testimonials
                            </ScrollLink>
                            <ScrollLink className="text-gray-100 my-3 block text-[12px] sm:text-[14px] md:text-[15px] cursor-pointer hover:text-red-500" to="story" smooth={true} duration={500}>
                            Our Story
                            </ScrollLink>
                        </div>


                        <div class="p-2 md:p-4">
                            <div class="text-[12px] sm:text-[15px] md:text-[14px]  uppercase text-white font-bold">Support</div>
                            <Link to='/' onClick={topPage}>
                                <p class="text-gray-100 my-3 block  text-[12px] sm:text-[14px]  md:text-[15px] hover:text-red-500" >Help Center </p>
                            </Link>
                            <Link to='/privacy_policy' onClick={topPage}>
                                <a class="text-gray-100  my-3 block  text-[12px] sm:text-[14px]  md:text-[15px] hover:text-red-500" href="/#">Privacy Policy </a>
                            </Link>

                            <Link to='/terms_condition' onClick={topPage}>
                                <a class="text-gray-100 my-3 block  text-[12px] sm:text-[14px]  md:text-[15px] hover:text-red-500" href="/#">Terms & Conditions</a>
                            </Link>


                        </div>

                        <div class="p-2 md:p-4">
                            <div class="text-[12px] sm:text-[14px] md:text-[14px]  uppercase text-white font-bold">Contact us</div>
                            <div >
                                {/* <h2 className='text-[14px] font-semibold '>SPECTRA CONSTRUCTIONS AND INFRASTRUCTURE PVT. LTD</h2> */}
                                <p class="text-gray-100 my-3 block  text-[12px] sm:text-[13px]  md:text-[14px]" > Old No. 95A, New No. 250, 2nd Floor, Arcot Road, Virugambakkam, Chennai-600 092.  </p>

                            </div>
                            <a href="mailto::sriskandaguruchitfunds@gmail.com" target="_blank" class="text-gray-100 my-3  text-[12px] sm:text-[14px]  md:text-[13px] flex items-center gap-x-2" ><MdOutlineMail className=' text-[16px] md:text-[20px] font-bold' />sriskandaguruchitfunds@gmail.com</a>
                            <p href="tel:919363236656" target="_blank" className='text-gray-100 text-[12px] sm:text-[13px] md:text-[13px] my-3 flex items-center gap-x-2 '><FaMobileAlt className='text-[16px] md:text-[20px] font-bold' /> +91 9363236656</p>
                            <p href="tel:919363236656" target="_blank" className='text-gray-100 text-[12px] sm:text-[13px] md:text-[13px] my-3 flex items-center gap-x-2 '><TbDeviceLandlinePhone className='text-[16px] md:text-[20px] font-bold' /> 044-4776 2707 / 044-4355 6222</p>
                        </div>

                    </div>
                </div>


                <div className="bg-[#000000] md:pt-2 z-40">
                    <div className="flex flex-col justify-between md:flex-row-reverse pb-4 md:pb-2 px-3 m-auto pt-3 md:pt-1 border-t border-[#aaaaaa] text-gray-800 text-sm w-full md:w-[80%] items-center">

                        {/* Right side - Company rights */}
                        <div className="mt-3 md:my-5 text-[9px] sm:text-[11px] md:text-[13px] text-gray-300">
                            Sri Skandaguru Chitfunds P.Ltd © 2025. All Rights Reserved.
                        </div>

                        {/* Left side - Developed by */}
                        <a 
                            href="https://vishnuads.com/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="mt-3 md:my-5 text-[9px] sm:text-[11px] md:text-[13px] text-gray-300 hover:text-[#deb139] transition duration-200"
                        >
                            Developed by Vishnu Ads & Ventures P.Ltd
                        </a>

                    </div>
                </div>

            </div>



        </>
    )
}

export default Footer