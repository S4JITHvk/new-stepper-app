import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
const degreeOptions = [
  "Bachelor's Degree",
  "Master's Degree",
  "PhD",
  "Associate's Degree",
  "Diploma",
  "Certificate"
];

const fieldOfStudyOptions = [
  "Computer Science",
  "Engineering",
  "Mathematics",
  "Business Administration",
  "Biology",
  "Physics",
  "Chemistry",
  "Economics",
  "Psychology",
  "Other"
];

const FormRegistration = ({ onSubmit }) => {
    const navigate=useNavigate()
  const formik = useFormik({
    initialValues: {
      education: [
        {
          degree: "",
          institution: "",
          fieldOfStudy: "",
          startDate: "",
          endDate: ""
        }
      ]
    },
    validationSchema: Yup.object({
      education: Yup.array().of(
        Yup.object({
          degree: Yup.string().required("Degree is required"),
          institution: Yup.string().required("Institution is required"),
          fieldOfStudy: Yup.string().required("Field of study is required"),
          startDate: Yup.date().required("Start date is required").nullable(),
          endDate: Yup.date().required("End date is required").nullable()
        })
      )
    }),
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  return (
    <div className="flex flex-col justify-center items-center w-full h-[100vh] bg-[#282D2D] px-3">
      <form
        onSubmit={formik.handleSubmit}
        className="xl:max-w-md bg-black w-full p-4 rounded-md"
      >
        <div className="w-full mt-6">
          <div className="mx-auto max-w-xs sm:max-w-sm md:max-w-md flex flex-col gap-3">
            
            {/* Education */}
            <div className="w-full">
              <h3 className="text-lg font-semibold text-white">Education</h3>
              {formik.values.education.map((edu, index) => (
                <div key={index} className="border-b border-gray-700 pb-4 mb-4">
                  
                  {/* Degree */}
                  <div className="w-full">
                    <select
                      className={`w-full px-4 py-2 rounded-lg font-medium border-2 placeholder-gray-500 text-sm focus:outline-none bg-white text-black ${
                        formik.touched.education?.[index]?.degree &&
                        formik.errors.education?.[index]?.degree
                          ? "border-red-500"
                          : "border-transparent focus:border-black"
                      }`}
                      name={`education.${index}.degree`}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={edu.degree}
                    >
                      <option value="" label="Select Degree" />
                      {degreeOptions.map((option, i) => (
                        <option key={i} value={option}>{option}</option>
                      ))}
                    </select>
                    {formik.touched.education?.[index]?.degree &&
                    formik.errors.education?.[index]?.degree ? (
                      <div className="text-red-500 text-xs mt-1">
                        {formik.errors.education[index]?.degree}
                      </div>
                    ) : null}
                  </div>

                  {/* Institution */}
                  <div className="w-full mt-2">
                    <input
                      className={`w-full px-4 py-2 rounded-lg font-medium border-2 placeholder-gray-500 text-sm focus:outline-none bg-white text-black ${
                        formik.touched.education?.[index]?.institution &&
                        formik.errors.education?.[index]?.institution
                          ? "border-red-500"
                          : "border-transparent focus:border-black"
                      }`}
                      type="text"
                      name={`education.${index}.institution`}
                      placeholder="Institution"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={edu.institution}
                    />
                    {formik.touched.education?.[index]?.institution &&
                    formik.errors.education?.[index]?.institution ? (
                      <div className="text-red-500 text-xs mt-1">
                        {formik.errors.education[index]?.institution}
                      </div>
                    ) : null}
                  </div>

                  {/* Field of Study */}
                  <div className="w-full mt-2">
                    <select
                      className={`w-full px-4 py-2 rounded-lg font-medium border-2 placeholder-gray-500 text-sm focus:outline-none bg-white text-black ${
                        formik.touched.education?.[index]?.fieldOfStudy &&
                        formik.errors.education?.[index]?.fieldOfStudy
                          ? "border-red-500"
                          : "border-transparent focus:border-black"
                      }`}
                      name={`education.${index}.fieldOfStudy`}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={edu.fieldOfStudy}
                    >
                      <option value="" label="Select Field of Study" />
                      {fieldOfStudyOptions.map((option, i) => (
                        <option key={i} value={option}>{option}</option>
                      ))}
                    </select>
                    {formik.touched.education?.[index]?.fieldOfStudy &&
                    formik.errors.education?.[index]?.fieldOfStudy ? (
                      <div className="text-red-500 text-xs mt-1">
                        {formik.errors.education[index]?.fieldOfStudy}
                      </div>
                    ) : null}
                  </div>

                  {/* Start Date */}
                  <div className="relative w-full mt-2">
                    <input
                      className={`w-full px-4 py-2 rounded-lg font-medium border-2 placeholder-transparent text-sm focus:outline-none bg-white text-black ${
                        formik.touched.education?.[index]?.startDate &&
                        formik.errors.education?.[index]?.startDate
                          ? "border-red-500"
                          : "border-transparent focus:border-black"
                      }`}
                      type="date"
                      name={`education.${index}.startDate`}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={edu.startDate}
                    />

                    {formik.touched.education?.[index]?.startDate &&
                    formik.errors.education?.[index]?.startDate ? (
                      <div className="text-red-500 text-xs mt-1">
                        {formik.errors.education[index]?.startDate}
                      </div>
                    ) : null}
                  </div>

                  {/* End Date */}
                  <div className="relative w-full mt-2">
                    <input
                      className={`w-full px-4 py-2 rounded-lg font-medium border-2 placeholder-transparent text-sm focus:outline-none bg-white text-black ${
                        formik.touched.education?.[index]?.endDate &&
                        formik.errors.education?.[index]?.endDate
                          ? "border-red-500"
                          : "border-transparent focus:border-black"
                      }`}
                      type="date"
                      name={`education.${index}.endDate`}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={edu.endDate}
                    />
                
                    {formik.touched.education?.[index]?.endDate &&
                    formik.errors.education?.[index]?.endDate ? (
                      <div className="text-red-500 text-xs mt-1">
                        {formik.errors.education[index]?.endDate}
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>

            {/* Submit Button */}
            <div className="w-full">
              <button
                type="submit"
                className="mt-4 tracking-wide font-semibold bg-[#E9522C] text-gray-100 w-full py-3 rounded-lg hover:bg-[#E9522C]/90 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
              >
                <span className="ml-2 text-sm">Next</span>
              </button>
            </div>
            <div className="w-full">
            <button
              onClick={()=>navigate('/')}
              className="mt-4 tracking-wide font-semibold bg-[#E9522C] text-gray-100 w-full py-3 rounded-lg hover:bg-[#E9522C]/90 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
            >
              <span className="ml-2 text-sm">Back to Dashboard</span>
            </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormRegistration;
