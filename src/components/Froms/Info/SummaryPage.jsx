import React, { useState } from 'react';
import toast from 'react-hot-toast';
import Api from '../../../Api/stepperApi';
import { useNavigate } from 'react-router-dom';

export default function SummaryPage({ personalDetails, companyDetails, educationDetails, onBack, empid }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);  

  const handleFinish = async () => {
    try {
      setLoading(true);  
      const employeeData = {
        empid,
        personalDetails,
        companyDetails,
        educationDetails,
      };
      
      const endpoint = empid ? "/editEmployee" : "/addEmployee";
      const response = await Api.post(endpoint, employeeData);

      if ((empid && response.status === 200) || (!empid && response.status === 201)) {
        toast.success(empid ? "Successfully Updated Employee" : "Successfully Added Employee");
        navigate('/');
      } else if (response.status === 400) {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred");
      console.error("Error adding employee:", error);
    } finally {
      setLoading(false);  
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen bg-[#282D2D] px-4 py-6 text-white">
      <div className="flex flex-col gap-6 w-full max-w-5xl mb-6 sm:flex-row sm:gap-6">
        {/* Personal Details Section */}
        <div className="w-full sm:w-1/3 bg-[#1C1C1C] p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl">
          <h3 className="text-xl font-extrabold mb-3 sm:text-2xl text-[#E9522C]">
            PERSONAL DETAILS
          </h3>
          {/* Personal details display */}
          <p className="text-gray-200 mb-1 sm:mb-2">
            <span className="font-semibold">Name:</span> {personalDetails.firstName} {personalDetails.lastName}
          </p>
          <p className="text-gray-200 mb-1 sm:mb-2">
            <span className="font-semibold">Email:</span> {personalDetails.email}
          </p>
          <p className="text-gray-200 mb-1 sm:mb-2">
            <span className="font-semibold">Phone:</span> {personalDetails.phone}
          </p>
          {/* More personal details */}
        </div>

        {/* Education Details Section */}
        <div className="w-full sm:w-1/3 bg-[#1C1C1C] p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl">
          <h3 className="text-xl font-extrabold mb-3 sm:text-2xl text-[#E9522C]">
            EDUCATION DETAILS
          </h3>
          {/* Education details display */}
          <p className="text-gray-200 mb-1 sm:mb-2">
            <span className="font-semibold">Degree:</span> {educationDetails.degree}
          </p>
          <p className="text-gray-200 mb-1 sm:mb-2">
            <span className="font-semibold">Institution:</span> {educationDetails.institution}
          </p>
          {/* More education details */}
        </div>

        {/* Employment Details Section */}
        <div className="w-full sm:w-1/3 bg-[#1C1C1C] p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl">
          <h3 className="text-xl font-extrabold mb-3 sm:text-2xl text-[#E9522C]">
            EMPLOYMENT DETAILS
          </h3>
          {/* Employment details display */}
          <p className="text-gray-200 mb-1 sm:mb-2">
            <span className="font-semibold">Position:</span> {companyDetails.position}
          </p>
          <p className="text-gray-200 mb-1 sm:mb-2">
            <span className="font-semibold">Department:</span> {companyDetails.department}
          </p>
          {/* More employment details */}
        </div>
      </div>

      {/* Buttons */}
      <div className="w-full flex justify-between">
        <button
          type="button"
          onClick={onBack}
          className="mt-4 tracking-wide font-semibold bg-gray-600 text-gray-100 w-1/2 py-3 rounded-lg hover:bg-gray-500 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none mr-2"
        >
          <span className="ml-2 text-sm">Back</span>
        </button>

        <button
          onClick={handleFinish}
          disabled={loading}  
          className={`mt-4 tracking-wide font-semibold w-1/2 py-3 rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none ml-2 
          ${loading ? "bg-gray-500" : "bg-[#E9522C] hover:bg-[#E9522C]/90"} text-gray-100`}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </div>
    </div>
  );
}
