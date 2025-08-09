import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { gsap } from "gsap";



import logo from "../images/logo.png";

// import logo from '../images/logo.png';
// import call from '../images/call.gif'

//icons
import { BsCart4 } from "react-icons/bs";
import { GrWaypoint } from "react-icons/gr";
import { FaMobileAlt } from "react-icons/fa";

import { TiHomeOutline } from "react-icons/ti";

import { AiOutlineWhatsApp } from "react-icons/ai";







const Header = () => {


  const [nav, setNav] = useState(false); // State to manage mobile menu visibility
  const [navbarBg, setNavbarBg] = useState('bg-white text-gray-700 duration-500'); // State to manage navbar background color

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setNavbarBg('bg-slate-50 shadow-md text-black');
      } else {
        setNavbarBg('bg-white text-gray-700');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const topPage = () => {
    window.scrollTo(0, 0);
  };



  // button animation

  const splashRef = useRef(null);

  const handleHover = () => {
    gsap.to(splashRef.current, {
      x: "100%",       // Slide to the right
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleLeave = () => {
    gsap.to(splashRef.current, {
      x: "-100%",     // Slide back to the left
      duration: 0.5,
      ease: "power2.out",
    });
  };




  return (
    <>

      {/* <div className="flex items-center justify-between bg-[#be5c9a] h-8 md:h-9 w-full font-[roboto]">
        <div className="overflow-hidden w-[65%] md:w-[50%] h-full">
          <div className="w-fit px-4 md:px-6 h-full flex justify-center items-center">
            <div className="marquee-container">
              <p className="marquee-text text-[6px] md:text-[11px] font-bold text-white tracking-[0.4px] uppercase">
                First 10 bookings get 20% OFF—hurry, limited offer!
              </p>
            </div>
          </div>
        </div>
        <div className="w-[35%] md:w-[50%] flex justify-end pr-4 sm:pr-6 md:pr-8 lg:pr-10">
          <a href="tel:+916379172058" target="_blank" rel="noopener noreferrer">
            <div className="flex items-center  gap-x-0.5 md:gap-x-1">

              <div>
                <FaMobileAlt className='text-[12px] md:text-[15px] drop-shadow-lg  text-white  md:mb-0.5  ' />
              </div>

              <span className="font-[Roboto] text-[9px] md:text-[12px] text-white font-semibold">
                +91 9047651568
              </span>
            </div>
          </a>
        </div>
      </div> */}


      {/* Main Navbar */}
      <nav className={`w-full sticky top-0 z-50 py-4 md:pt-12 pb- 6 ${navbarBg}`}>
        <div className="max-w-full mx-auto font-[Montserrat]">
          <div className="flex justify-between items-center px-4 sm:px-9 w-full xl:w-[90%] mx-auto">
            {/* Logo */}
            <div className="w-fit">
              <Link to="/" onClick={topPage}>
                {/* <span className="text-xl font-bold text-black">Logo</span> */}
                <img src={logo} className="w-28  md:w-40 " alt="none" />
              </Link>
            </div>


            {/* Desktop Navigation */}
            <ul className="hidden md:flex w-fit ml-10 gap-x-4 xl:gap-x-16 text-black border rounded-4xl border-gray-200 px-8 py-4 font-semibold">

              <li>
                <Link to="/" onClick={topPage} className="hover:text-[#ddad32]  text-[13px] ">
                  Home
                </Link>
              </li>
              <li>
                <ScrollLink to="schemes" smooth={true} duration={500} onClick={topPage} className="hover:text-[#ddad32] text-[13px] cursor-pointer ">
                  Schemes
                </ScrollLink>
              </li>

              {/* <li>
                <ScrollLink to="team" smooth={true} duration={500} onClick={topPage} className="hover:text-[#ddad32] text-[13px] cursor-pointer ">

                  Meet the Team
                </ScrollLink>
              </li> */}

              <li>
                <ScrollLink to="testimonials" smooth={true} duration={500} onClick={topPage} className="hover:text-[#ddad32] text-[13px]  cursor-pointer">
                  Testimonials
                </ScrollLink>
              </li>

              <li>
                <ScrollLink to="contact" smooth={true} duration={500} onClick={topPage} className="hover:text-[#ddad32] text-[13px]  cursor-pointer">

                  Contact Us
                </ScrollLink>
              </li>

            </ul>


            {/* WhatsApp Button */}

            <div className='flex items-center gap-x-5 ml-9 md:ml-0 '>

              <div>
                <Link
                  to="https://api.whatsapp.com/send?phone=919363236656"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2"
                >
                  <div className="border border-gray-300 p-1.5 md:p-3 rounded-full cursor-pointer transition-all duration-300 hover:bg-green-500 hover:text-white">
                    <AiOutlineWhatsApp className="text-[18px] md:text-[24px] text-gray-800" />
                  </div>
                </Link>
              </div>


              {/* <div className="cursor-pointer flex justify-end items-end w-full md:w-fit mr-2  bg-gradient-to-r from-[#9b3440] to-[#ead076] from-60%   px-8 py-4 rounded-full text-[15px] font-semibold text-white " onClick={topPage}>
                <Link to="/login" className="relative ">

                  Get Started

                </Link>
              </div> */}

              {/* bg-gradient-to-r from-[#9b3440] to-[#ead076] from-60% */}

              <div>
                <Link
                  to="choose"
          
                  rel="noopener noreferrer"
                  className="inline-block mt-2">


                  <div
                    className="cursor-pointer flex justify-end items-end w-full md:w-fit mr-2  bg-gradient-to-tr from-[#9b3440] to-[#ead076] from-30%   px-4 md:px-8  py-2 md:py-4 rounded-xl md:rounded-full text-[10px] md:text-[15px] font-semibold text-white relative overflow-hidden"
                    onMouseEnter={handleHover}
                    onMouseLeave={handleLeave}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  >
                    <span
                      ref={splashRef}
                      className="absolute top-0 left-0 w-full h-full bg-[#ead076] opacity-50 transform -translate-x-full"
                    ></span>

                    Start Saving

                  </div>
                </Link>
              </div>



            </div>



            {/* Mobile Menu Icon */}
            <div onClick={handleNav} className="block lg:hidden cursor-pointer px-2 mt-0.5">
              {nav ? (
                <AiOutlineClose className=" text-[16px] md:text-[20px] text-black" />
              ) : (
                <AiOutlineMenu className=" text-[16px] md:text-[20px] text-black" />
              )}
            </div>

            {/* Mobile Navigation */}
            <ul
              className={`fixed top-0 left-0 pt-10 pl-7 w-[60%] h-full bg-gray-50 z-50 border-r border-r-gray-300 transition-transform ${nav ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
              <li>
                <div className="w-fit mb-4">
                  <Link to="/" onClick={topPage} >
                    {/* <span className="text-xl font-bold text-black">Logo</span> */}
                    <img src={logo} className="w-28" alt="none" />
                  </Link>
                </div>
              </li>

              <li className=" py-3" onClick={topPage}>
                <Link to="/" onClick={handleNav} className="text-[13px] font-semibold text-gray-700">
                  Home
                </Link>
              </li>

              <li className=" py-3" onClick={topPage}>
                <ScrollLink to="schemes" smooth={true} duration={500} onClick={topPage}>
                  <button className="text-[13px] font-semibold text-gray-700" onClick={handleNav}>Schemes</button>
                </ScrollLink>
              </li>

              {/* <li className=" py-3" onClick={topPage}>
                <ScrollLink to="team" smooth={true} duration={500} onClick={topPage}>
                  <button className="text-[13px] font-semibold text-gray-700" onClick={handleNav}>Meet the Team</button>
                </ScrollLink>
              </li> */}
              <li className=" py-3" onClick={topPage}>
                <ScrollLink to="testimonials" smooth={true} duration={500} onClick={topPage}>
                  <button className="text-[13px] font-semibold text-gray-700" onClick={handleNav}>Testimonials</button>
                </ScrollLink>
              </li>

              <li className=" py-3" onClick={topPage}>
                <ScrollLink to="story" smooth={true} duration={500} onClick={topPage}>
                  <button className="text-[13px] font-semibold text-gray-700" onClick={handleNav}>Our Story</button>
                </ScrollLink>
              </li>


            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;