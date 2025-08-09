import React from 'react'


const Terms = () => {
    return (
        <>


            <section className='bg-gray-50 flex px-3 py-3 md:p-8 font-[roboto]'>



                <div className='w-full  md:w-[85%] bg-white px-4  py-14 rounded-md border-2 border-gray-50  mx-auto'>

                    <div className='my-1 sm:my-2 md:my-3'>
                        <h3 className='text-gray-900 font-bold uppercase text-center font-[poppins] text-[14px] sm:text-[16px] md:text-[22px]'>terms & conditions</h3>
                    </div>

                    <div className='mt-8 flex flex-col  gap-y-4 md:gap-y-6 px-1 md:px-5'>
                        <div className='flex flex-col gap-y-3 '>
                            <p className='font-bold text-[14px] sm:text-[16px] md:text-[20px] text-gray-600 '>Introduction</p>
                            <p className='text-gray-600 text-[11px] sm:text-[12px] md:text-[14px] '>
                                {/* These Terms and Conditions govern the use of SCIPL’s website and services. By accessing or using our website, you agree to comply with these terms. Please read them carefully. */}
                            </p>
                        </div>

                        <div className='flex flex-col gap-y-3'>
                            <p className='font-bold text-[14px] sm:text-[16px] md:text-[20px] text-gray-600'>The Ceiling of the auction in all Chits will be 25% of the Chit Value.</p>

                            <div className='flex flex-col gap-y-3'>
                                <p className='text-gray-600 text-[11px] sm:text-[12px] md:text-[14px]'> 25% மதிப்பீட்டுத்தொகை அனைத்து சீட்டு ஏலத்திலும் உச்சவரம்பாக (சீலிங்காக) எடுத்துக்கொள்ளப்படும்.</p>
                            </div>
                        </div>

                        <div className='flex flex-col gap-y-3'>
                            <p className='font-bold text-[14px] sm:text-[16px] md:text-[20px] text-gray-600'>5% of the Chit Value will be the foreman's Commission.</p>
                            <p className='text-gray-600 text-[11px] sm:text-[12px] md:text-[14px]'>சீட்டு மதிப்பிலிருந்து 5% தொகையை நிர்வாக கமிஷனாக எடுத்துக்கொள்ளப்படும்..</p>
                        </div>


                        <div className='flex flex-col gap-y-3'>
                            <p className='font-bold text-[14px] sm:text-[16px] md:text-[20px] text-gray-600'>Subscription amount must be paid within one week from the auction date.</p>
                            <p className='text-gray-600 text-[11px] sm:text-[12px] md:text-[14px]'>தவணைத்தொகையை ஏலத் தேதியிலிருந்து ஒரு வாரத்திற்குள் செலுத்திவிட வேண்டும். </p>

                        </div>

                        <div className='flex flex-col gap-y-3'>
                            <p className='font-bold text-[14px] sm:text-[16px] md:text-[20px] text-gray-600'>Subscriber will be allowed to participate in the auction, only if they pay their instalments upto date.</p>
                            <p className='text-gray-600 text-[11px] sm:text-[12px] md:text-[14px]'>தவணைத்தொகை பாக்கி ஏதும் இல்லாதவர்கள் மட்டுமே ஏலத்தில் கலந்து கொள்ள முடியும்.</p>
                        </div>



                        <div className='flex flex-col gap-y-3'>
                            <p className='font-bold text-[14px] sm:text-[16px] md:text-[20px] text-gray-600'>Dividents will not be allowed for delayed payment.</p>
                            <p className='text-gray-600 text-[11px] sm:text-[12px] md:text-[14px]'>கால தாமதத்தோடு பணம் செலுத்துபவருக்கு தள்ளுபடி கிடையாது.  </p>
                        </div>



                        <div className='flex flex-col gap-y-3'>
                            <p className='font-bold text-[14px] sm:text-[16px] md:text-[20px] text-gray-600'>Chit cancellation amount will be refunded only after the Termination of the Group.</p>
                            <p className='text-gray-600 text-[11px] sm:text-[12px] md:text-[14px]'>வாடிக்கையாளர் இடையில் சீட்டை ரத்து செய்தால், பணம் குறிப்பிட்ட சீட்டு முடிவு தேதிக்கு பிறகே வழங்கப்படும்.</p>
                        </div>


                        <div className='flex flex-col gap-y-3'>

                            <p className='font-bold text-[14px] sm:text-[16px] md:text-[20px] text-gray-600'> The company is not responsible for any payment given by the customer without proper receipt or acknowledgement.  </p>
                            <p className='text-gray-600 text-[11px] sm:text-[12px] md:text-[14px]'>முறையான ஆவணம் இல்லாமல் செலுத்திய பணத்திற்கு நிர்வாகம் பொறுப்பல்ல.</p>

                        </div>





                    </div>



                </div>
            </section>
        </>
    )
}

export default Terms