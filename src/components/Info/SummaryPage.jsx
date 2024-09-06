import React from 'react';
import toast from 'react-hot-toast';
export default function SummaryPage({ personalDetails, companyDetails, onSubmit }) {
  const handleFinish = () => {
    onSubmit();
    toast.success("Successfully Completed....");
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-[#282D2D] px-4 py-6 text-white">
      <h2 className="text-2xl font-semibold mb-4 sm:text-3xl">Hi {personalDetails.firstName} {personalDetails.lastName},</h2>
      <p className="text-lg mb-6 sm:text-xl">
        You have successfully completed the form. We are happy to see you working on the 
        <span className="font-semibold"> {companyDetails.companyName} company.</span>
     
      </p>

      <div className="flex flex-col gap-6 w-full max-w-5xl mb-6 sm:flex-row">
        <div className="w-full bg-[#1C1C1C] p-4 rounded-lg shadow-md flex-1 sm:p-6">
          <h3 className="text-xl font-semibold mb-3 sm:text-2xl">PERSONAL DETAILS</h3>
          <p className="text-gray-400 mb-1 sm:mb-2"><span className="font-semibold">First Name:</span> {personalDetails.firstName} {personalDetails.lastName}</p>
          <p className="text-gray-400 mb-1 sm:mb-2"><span className="font-semibold">Email:</span> {personalDetails.email}</p>
          <p className="text-gray-400 mb-1 sm:mb-2"><span className="font-semibold">Phone:</span> {personalDetails.phone}</p>
          <p className="text-gray-400 mb-1 sm:mb-2"><span className="font-semibold">Gender:</span> {personalDetails.gender}</p>
          <p className="text-gray-400 mb-1 sm:mb-2"><span className="font-semibold">Address:</span> {personalDetails.address}</p>
          <p className="text-gray-400"><span className="font-semibold">Dob:</span> {personalDetails.dob}</p>
        </div>

        <div className="w-full bg-[#1C1C1C] p-4 rounded-lg shadow-md flex-1 sm:p-6">
          <h3 className="text-xl font-semibold mb-3 sm:text-2xl">COMPANY DETAILS</h3>
          <p className="text-gray-400 mb-1 sm:mb-2"><span className="font-semibold">Company Name:</span> {companyDetails.companyName}</p>
          <p className="text-gray-400 mb-1 sm:mb-2"><span className="font-semibold">Company Email:</span> {companyDetails.email}</p>
          <p className="text-gray-400 mb-1 sm:mb-2"><span className="font-semibold">Company Phone:</span> {companyDetails.phone}</p>
          <p className="text-gray-400 mb-1 sm:mb-2"><span className="font-semibold">Location:</span> {companyDetails.locationFounded}</p>
          <p className="text-gray-400 mb-1 sm:mb-2"><span className="font-semibold">Pincode:</span> {companyDetails.pincode}</p>
        </div>
      </div>

      <button
        className="mt-6 px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 sm:px-6 sm:py-3"
        onClick={handleFinish}
      >
        Finish
      </button>
    </div>
  );
}
