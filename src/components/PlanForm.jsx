import React, { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

const PlanForm = () => {
    const [userData, setUserData] = useState(null);
    const [aadhaarNumber, setAadhaarNumber] = useState("");
    const [otp, setOtp] = useState("");
    const [taskId, setTaskId] = useState(null);
    const [requestId, setRequestId] = useState(null);
    const [isVerified, setIsVerified] = useState(false);
    const [userDetails, setUserDetails] = useState({
        name: "",
        phone: "",
        address: "",
        plan: "20",
        panNumber: "",
    });

    const [isProcessing, setIsProcessing] = useState(false);


    // Aadhaar OTP Request handler
    const handleOtpRequest = async () => {
        if (isProcessing) return;
        setIsProcessing(true);

        if (!aadhaarNumber) {
            alert("Aadhaar number is required.");
            return;
        }

        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/request-otp`, { aadhaarNumber });
            setTaskId(response.data.taskId);
            setRequestId(response.data.requestId);
            console.log(response.data)
            await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating delay
            alert("OTP Sent to your Aadhaar registered mobile.");
        } catch (error) {
            alert("Error requesting OTP.");
        }
        finally {
            setIsProcessing(false); // Re-enable the button after processing
        }
    };

    // Aadhaar OTP Verification handler
    const handleOtpVerification = async () => {
        if (!otp) {
            alert("OTP is required.");
            return;
        }

        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/verify-otp`, {
                aadhaarNumber,
                otp,
                taskId,
                requestId,
            });

            if (response.data.message === "OTP Verified successfully") {
                setIsVerified(true);
                const result = response.data.data?.result;
                setUserData(result);
                console.log(result);;
                // const user = response.data.result;
                // setUserData(user);
                alert("Aadhaar verified successfully. Please proceed with your details.");
            } else {
                alert("OTP Verification failed.");
            }
        } catch (error) {
            alert("Error verifying OTP.");
        }
    };

    // Handle user details input
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserDetails({
            ...userDetails,
            [name]: value,
        });
    };

    // Handle Payment (Razorpay Order Creation)
    const handlePayment = async () => {
        const { phone, plan, panNumber } = userDetails;

        const name = userData?.user_full_name || ''
        const DOB = userData?.user_dob || ''
        const address = `${userData?.user_address?.loc || ''}, ${userData?.user_address?.state || ''}`;


        // Basic validation for the fields
        if (!name || !phone || !address || !plan || !panNumber) {
            alert("All fields are required.");
            return;
        }

        try {

            const panNumberRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

            if (!panNumber || !panNumberRegex.test(panNumber)) {
                alert("Please enter a valid PAN number.");
                return;
            }

            // const response = await axios.post("http://localhost:5000/api/verify-pan-and-create-order", {
            //     customer_pan_number: panNumber,  // Now sending the actual PAN number from the user input
            //     ...userDetails,

            // });

            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/verify-pan-and-create-order`, {
                customer_pan_number: panNumber,
                name,
                DOB,
                address,
                phone,
                plan,
            });


            const { razorpayOrder } = response.data;

            const options = {
                key: razorpayOrder.key_id,
                amount: razorpayOrder.amount,
                currency: razorpayOrder.currency,
                order_id: razorpayOrder.id,
                handler: function (response) {
                    alert("Payment successful!");
                },
                prefill: {
                    name: userDetails.name,
                    email: "", // Optional
                    phone_number: userDetails.phone,
                },
            };

            const razorpay = new window.Razorpay(options);
            razorpay.open();
        } catch (error) {
            alert("Error during payment process.");
            console.error(error);
        }
    };


    return (

        <>
            <div className="py-14 md:py-20 px-4">

                <div className="w-full md:w-[30%] mx-auto  flex justify-start">
                    <Link to="/choose">
                        <button className="px-5 py-2 rounded-sm text-[12px] md:text-[14px] font-semibold  bg-black text-white"> Go back</button>
                    </Link>
                </div>

                <div className="w-full  max-w-md mx-auto mt-8 p-4 border shadow-lg rounded-lg  font-[poppins] ">
                    <h2 className="text-[16px] md:text-2xl font-semibold mb-8 text-center ">  {!isVerified ? (<div> Aadhaar Verification </div>) : (<div>Personal Details </div>)}  </h2>

                    {!isVerified ? (
                        <div>


                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2 text-[14px] md:text-[16px]">Aadhaar Number</label>
                                <input
                                    type="text"
                                    value={aadhaarNumber}
                                    onChange={(e) => setAadhaarNumber(e.target.value)}
                                    className="w-full px-4 py-2 border rounded-md text-[12px] md:text-[13px]"
                                    placeholder="Enter your Aadhaar number"
                                />
                            </div>


                            <button
                                onClick={handleOtpRequest}
                                className={`w-full py-2 rounded-md text-[14px] md:text-[16px] ${isProcessing ? 'bg-gray-400' : 'bg-yellow-700'} text-white`}
                                disabled={isProcessing} // Disable button while processing
                            >
                                {isProcessing ? "Processing..." : "Send OTP"}  {/* Change button text while processing */}
                            </button>

                            {taskId && requestId && (
                                <div className="mt-4">
                                    <label className="block text-sm font-medium mb-2">Enter OTP</label>
                                    <input
                                        type="text"
                                        value={otp}
                                        onChange={(e) => setOtp(e.target.value)}
                                        className="w-full px-4 py-2 border rounded-md text-[12px] md:text-[13px]"
                                        placeholder="Enter the OTP sent to your mobile"
                                    />
                                </div>
                            )}

                            {otp && (
                                <button
                                    onClick={handleOtpVerification}
                                    className="w-full py-2 mt-4 bg-green-600 text-white rounded-md"
                                >
                                    Verify OTP
                                </button>
                            )}
                        </div>
                    ) : (
                        <div>

                            {/* PAN Verification */}
                            <div className="mb-4">
                                <label className="block text-sm font-semibold mb-2 text-[14px] md:text-[16px]">PAN Number</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border rounded-md text-[12px] md:text-[13px]"
                                    value={userDetails.panNumber}
                                    onChange={(e) => setUserDetails({ ...userDetails, panNumber: e.target.value })}
                                    placeholder="Enter your PAN number"
                                />
                            </div>

                            <div>

                                <div className="mb-4">
                                    <label className="block text-sm font-medium mb-2 text-[14px] md:text-[16px]">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        // value={userDetails.name}
                                        value={userData?.user_full_name || ''}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border rounded-md text-[12px] md:text-[13px]"
                                        placeholder="Enter your name"
                                        disabled
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sm font-medium mb-2 text-[14px] md:text-[16px]">DOB</label>
                                    <input
                                        type="text"
                                        name="name"
                                        // value={userDetails.name}
                                        value={userData?.user_dob || ''}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border rounded-md text-[12px] md:text-[13px]"
                                        placeholder="Enter your name"
                                        disabled
                                    />
                                </div>


                            </div>


                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2 text-[14px] md:text-[16px]">Phone</label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={userDetails.phone}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border rounded-md text-[12px] md:text-[13px]"
                                    placeholder="Enter your phone number"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2 text-[14px] md:text-[16px]">Address</label>
                                <textarea
                                    name="address"
                                    // value={userDetails.address}
                                    value={`${userData?.user_address?.loc || ''}, ${userData?.user_address?.state || ''}`}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border rounded-md text-[12px] md:text-[13px]"
                                    placeholder="Enter your address"
                                    disabled
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2 text-[14px] md:text-[16px]">Select Plan</label>
                                <select
                                    name="plan"
                                    value={userDetails.plan}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border rounded-md text-[12px] md:text-[13px]"
                                >
                                    <option value="20">20 - 1000</option>
                                    <option value="25">25 - 2000</option>
                                    <option value="30">30 - 4000</option>
                                    <option value="40">40 - 6000</option>
                                </select>
                            </div>

                            <button
                                onClick={handlePayment}
                                className="w-full py-2 bg-green-600 text-white rounded-md text-[14px] md:text-[16px]"
                            >
                                Pay Now
                            </button>
                        </div>
                    )}
                </div>

            </div>

        </>

    );
};

export default PlanForm
