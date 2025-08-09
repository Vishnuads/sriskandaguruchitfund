import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        scheme: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false); // New state for button disable

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        console.log("Button Clicked!");
        console.log("Form Data:", formData);

        try {
            await fetch(
                "https://script.google.com/macros/s/AKfycbyztJSueh3YLHbTrvySCKco_yVV6EqoAxTDqj6Y7V6yTNGI2Y1dnvkeYu1VvYsifSx5/exec",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    mode: "no-cors",  // ?? Fix CORS issue
                    body: JSON.stringify(formData),
                }
            );

            toast.success("Email Sent Successfully");
            setFormData({
                name: "",
                email: "",
                phone: "",
                scheme: "",
                message: "",
            });
        } catch (error) {
            toast.error("Something went wrong! Try again.");
        }

        setIsSubmitting(false);
    };

    return (
        <section>
            <div className="flex items-center justify-center md:p-12">
                <div className="mx-auto w-full max-w-[550px] bg-gradient-to-b from-white to-slate-50 p-6 rounded-lg shadow-lg">
                    <form onSubmit={handleSubmit}>
                        <div className="-mx-3 flex flex-wrap">
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-8">
                                    <label htmlFor="name" className="mb-3 block text-[12px] md:text-[15px] font-semibold text-[#000000]">
                                        Your Name
                                    </label>
                                    <input type="text" name="name" id="name" placeholder="Your Name"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-[11px] md:text-[14px] font-medium text-[#6B7280] outline-none focus:border-[#deb037] focus:shadow-md"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-8">
                                    <label htmlFor="email" className="mb-3 block text-[12px] md:text-[15px] font-semibold text-[#000000]">
                                        Email Address
                                    </label>
                                    <input type="email" name="email" id="email" placeholder="Your Email"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-[11px] md:text-[14px] font-medium text-[#6B7280] outline-none focus:border-[#deb037] focus:shadow-md"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="w-full">
                            <div className="mb-8">
                                <label htmlFor="phone" className="mb-3 block text-[12px] md:text-[15px] font-semibold text-[#000000]">
                                    Phone Number
                                </label>
                                <input type="tel" name="phone" id="phone" placeholder="Your Phone Number"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-[11px] md:text-[14px] font-medium text-[#6B7280] outline-none focus:border-[#deb037] focus:shadow-md"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="mb-8">
                            <label htmlFor="scheme" className="mb-3 block text-[12px] md:text-[15px] font-semibold text-[#000000]">
                                Type of Schemes
                            </label>
                            <select name="scheme" id="scheme"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-[11px] md:text-[14px] font-medium text-[#6B7280] outline-none focus:border-[#deb037] focus:shadow-md"
                                value={formData.scheme}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Schemes</option>
                                <option value="20 Months">20 Months</option>
                                <option value="25 Months">25 Months</option>
                                <option value="30 Months">30 Months</option>
                                <option value="40 Months">40 Months</option>
                            </select>
                        </div>

                        <div className="mb-4 md:mb-8">
                            <label htmlFor="message" className="mb-3 block text-[12px] md:text-[15px] font-semibold text-[#000000]">
                                Your Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                placeholder="Describe your Message"
                                rows="3"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-6 px-6 text-[11px] md:text-[14px] font-medium text-[#6B7280] outline-none focus:border-[#deb037] focus:shadow-md"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            >
                            </textarea>
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`hover:shadow-form rounded-md bg-gradient-to-tr from-[#9b3440] to-[#ead076] from-30% cursor-pointer hover:scale-105 duration-500 py-2 md:py-3 px-8 md:px-14 text-center text-[12px] md:text-[14px] font-semibold text-white outline-none ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}>
                                {isSubmitting ? "Submitting..." : "Save Now"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Form;
