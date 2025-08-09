import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaPlus, FaMinus } from "react-icons/fa6";

const Faq = () => {
  const [open, setOpen] = useState(null);

  const handleOpen = (value) => {
    setOpen(open === value ? null : value);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-transparent md:pt-6 md:px-6 w-full md:w-[70%] mx-auto font-[poppins]">
      <div className="grid grid-cols-1 md:grid-cols-1 gap-x-14 gap-y-3 md:gap-y-6">

        {[
          {
            question: "1. What types of savings schemes does Sri Skanda Guru offer?",
            answer:
              'We provide flexible chit fund schemes, including daily, weekly, and monthly savings plans, catering to different financial needs.',
          },
          {
            question: "2. How does the instant fund access feature work?",
            answer:
              "Our members can access funds instantly during emergencies, ensuring quick financial support without delays.",
          },
          {
            question: "3. Where are Sri Skanda Guru’s branches located?",
            answer:
              "We have branches in Porur, Pallavaram, Chengalpet, Pondicherry, Vellore, Coimbatore, Cuddalore, and Nellore for easy accessibility.",
          },
          {
            question: "4. Who can join Sri Skanda Guru's chit fund schemes?",
            answer:
              "Anyone looking for a secure and structured savings plan can join, including salaried individuals, business owners, and daily wage earners.",
          },
          {
            question: "5. Is my financial commitment safe with Sri Skanda Guru?",
            answer:
              "Yes, we are government approved company operating with transparency and reliability, ensuring secure savings and guaranteed returns for all our members.",
          },

        ].map((item, index) => (

          <div
            key={index}
            data-aos="fade-down-left"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <div
              className="bg-[#fcfcfc] drop-shadow-xs border border-white  rounded-md cursor-pointer"
              onClick={() => handleOpen(index)}
            >
              <div className="flex justify-between items-center font-yoonche text-[10px] sm:text-[14px] font-semibold md:text-[16px] text-gray-700  capitalize  px-6 py-6  ">
                {item.question}
                {open === index ? <FaMinus className="text-[10px] md:text-[16px]" /> : <FaPlus className="text-[10px] md:text-[16px]" />}

              </div>

              {open === index && (
                <div className="font-normal text-blue-gray-800 rounded-sm px-6 mt-5 font-[Nunito]">
                  <p className="text-gray-800 text-[10px] sm:text-[13px] md:text-[16px]  font-normal pb-3">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
