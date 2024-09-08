import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const degreeOptions = [
  "Bachelor's Degree",
  "Master's Degree",
  "PhD",
  "Associate's Degree",
  "Diploma",
  "Certificate",
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
  "Other",
];

const FormRegistration = ({ onSubmit, initialValues, onBack }) => {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      degree: initialValues.degree || "",
      institution: initialValues.institution || "",
      fieldOfStudy: initialValues.fieldOfStudy || "",
      startDate: initialValues.startDate
        ? new Date(initialValues.startDate).toISOString().split("T")[0]
        : "",
      endDate: initialValues.endDate
        ? new Date(initialValues.endDate).toISOString().split("T")[0]
        : "",
    },
    validationSchema: Yup.object({
      degree: Yup.string().required("Degree is required"),
      institution: Yup.string().required("Institution is required"),
      fieldOfStudy: Yup.string().required("Field of study is required"),
      startDate: Yup.date().required("Start date is required").nullable(),
      endDate: Yup.date()
        .min(Yup.ref('startDate'), "End date can't be before start date")
        .required("End date is required")
        .nullable(),
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
              {/* Degree */}
              <div className="w-full mt-2">
                <label
                  htmlFor="degree"
                  className="block text-sm font-medium text-white"
                >
                  Degree
                </label>
                <select
                  id="degree"
                  name="degree"
                  className={`w-full px-4 py-2 rounded-lg font-medium border-2 placeholder-gray-500 text-sm focus:outline-none bg-white text-black ${
                    formik.touched.degree && formik.errors.degree
                      ? "border-red-500"
                      : "border-transparent focus:border-black"
                  }`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.degree}
                >
                  <option value="" label="Select Degree" />
                  {degreeOptions.map((option, i) => (
                    <option key={i} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {formik.touched.degree && formik.errors.degree ? (
                  <div className="text-red-500 text-xs mt-1">
                    {formik.errors.degree}
                  </div>
                ) : null}
              </div>

              {/* Institution */}
              <div className="w-full mt-2">
                <label
                  htmlFor="institution"
                  className="block text-sm font-medium text-white"
                >
                  Institution
                </label>
                <input
                  id="institution"
                  name="institution"
                  type="text"
                  placeholder="Institution"
                  className={`w-full px-4 py-2 rounded-lg font-medium border-2 placeholder-gray-500 text-sm focus:outline-none bg-white text-black ${
                    formik.touched.institution && formik.errors.institution
                      ? "border-red-500"
                      : "border-transparent focus:border-black"
                  }`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.institution}
                />
                {formik.touched.institution && formik.errors.institution ? (
                  <div className="text-red-500 text-xs mt-1">
                    {formik.errors.institution}
                  </div>
                ) : null}
              </div>

              {/* Field of Study */}
              <div className="w-full mt-2">
                <label
                  htmlFor="fieldOfStudy"
                  className="block text-sm font-medium text-white"
                >
                  Field of Study
                </label>
                <select
                  id="fieldOfStudy"
                  name="fieldOfStudy"
                  className={`w-full px-4 py-2 rounded-lg font-medium border-2 placeholder-gray-500 text-sm focus:outline-none bg-white text-black ${
                    formik.touched.fieldOfStudy && formik.errors.fieldOfStudy
                      ? "border-red-500"
                      : "border-transparent focus:border-black"
                  }`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.fieldOfStudy}
                >
                  <option value="" label="Select Field of Study" />
                  {fieldOfStudyOptions.map((option, i) => (
                    <option key={i} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {formik.touched.fieldOfStudy && formik.errors.fieldOfStudy ? (
                  <div className="text-red-500 text-xs mt-1">
                    {formik.errors.fieldOfStudy}
                  </div>
                ) : null}
              </div>

              {/* Start Date */}
              <div className="w-full mt-2">
                <label
                  htmlFor="startDate"
                  className="block text-sm font-medium text-white"
                >
                  Start Date
                </label>
                <input
                  id="startDate"
                  name="startDate"
                  type="date"
                  className={`w-full px-4 py-2 rounded-lg font-medium border-2 placeholder-transparent text-sm focus:outline-none bg-white text-black ${
                    formik.touched.startDate && formik.errors.startDate
                      ? "border-red-500"
                      : "border-transparent focus:border-black"
                  }`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.startDate}
                />
                {formik.touched.startDate && formik.errors.startDate ? (
                  <div className="text-red-500 text-xs mt-1">
                    {formik.errors.startDate}
                  </div>
                ) : null}
              </div>

              {/* End Date */}
              <div className="w-full mt-2">
                <label
                  htmlFor="endDate"
                  className="block text-sm font-medium text-white"
                >
                  End Date
                </label>
                <input
                  id="endDate"
                  name="endDate"
                  type="date"
                  min={formik.values.startDate|| ""}
                  className={`w-full px-4 py-2 rounded-lg font-medium border-2 placeholder-transparent text-sm focus:outline-none bg-white text-black ${
                    formik.touched.endDate && formik.errors.endDate
                      ? "border-red-500"
                      : "border-transparent focus:border-black"
                  }`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.endDate}
                />
                {formik.touched.endDate && formik.errors.endDate ? (
                  <div className="text-red-500 text-xs mt-1">
                    {formik.errors.endDate}
                  </div>
                ) : null}
              </div>
            </div>

            {/* Submit Button */}
            <div className="w-full flex justify-between">
              <button
                type="button"
                onClick={onBack}
                className="mt-4 tracking-wide font-semibold bg-gray-600 text-gray-100 w-1/2 py-3 rounded-lg hover:bg-gray-500 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none mr-2"
              >
                <span className="ml-2 text-sm">Back</span>
              </button>

              <button
                type="submit"
                className="mt-4 tracking-wide font-semibold bg-[#E9522C] text-gray-100 w-1/2 py-3 rounded-lg hover:bg-[#E9522C]/90 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none ml-2"
              >
                <span className="ml-2 text-sm">Next</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormRegistration;
