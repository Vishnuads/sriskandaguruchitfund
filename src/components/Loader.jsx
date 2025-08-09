import React, { useState, useEffect } from "react";
import lodaer from '../images/0001.png'
import lodaer1 from '../images/01.mp4'


const Loader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time (e.g., fetch data or simulate delay)
        const timer = setTimeout(() => {
            setIsLoading(false); // Hide preloader after 3 seconds
        }, 4000);

        return () => clearTimeout(timer); // Clean up the timer
    }, []);

    if (!isLoading) {
        return null; // Do not render preloader when loading is complete
    }

    return (
        <div className="fixed inset-0 bg-white  flex items-center justify-center z-50">
            {/* <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div> */}

            <div className="flex justify-center items-center">
                {/* <img src={lodaer} alt="loader" className="w-80 md:w-96  " /> */}

                <video autoPlay loop muted className="w-[50%] md:w-[30%] ">
                    <source src={lodaer1} type="video/mp4" />
                </video>
            </div>

        </div>
    );
};

export default Loader;
