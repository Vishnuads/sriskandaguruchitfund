import React, { useEffect, useRef } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import gsap from 'gsap';




import s3text from '../images/shemes/s3_text.png'

import s1 from '../images/shemes/s1.png'
import s2 from '../images/shemes/s2.png'
import s3 from '../images/shemes/s3.png'
import s4 from '../images/shemes/s4.png'

// icons
import { RiSecurePaymentFill } from "react-icons/ri";


const ChidFundTable = () => {


    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const theadRef1 = useRef(null);
    const theadRef2 = useRef(null);
    const theadRef3 = useRef(null);
    const theadRef4 = useRef(null);

    useEffect(() => {
        gsap.to(theadRef1.current, {
            backgroundImage: [
                "linear-gradient(90deg, #ffe8d6, #ffb3a7, #ffd699, #ff6666)",
                "linear-gradient(90deg, #ff6666, #ffd699, #ffb3a7, #ffe8d6)",
                "linear-gradient(90deg, #ffb3a7, #ff6666, #ffe8d6, #ffd699)",

            ],
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "linear",
            backgroundSize: "200% 100%",
        });

        gsap.to(theadRef1.current, {
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"], // Moves the gradient
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
        });
    }, []);



    useEffect(() => {
        gsap.to(theadRef2.current, {
            backgroundImage: [
                "linear-gradient(90deg, #ffdfc8, #ff8a80, #ffcc80, #fe0000)",
                "linear-gradient(90deg, #fe0000, #ffcc80, #ff8a80, #ffdfc8)",
                "linear-gradient(90deg, #ff8a80, #fe0000, #ffdfc8, #ffcc80)",
            ],
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "linear",
            backgroundSize: "200% 100%",
        });

        gsap.to(theadRef2.current, {
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"], // Moves the gradient
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
        });
    }, []);


    useEffect(() => {
        gsap.to(theadRef3.current, {
            backgroundImage: [
                "linear-gradient(90deg, #ffdfc8, #ff8a80, #ffcc80, #fe0000)",
                "linear-gradient(90deg, #fe0000, #ffcc80, #ff8a80, #ffdfc8)",
                "linear-gradient(90deg, #ff8a80, #fe0000, #ffdfc8, #ffcc80)",
            ],
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "linear",
            backgroundSize: "200% 100%",
        });

        gsap.to(theadRef3.current, {
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"], // Moves the gradient
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
        });
    }, []);


    useEffect(() => {
        gsap.to(theadRef4.current, {
            backgroundImage: [
                "linear-gradient(90deg, #ffdfc8, #ff8a80, #ffcc80, #fe0000)",
                "linear-gradient(90deg, #fe0000, #ffcc80, #ff8a80, #ffdfc8)",
                "linear-gradient(90deg, #ff8a80, #fe0000, #ffdfc8, #ffcc80)",
            ],
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "linear",
            backgroundSize: "200% 100%",
        });

        gsap.to(theadRef4.current, {
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"], // Moves the gradient
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
        });
    }, []);




    return (
        <div>

            <div>


                <div class="md:p-6">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
                        {/* <!-- Table 1 --> */}
                        <div class="bg-white shadow-lg rounded-md overflow-hidden border border-gray-300 py" data-aos='fade-up-right' data-aos-duration='2000'>
                            <div className='flex items-center justify-between px-4 md:px-8 bg-white py-4 md:py-5'>
                                <div className='flex flex-col items-start'>
                                    <h2 class=" text-black text-[18px] md:text-[20px] font-bold  "> 20 Months </h2>
                                    <p className='text-[12px] md:text-[14px] '>Save smart, grow fast</p>
                                </div>

                                <div>
                                    <div className="relative  w-12 h-12 md:w-16  md:h-16 flex items-center justify-center">
                                        {/* Base Image */}
                                        <img src={s1} className="w-12 md:w-16 object-cover" alt="not" />

                                        {/* Spinning Text/Image */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <img src={s3text} className="w-full object-cover animate-spinSlow" alt="none" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="overflow-x-auto">
                                <table class="min-w-full">
                                    <thead ref={theadRef1} class=" text-black">
                                        <tr className='text-[11px] md:text-[14px]'>
                                            <th class="px-1 md:px-3 py-3 font-semibold text-center hidden md:flex">S.N</th>
                                            <th class="px-1 md:px-3 py-3 font-semibold text-center">Monthly Payable</th>
                                            <th class="px-1 md:px-3 py-3 font-semibold text-center">Chit Value</th>
                                            <th class="px-1 md:px-3 py-3 font-semibold text-center">Total Members</th>
                                        </tr>
                                    </thead>
                                    <tbody className='font-medium text-[12px] md:text-[14px] '>
                                        <tr class="border-b  hover:bg-gray-200 transition-all">
                                            <td class="px-3 py-4  text-gray-900 text-center hidden md:flex">1</td>
                                            <td class="px-3 py-4  text-gray-900 text-center">₹2,500</td>
                                            <td class="px-3 py-4  text-gray-900 text-center">₹50,000</td>
                                            <td class="px-3 py-4  text-gray-900 text-center">20</td>
                                        </tr>
                                        <tr class="border-b hover:bg-gray-200 transition-all">
                                            <td class="px-3 py-4 text-gray-900 text-center hidden md:flex">2</td>
                                            <td class="px-3 py-4 text-gray-900 text-center">₹5,000</td>
                                            <td class="px-3 py-4 text-gray-900 text-center">₹1,00,000</td>
                                            <td class="px-3 py-4 text-gray-900 text-center">20</td>
                                        </tr>
                                        <tr class="border-b  hover:bg-gray-200 transition-all">
                                            <td class="px-3 py-4 text-gray-900 text-center hidden md:flex">3</td>
                                            <td class="px-3 py-4 text-gray-900 text-center">₹25,000</td>
                                            <td class="px-3 py-4 text-gray-900 text-center">₹5,00,000</td>
                                            <td class="px-3 py-4 text-gray-900 text-center">20</td>
                                        </tr>
                                        <tr class="border-b hover:bg-gray-200 transition-all">
                                            <td class="px-3 py-4 text-gray-900 text-center hidden md:flex">4</td>
                                            <td class="px-3 py-4 text-gray-900 text-center">₹50,000</td>
                                            <td class="px-3 py-4 text-gray-900 text-center">₹10,00,000</td>
                                            <td class="px-3 py-4 text-gray-900 text-center">20</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* <!-- Table 2 --> */}
                        <div class="bg-white shadow-lg rounded-md overflow-hidden border border-gray-300 py" data-aos='fade-up-left' data-aos-duration='2000' >
                            <div className='flex items-center justify-between px-4 md:px-8 bg-white py-4 md:py-5'>
                                <div className='flex flex-col items-start'>
                                    <h2 class=" text-black text-[18px] md:text-[20px] font-bold  "> 25 Months </h2>
                                    <p className='text-[12px] md:text-[14px] '>Small steps, big gains</p>
                                </div>

                                <div>
                                    <div className="relative  w-12 h-12 md:w-16  md:h-16 flex items-center justify-center">
                                        {/* Base Image */}
                                        <img src={s2} className="w-12 md:w-16 object-cover" alt="not" />

                                        {/* Spinning Text/Image */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <img src={s3text} className="w-full object-cover animate-spinSlow" alt="none" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="overflow-x-auto">
                                <table class="min-w-full">
                                    <thead ref={theadRef2} class=" text-black">
                                        <tr className='text-[11px] md:text-[14px]'>
                                            <th class="px-1 md:px-3 py-3 font-semibold text-center hidden md:flex">S.N</th>
                                            <th class="px-1 md:px-3 py-3 font-semibold text-center">Monthly Payable</th>
                                            <th class="px-1 md:px-3 py-3 font-semibold text-center">Chit Value</th>
                                            <th class="px-1 md:px-3 py-3 font-semibold text-center">Total Members</th>
                                        </tr>
                                    </thead>
                                    <tbody className='font-medium text-[12px] md:text-[14px]'>
                                        <tr class="border-b  hover:bg-gray-200 transition-all">
                                            <td class="px-3 py-4 text-gray-900 text-center hidden md:flex">1</td>
                                            <td class="px-3 py-4 text-gray-900 text-center">₹1,000</td>
                                            <td class="px-3 py-4 text-gray-900 text-center">₹25,000</td>
                                            <td class="px-3 py-4 text-gray-900 text-center">25</td>
                                        </tr>
                                        <tr class="border-b hover:bg-gray-200 transition-all">
                                            <td class="px-3 py-4 text-gray-900 text-center hidden md:flex">2</td>
                                            <td class="px-3 py-4 text-gray-900 text-center">₹2,000</td>
                                            <td class="px-3 py-4 text-gray-900 text-center">₹50,000</td>
                                            <td class="px-3 py-4 text-gray-900 text-center">25</td>
                                        </tr>
                                        <tr class="border-b  hover:bg-gray-200 transition-all">
                                            <td class="px-3 py-4 text-gray-900 text-center hidden md:flex">3</td>
                                            <td class="px-3 py-4 text-gray-900 text-center">₹4,000</td>
                                            <td class="px-3 py-4 text-gray-900 text-center">₹1,00,000</td>
                                            <td class="px-3 py-4 text-gray-900 text-center">25</td>
                                        </tr>
                                        <tr class="border-b hover:bg-gray-200 transition-all">
                                            <td class="px-3 py-4 text-gray-900 text-center hidden md:flex">4</td>
                                            <td class="px-3 py-4 text-gray-900 text-center">₹20,000</td>
                                            <td class="px-3 py-4 text-gray-900 text-center">₹5,00,000</td>
                                            <td class="px-3 py-4 text-gray-900 text-center">25</td>
                                        </tr>
                                        <tr class="border-b hover:bg-gray-200 transition-all">
                                            <td class="px-3 py-4 text-gray-900 text-center hidden md:flex">5</td>
                                            <td class="px-3 py-4 text-gray-900 text-center">₹40,000</td>
                                            <td class="px-3 py-4 text-gray-900 text-center">₹10,00,000</td>
                                            <td class="px-3 py-4 text-gray-900 text-center">25</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* <!-- Table 3 --> */}
                        <div class="bg-white shadow-lg rounded-md overflow-hidden border border-gray-300 py" data-aos='fade-up-right' data-aos-duration='2000'>
                            <div className='flex items-center justify-between px-4 md:px-8 bg-white py-4 md:py-5'>
                                <div className='flex flex-col items-start'>
                                    <h2 class=" text-black text-[18px] md:text-[20px] font-bold  "> 30 Months </h2>
                                    <p className='text-[12px] md:text-[14px] '>Commit to success</p>
                                </div>

                                <div>
                                    <div className="relative  w-12 h-12 md:w-16  md:h-16 flex items-center justify-center">
                                        {/* Base Image */}
                                        <img src={s3} className="w-12 md:w-16 object-cover" alt="not" />

                                        {/* Spinning Text/Image */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <img src={s3text} className="w-full object-cover animate-spinSlow" alt="none" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="overflow-x-auto">
                                <table class="min-w-full">
                                    <thead ref={theadRef3} class=" text-black">
                                        <tr className='text-[11px] md:text-[14px]'>
                                            <th class="px-1 md:px-3 py-3 font-semibold text-center hidden md:flex">S.N</th>
                                            <th class="px-1 md:px-3 py-3 font-semibold text-center">Monthly Payable</th>
                                            <th class="px-1 md:px-3 py-3 font-semibold text-center">Chit Value</th>
                                            <th class="px-1 md:px-3 py-3 font-semibold text-center">Total Members</th>
                                        </tr>
                                    </thead>
                                    <tbody className='font-medium text-[12px]  md:text-[14px]'>
                                        <tr class="border-b  hover:bg-gray-200 transition-all">
                                            <td class="px-3 py-4 text-gray-900 text-center hidden md:flex">1</td>
                                            <td class="px-3 py-4 text-gray-900 text-center">₹10,000</td>
                                            <td class="px-3 py-4 text-gray-900 text-center">₹3,00,000</td>
                                            <td class="px-3 py-4 text-gray-900 text-center">30</td>
                                        </tr>
                                        <tr class="border-b hover:bg-gray-200 transition-all">
                                            <td class="px-3 py-4 text-gray-900 text-center hidden md:flex">2</td>
                                            <td class="px-3 py-4 text-gray-900 text-center">₹20,000</td>
                                            <td class="px-3 py-4 text-gray-900 text-center">₹6,00,000</td>
                                            <td class="px-3 py-4 text-gray-900 text-center">30</td>
                                        </tr>
                                        <tr class="border-b  hover:bg-gray-200 transition-all">
                                            <td class="px-3 py-4 text-gray-900 text-center hidden md:flex">3</td>
                                            <td class="px-3 py-4 text-gray-900 text-center">₹50,000</td>
                                            <td class="px-3 py-4 text-gray-900 text-center">₹15,00,000</td>
                                            <td class="px-3 py-4 text-gray-900 text-center">30</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* <!-- Table 4 --> */}
                        <div class="bg-white shadow-lg rounded-md overflow-hidden border border-gray-300 py" data-aos='fade-up-left' data-aos-duration='2000' >
                            <div className='flex items-center justify-between px-4 md:px-8 bg-white py-4 md:py-5'>
                                <div className='flex flex-col items-start'>
                                    <h2 class=" text-black text-[18px] md:text-[20px] font-bold  "> 40 Months </h2>
                                    <p className='text-[12px] md:text-[14px] '>Steady savings, greater rewards</p>
                                </div>

                                <div>
                                    <div className="relative  w-12 h-12 md:w-16  md:h-16 flex items-center justify-center">
                                        {/* Base Image */}
                                        <img src={s4} className="w-12 md:w-16 object-cover" alt="not" />

                                        {/* Spinning Text/Image */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <img src={s3text} className="w-full object-cover animate-spinSlow" alt="none" />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="overflow-x-auto">
                                <table class="min-w-full">
                                    <thead ref={theadRef4} class=" text-black">
                                        <tr className='text-[11px] md:text-[14px]'>
                                            <th class="px-1 md:px-3 py-3 font-semibold text-center hidden md:flex">S.N</th>
                                            <th class="px-1 md:px-3 py-3 font-semibold text-center">Monthly Payable</th>
                                            <th class="px-1 md:px-3 py-3 font-semibold text-center">Chit Value</th>
                                            <th class="px-1 md:px-3 py-3 font-semibold text-center">Total Members</th>
                                        </tr>
                                    </thead>
                                    <tbody className='font-medium text-[12px] md:text-[14px]'>
                                        <tr class="border-b hover:bg-gray-200 transition-all">
                                            <td class="px-3 py-4  text-gray-900 text-center hidden md:flex">1</td>
                                            <td class="px-3 py-4  text-gray-900 text-center">₹2,500</td>
                                            <td class="px-3 py-4  text-gray-900 text-center">₹1,00,000</td>
                                            <td class="px-3 py-4  text-gray-900 text-center">40</td>
                                        </tr>
                                        <tr class="border-b hover:bg-gray-200 transition-all">
                                            <td class="px-3 py-4  text-gray-900 text-center hidden md:flex">2</td>
                                            <td class="px-3 py-4  text-gray-900 text-center">₹5,000</td>
                                            <td class="px-3 py-4  text-gray-900 text-center">₹2,00,000</td>
                                            <td class="px-3 py-4  text-gray-900 text-center">40</td>
                                        </tr>
                                        <tr class="border-b hover:bg-gray-200 transition-all">
                                            <td class="px-3 py-4  text-gray-900 text-center hidden md:flex">3</td>
                                            <td class="px-3 py-4  text-gray-900 text-center">₹10,000</td>
                                            <td class="px-3 py-4  text-gray-900 text-center">₹4,00,000</td>
                                            <td class="px-3 py-4  text-gray-900 text-center">40</td>
                                        </tr>
                                        <tr class="border-b hover:bg-gray-200 transition-all">
                                            <td class="px-3 py-4  text-gray-900 text-center hidden md:flex">4</td>
                                            <td class="px-3 py-4  text-gray-900 text-center">₹12,500</td>
                                            <td class="px-3 py-4  text-gray-900 text-center">₹5,00,000</td>
                                            <td class="px-3 py-4  text-gray-900 text-center">40</td>
                                        </tr>
                                        <tr class="border-b hover:bg-gray-200 transition-all">
                                            <td class="px-3 py-4  text-gray-900 text-center hidden md:flex">5</td>
                                            <td class="px-3 py-4  text-gray-900 text-center">₹25,000</td>
                                            <td class="px-3 py-4  text-gray-900 text-center">₹10,00,000</td>
                                            <td class="px-3 py-4  text-gray-900 text-center">40</td>
                                        </tr>
                                        <tr class="border-b hover:bg-gray-200 transition-all">
                                            <td class="px-3 py-4  text-gray-900 text-center hidden md:flex">6</td>
                                            <td class="px-3 py-4  text-gray-900 text-center">₹50,000</td>
                                            <td class="px-3 py-4  text-gray-900 text-center">₹20,00,000</td>
                                            <td class="px-3 py-4  text-gray-900 text-center">40</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>



            </div>

        </div>
    )
}

export default ChidFundTable