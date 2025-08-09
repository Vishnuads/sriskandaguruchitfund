import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CompanyForm = () => {
    const [gstNumber, setGstNumber] = useState("");
    const [isGstVerified, setIsGstVerified] = useState(false);
    const [isAdharVerified, setIsAdharVerified] = useState(false);
    const [aadhaarNumber, setAadhaarNumber] = useState("");
    const [otp, setOtp] = useState("");
    const [taskId, setTaskId] = useState(null);
    const [requestId, setRequestId] = useState(null);
    const [userData, setUserData] = useState(null);
    const [formData, setFormData] = useState({
        gstData: null,
        aadhaarData: null,
    });

    const [isProcessing, setIsProcessing] = useState(false);
    const [isAdharbuttonProcessing, setIsAdharbuttonProcessing] = useState(false);
    const [userDetails, setUserDetails] = useState({
        name: "",
        phone: "",
        pan: "",
        address: "",
        plan: "20m", // Updated to reflect string plan types

    });



    //GST verification
    const handleGstVerification = async () => {

        if (isProcessing) return;
        setIsProcessing(true);

        if (!gstNumber) {
            alert("GST number is required.");
            return;
        }

        const taskId = "some_unique_task_id";


        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/verify-gst`, {
                gstin: gstNumber,
                task_id: taskId,
            });

            if (response.data.message === 'GST verification successful') {
                setIsGstVerified(true);
                const result = response.data.data?.result;
                console.log(result)

                setUserData(result);
                alert("GST Verified Successfully.");
            } else {
                alert("GST Verification failed.");
            }
        } catch (error) {
            alert("Error verifying GST.");
            console.error(error);
        }
    };





    // Aadhaar OTP Request

    const handleOtpRequest = async () => {
        if (isAdharbuttonProcessing) return;
        setIsAdharbuttonProcessing(true);

        if (!aadhaarNumber) {
            alert("Aadhaar number is required.");
            return;
        }

        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/company/request-otp`, { aadhaarNumber, });
            setTaskId(response.data.taskId);
            setRequestId(response.data.requestId);
            console.log(response.data)
            setFormData((prev) => ({ ...prev, aadhaarNumber }));
            await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating delay
            alert("OTP Sent to your Aadhaar registered mobile.");
        } catch (error) {
            alert("Error requesting OTP.");
        }
        finally {
            setIsAdharbuttonProcessing(false); // Re-enable the button after processing
        }
    };

    const handleOtpVerification = async () => {
        if (!otp) {
            alert("OTP is required.");
            return;
        }

        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/company/verify-otp`, {
                aadhaarNumber,
                otp,
                taskId,
                requestId,
                gstCompany: formData.gstData,
            });

            if (response.data.message === "OTP Verified successfully") {
                setIsAdharVerified(true);
                const result = response.data.data?.result;
                setUserData(result);
                console.log(result);;
                setFormData((prev) => ({ ...prev, aadhaarData: response.data.details }));
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



    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserDetails((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handlePayment = async () => {
        const { phone, pan, plan } = userDetails;
        const name = userData?.legal_name || "";
        const address = userData?.primary_business_address?.full_address || "";
        const district = userData?.primary_business_address?.district || '';
        const state = userData?.primary_business_address?.state_code || '';
        const adhar = userData?.user_aadhaar_number || ''

        console.log(adhar)

        if (!name || !phone || !pan || !address || district || state || adhar || !plan) {
            alert("All fields are required.");
            return;
        }

        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/create-order`, {
                name,
                phone,
                pan,
                address,
                district,
                state,
                adhar,
                plan,
            });

            const { order } = response.data;

            const options = {
                key: order.key_id,
                amount: order.amount,
                currency: order.currency,
                order_id: order.id,
                handler: function (response) {
                    alert("Payment successful!");
                },
                prefill: {
                    name,
                    phone_number: phone,
                },
            };

            const razorpay = new window.Razorpay(options);
            razorpay.open();
        } catch (error) {
            alert("Payment failed.");
            console.error(error);
        }
    };


    return (
        <div className="px-4 md:px-0 py-16 md:py-24 font-[poppins]">

            <div className="w-full md:w-[30%] mx-auto  flex justify-start mb-7">
                <Link to="/choose">
                    <button className="px-5 py-2 rounded-sm text-[12px] md:text-[14px] font-semibold  bg-black text-white"> Go back</button>
                </Link>
            </div>

            <div className="w-full md:w-[55%] mx-auto p-6 border shadow-lg rounded-lg">
                <h2 className="text-[16px] md:text-[20px] font-semibold mb-6 text-center">
                    {!isGstVerified ? "GST Verification" : "Business & Personal Details"}
                </h2>

                {!isGstVerified ? (
                    <>
                        {/* Aadhaar Verification Section */}
                        {!isAdharVerified && (
                            <div>
                                <label className="block text-sm mb-2 font-medium">Aadhaar Number</label>
                                <input
                                    type="text"
                                    value={aadhaarNumber}
                                    onChange={(e) => setAadhaarNumber(e.target.value)}
                                    className="w-full px-4 py-2 mb-4 border rounded-md text-[12px]"
                                    placeholder="Enter Aadhaar number"
                                />

                                <button
                                    onClick={handleOtpRequest}
                                    className={`w-full py-2 rounded-md text-[12px] md:text-[14px] cursor-pointer ${isAdharbuttonProcessing ? 'bg-gray-400' : 'bg-yellow-700'} text-white`}
                                    disabled={isAdharbuttonProcessing}
                                >
                                    {isAdharbuttonProcessing ? "Processing..." : "Send OTP"}
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
                                        className="w-full py-2 mt-4 bg-green-600 text-white rounded-md cursor-pointer"
                                    >
                                        Verify OTP
                                    </button>
                                )}
                            </div>
                        )}

                        {/* GST Verification Section */}
                        <div className="mt-6">
                            <label className="block text-sm mb-2 font-medium">GST Number</label>
                            <input
                                type="text"
                                value={gstNumber}
                                onChange={(e) => setGstNumber(e.target.value)}
                                className={`w-full px-4 py-2 mb-4 border rounded-md text-[12px] ${isAdharVerified ? '' : 'opacity-50 cursor-not-allowed'
                                    }`}

                                disabled={!isAdharVerified}
                                placeholder="Enter GST number"
                            />
                            <button
                                onClick={handleGstVerification}
                                className={`w-full py-2 rounded-md text-[12px] md:text-[14px] cursor-pointer ${isProcessing ? 'bg-gray-400' : 'bg-yellow-700'} text-white`}
                                disabled={isProcessing}
                            >
                                {isProcessing ? "Processing..." : "Verify GST"}
                            </button>
                        </div>
                    </>


                ) : (
                    <>
                        {/* Final code */}

                        <>


                            {/* Company Name from GST */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium mb-2 text-[14px]  md:text-[16px]">Company Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 border rounded-md bg-gray-100 text-[12px] md:text-[13px]"
                                    value={userData?.legal_name || ''}
                                    disabled
                                />
                            </div>

                            <div className="flex items-center gap-x-3 w-full mb-6">
                                {/* PAN Number */}
                                <div className=" w-full">
                                    <label className="block text-sm font-medium mb-2 text-[14px]  md:text-[16px]">Status</label>
                                    <input
                                        type="text"
                                        name="company_status"
                                        value={userData?.current_registration_status || ""}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border rounded-md text-[12px] md:text-[13px]"
                                        placeholder="Enter Status"
                                        disabled
                                    />
                                </div>

                                {/* gst number */}
                                <div className=" w-full">
                                    <label className="block text-sm font-medium mb-2 text-[14px]  md:text-[16px]">GST</label>
                                    <input
                                        type="text"
                                        name="gstin"
                                        value={userData?.gstin || ''}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border rounded-md text-[12px] md:text-[13px]"
                                        placeholder="Your name"
                                        disabled
                                    />
                                </div>

                            </div>


                            {/* Phone */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium mb-2 text-[14px]  md:text-[16px]">Phone</label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={userDetails.phone}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border rounded-md text-[12px] md:text-[13px]"
                                    placeholder="Phone number"
                                />
                            </div>


                            {/* Phone */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium mb-2 text-[14px]  md:text-[16px]">PAN Number</label>
                                <input
                                    type="text"
                                    name="pan"
                                    value={userDetails.pan}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border rounded-md text-[12px] md:text-[13px]"
                                    placeholder="PAN Number"
                                />
                            </div>

                            {/* Address */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium mb-2 text-[14px]  md:text-[16px]">Address</label>
                                <textarea
                                    name="address"
                                    value={`${userData?.primary_business_address?.full_address || ''} `}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-6 border rounded-md text-[12px] md:text-[13px]"
                                    placeholder="Business address"
                                    disabled
                                />
                            </div>



                            <div className="flex items-center gap-x-3 w-full mb-6">
                                {/* district */}
                                <div className=" w-full">
                                    <label className="block text-sm font-medium mb-2 text-[14px]  md:text-[16px]">District</label>
                                    <input
                                        type="text"
                                        name="District"
                                        value={`${userData?.primary_business_address?.district || ''} `}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border rounded-md text-[12px] md:text-[13px]"
                                        placeholder="Enter District"
                                        disabled
                                    />
                                </div>

                                {/* state */}
                                <div className=" w-full">
                                    <label className="block text-sm font-medium mb-2 text-[14px]  md:text-[16px]">State</label>
                                    <input
                                        type="text"
                                        name="State"
                                        value={`${userData?.primary_business_address?.state_code || ''} `}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border rounded-md text-[12px] md:text-[13px]"
                                        placeholder="Enter State"
                                        disabled
                                    />
                                </div>

                            </div>

                            {/* Plan Selection */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2 text-[14px]  md:text-[16px]">Select Plan</label>
                                <select
                                    name="plan"
                                    value={userDetails.plan}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border rounded-md text-[12px] md:text-[13px]"
                                >
                                    <option value="20m">20M - 1000</option>
                                    <option value="25m">25M - 2000</option>
                                    <option value="30m">30M - 4000</option>
                                    <option value="40m">40M - 6000</option>

                                </select>
                            </div>

                            {/* Payment Button */}
                            <button
                                onClick={handlePayment}
                                className="w-full py-2 bg-green-600 text-white rounded-md text-[14px] md:text-[16px]"
                            >
                                Pay Now
                            </button>
                        </>

                    </>
                )}
            </div>



        </div >
    );
};

export default CompanyForm;
