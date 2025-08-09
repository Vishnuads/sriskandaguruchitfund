import React from 'react'
import { Link } from 'react-router-dom'

const Choose = () => {
    return (
        <>

            <div>

                <section className='bg-[#F9F9F9] py-16 md:py-40'>
                    <div className='w-full px-4 md:w-[80%] mx-auto  font-[Montserrat] '>

                        <div className='flex flex-col md:flex-row items-center justify-center gap-y-10 gap-x-24'>

                            <div className='w-full md:w-[50%] mx-auto'>
                                <div className='flex flex-col items-center justify-center border border-yellow-100/90 bg-white  py-10 md:py-12 drop-shadow-sm rounded-md'>
                                    <h1 className='text-[16px] md:text-[22px] uppercase font-bold text-center'> Company </h1>
                                    <p className='text-[12px] md:text-[16px] text-center text-gray-500'>Find the perfect plan for your needs.</p>

                                    <div className='mt-4 md:mt-8'>
                                        <Link to='/company_form'>
                                            <button className='px-6 py-2 rounded-md md:rounded-xl bg-yellow-700 text-white hover:scale-105 duration-300 text-[12px] md:text-[14px] font-semibold cursor-pointer'>Start Now</button>
                                        </Link>
                                    </div>

                                </div>
                            </div>


                            <div className='w-full md:w-[50%] mx-auto'>
                                <div className='flex flex-col items-center justify-center border border-yellow-100/90 bg-white py-10 md:py-12 drop-shadow-sm rounded-md'>
                                    <h1 className='text-[16px] md:text-[22px] uppercase font-bold text-center'>individual person </h1>
                                    <p className='text-[12px] md:text-[16px] text-center text-gray-500'>Select the plan that fits your personal needs.</p>

                                    <div className='mt-4 md:mt-8'>
                                        <Link to='/form'>
                                            <button className='px-6 py-2 rounded-md md:rounded-xl bg-yellow-700 text-white hover:scale-105 duration-300 text-[12px] md:text-[14px] font-semibold cursor-pointer'>Start Now</button>
                                        </Link>
                                    </div>

                                </div>
                            </div>

                        </div>


                    </div>
                </section>

            </div>


        </>
    )
}

export default Choose
