import React, { useState, useEffect } from "react";
import "./stepper.css";
import { TiTick } from "react-icons/ti";
import PersonalDetailsForm from "../personal/Personaldetails";
import CompanyDetailsForm from "../Company/Companydetails";
import Educationpage from "../Education/Educationdetails";
import SummaryPage from "../Info/SummaryPage";
import { useLocation } from "react-router-dom";

const Stepper = () => {
  const location = useLocation();
  const { state } = location;
  const steps = ["PERSONAL", "EDUCATION", "EMPLOYMENT"];
  const [activeStep, setActiveStep] = useState(0);
  const [personalDetails, setPersonalDetails] = useState({});
  const [companyDetails, setCompanyDetails] = useState({});
  const [educationDetails, setEducationDetails] = useState({});
  const [empid, setEmpid] = useState(null);
  useEffect(() => {
    if (state) {
      setPersonalDetails(state?.employee.personalDetails || {});
      setCompanyDetails(state?.employee.employment || {});
      setEducationDetails(state?.employee.education || {});
      setEmpid(state?.employee?._id)
    }
  }, [state]);

  const handleFormSubmit = (data) => {
    if (activeStep === 0) {
      setPersonalDetails(data);
    } else if (activeStep === 1) {
      setEducationDetails(data);
    } else if (activeStep === 2) {
      setCompanyDetails(data);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <PersonalDetailsForm
            onSubmit={handleFormSubmit}
            initialValues={personalDetails}
          />
        );
      case 1:
        return (
          <Educationpage
            onSubmit={handleFormSubmit}
            initialValues={educationDetails}
            onBack={handleBack}
          />
        );
      case 2:
        return (
          <CompanyDetailsForm
            onSubmit={handleFormSubmit}
            initialValues={companyDetails}
            onBack={handleBack}
          />
        );
      case 3:
        return (
          <SummaryPage
            personalDetails={personalDetails}
            companyDetails={companyDetails}
            educationDetails={educationDetails}
            empid={empid}
            onBack={handleBack}
          />
        );
      default:
        return "Unknown step";
    }
  };

  return (
    <div className="flex flex-col justify-center items-center bg-[#282D2D] min-h-screen ">
      {/* Stepper */}
      <div className="flex space-x-4 mt-16 -mb-12">
        {steps.map((step, i) => (
          <div
            key={i}
            className={`step-item ${activeStep === i ? "active" : ""} ${
              i < activeStep ? "complete" : ""
            }`}
          >
            <div className="step">
              {i < activeStep ? <TiTick size={24} /> : i + 1}
            </div>
            <p className="text-gray-100 font-extrabold">{step}</p>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="w-full max-w-4xl flex-grow">
        {getStepContent(activeStep)}
      </div>
    </div>
  );
};

export default Stepper;
