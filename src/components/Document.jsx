import React, { useState } from 'react';

const Document = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    address: '',
    aadhaarNumber: '',
    panNumber: '',
    selectedPlan: '',
    bankAccountNumber: '',
    ifscCode: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleVerification = async () => {
    const { name, phoneNumber, address, aadhaarNumber, panNumber, selectedPlan, bankAccountNumber, ifscCode } = formData;

    if (!name || !phoneNumber || !address || !aadhaarNumber || !panNumber || !selectedPlan || !bankAccountNumber || !ifscCode) {
      alert('Please fill in all fields');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log('API Response:', result);
      alert('Verification started successfully! ✅');

    } catch (error) {
      console.error('Error during verification:', error);
      alert('Something went wrong! ❌');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Chit Fund Plan - Verification</h1>

        {/* Name Input */}
        <input
          type="text"
          name="name"
          placeholder="Enter Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Phone Number Input */}
        <input
          type="text"
          name="phoneNumber"
          placeholder="Enter Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        {/* Address Input */}
        <input
          type="text"
          name="address"
          placeholder="Enter Address"
          value={formData.address}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />

        {/* Aadhaar Number Input */}
        <input
          type="text"
          name="aadhaarNumber"
          placeholder="Enter Aadhaar Number"
          value={formData.aadhaarNumber}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        {/* PAN Number Input */}
        <input
          type="text"
          name="panNumber"
          placeholder="Enter PAN Number"
          value={formData.panNumber}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />

        {/* Bank Account Number Input */}
        <input
          type="text"
          name="bankAccountNumber"
          placeholder="Enter Bank Account Number"
          value={formData.bankAccountNumber}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        {/* IFSC Code Input */}
        <input
          type="text"
          name="ifscCode"
          placeholder="Enter IFSC Code"
          value={formData.ifscCode}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-rose-500"
        />

        {/* Plan Selection */}
        <select
          name="selectedPlan"
          value={formData.selectedPlan}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded mb-6 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Select Plan (Months)</option>
          <option value="20">20 Months</option>
          <option value="25">25 Months</option>
          <option value="30">30 Months</option>
          <option value="40">40 Months</option>
        </select>

        {/* Submit Button */}
        <button
          onClick={handleVerification}
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded disabled:opacity-50 cursor-pointer"
        >
          {loading ? 'Verifying...' : 'Start Verification'}
        </button>
      </div>
    </div>
  );
};

export default Document;
