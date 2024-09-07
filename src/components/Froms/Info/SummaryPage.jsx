import React from 'react';
import toast from 'react-hot-toast';
import Api from '../../../Api/stepperApi';
import { useNavigate } from 'react-router-dom';

export default function SummaryPage({ personalDetails, companyDetails, educationDetails, onBack, empid }) {
  const navigate = useNavigate();

  const handleFinish = async () => {
    try {
      if (empid) {
        const employeeData = {
          empid,
          personalDetails,
          companyDetails,
          educationDetails,
        };
        const response = await Api.post("/editEmployee", employeeData);
        if (response.status === 200) {
          toast.success("Successfully Updated Employee");
          navigate('/');
        } else if (response.status === 400) {
          toast.error(response.data.message);
        }
      } else {
        const employeeData = {
          personalDetails,
          companyDetails,
          educationDetails,
        };
        const response = await Api.post("/addEmployee", employeeData);
        if (response.status === 201) {
          toast.success("Successfully Added Employee");
          navigate('/');
        } else if (response.status === 400) {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.error("Error adding employee:", error);
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
          <p className="text-gray-200 mb-1 sm:mb-2">
            <span className="font-semibold">Name:</span> {personalDetails.firstName} {personalDetails.lastName}
          </p>
          <p className="text-gray-200 mb-1 sm:mb-2">
            <span className="font-semibold">Email:</span> {personalDetails.email}
          </p>
          <p className="text-gray-200 mb-1 sm:mb-2">
            <span className="font-semibold">Phone:</span> {personalDetails.phone}
          </p>
          <p className="text-gray-200 mb-1 sm:mb-2">
            <span className="font-semibold">Gender:</span> {personalDetails.gender}
          </p>
          <p className="text-gray-200 mb-1 sm:mb-2">
            <span className="font-semibold">Address:</span> {personalDetails.address}
          </p>
          <p className="text-gray-200 mb-1 sm:mb-2">
            <span className="font-semibold">Date of Birth:</span> {personalDetails.dateOfBirth}
          </p>
          <p className="text-gray-200 mb-1 sm:mb-2">
            <span className="font-semibold">Marital Status:</span> {personalDetails.maritalStatus}
          </p>
        </div>

        {/* Education Details Section */}
        <div className="w-full sm:w-1/3 bg-[#1C1C1C] p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl">
          <h3 className="text-xl font-extrabold mb-3 sm:text-2xl text-[#E9522C]">
            EDUCATION DETAILS
          </h3>
          <div className="mb-4">
            <p className="text-gray-200 mb-1 sm:mb-2">
              <span className="font-semibold">Degree:</span> {educationDetails.degree}
            </p>
            <p className="text-gray-200 mb-1 sm:mb-2">
              <span className="font-semibold">Institution:</span> {educationDetails.institution}
            </p>
            <p className="text-gray-200 mb-1 sm:mb-2">
              <span className="font-semibold">Field of Study:</span> {educationDetails.fieldOfStudy}
            </p>
            <p className="text-gray-200 mb-1 sm:mb-2">
              <span className="font-semibold">Start Date:</span> {educationDetails.startDate}
            </p>
            <p className="text-gray-200">
              <span className="font-semibold">End Date:</span> {educationDetails.endDate}
            </p>
          </div>
        </div>

        {/* Employment Details Section */}
        <div className="w-full sm:w-1/3 bg-[#1C1C1C] p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl">
          <h3 className="text-xl font-extrabold mb-3 sm:text-2xl text-[#E9522C]">
            EMPLOYMENT DETAILS
          </h3>
          <p className="text-gray-200 mb-1 sm:mb-2">
            <span className="font-semibold">Position:</span> {companyDetails.position}
          </p>
          <p className="text-gray-200 mb-1 sm:mb-2">
            <span className="font-semibold">Department:</span> {companyDetails.department}
          </p>
          <p className="text-gray-200 mb-1 sm:mb-2">
            <span className="font-semibold">Date of Joining:</span> {companyDetails.dateOfJoining}
          </p>
          <p className="text-gray-200 mb-1 sm:mb-2">
            <span className="font-semibold">Salary Amount:</span> {companyDetails.salaryAmount} {companyDetails.salaryCurrency}
          </p>
        </div>
      </div>

      {/* Finish Button */}
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
          className="mt-4 tracking-wide font-semibold bg-[#E9522C] text-gray-100 w-1/2 py-3 rounded-lg hover:bg-[#E9522C]/90 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none ml-2"
        >
          <span className="ml-2 text-sm">Submit</span>
        </button>
      </div>
    </div>
  );
}
