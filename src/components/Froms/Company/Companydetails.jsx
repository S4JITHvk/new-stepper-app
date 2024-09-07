import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const departments = [
  "Human Resources",
  "Finance",
  "Engineering",
  "Marketing",
  "Sales",
  "Customer Support",
  "Product Management",
  "Design",
  "IT"
];

const positions = [
  "Software Engineer",
  "Product Manager",
  "Designer",
  "Data Analyst",
  "HR Manager",
  "Marketing Specialist",
  "Sales Representative",
  "Customer Support Specialist",
  "Finance Analyst"
];

const FormRegistration = ({ onSubmit, initialValues, onBack }) => {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      position: initialValues.position || "",
      department: initialValues.department || "",
      dateOfJoining: initialValues.dateOfJoining ? new Date(initialValues.dateOfJoining).toISOString().split('T')[0] : "",
      salaryAmount: initialValues.salaryAmount || "",
    },
    validationSchema: Yup.object({
      position: Yup.string().required("Position is required"),
      department: Yup.string().required("Department is required"),
      dateOfJoining: Yup.date().required("Date of joining is required").nullable(),
      salaryAmount: Yup.number().typeError("Salary amount must be a number").required("Salary amount is required"),
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
        <h3 className="text-lg font-extrabold text-white">EMPLOYMENT</h3>
        <div className="w-full mt-6">
          <div className="mx-auto max-w-xs sm:max-w-sm md:max-w-md flex flex-col gap-3">

            {/* Position */}
            <div className="w-full">
              <label className="block text-sm font-medium text-white">Position</label>
              <select
                className={`w-full px-4 py-2 rounded-lg font-medium border-2 placeholder-gray-500 text-sm focus:outline-none bg-white text-black ${
                  formik.touched.position && formik.errors.position
                    ? "border-red-500"
                    : "border-transparent focus:border-black"
                }`}
                name="position"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.position}
              >
                <option value="" label="Select position" />
                {positions.map((pos) => (
                  <option key={pos} value={pos} label={pos} />
                ))}
              </select>
              {formik.touched.position && formik.errors.position ? (
                <div className="text-red-500 text-xs mt-1">
                  {formik.errors.position}
                </div>
              ) : null}
            </div>

            {/* Department */}
            <div className="w-full">
              <label className="block text-sm font-medium text-white">Department</label>
              <select
                className={`w-full px-4 py-2 rounded-lg font-medium border-2 placeholder-gray-500 text-sm focus:outline-none bg-white text-black ${
                  formik.touched.department && formik.errors.department
                    ? "border-red-500"
                    : "border-transparent focus:border-black"
                }`}
                name="department"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.department}
              >
                <option value="" label="Select department" />
                {departments.map((dept) => (
                  <option key={dept} value={dept} label={dept} />
                ))}
              </select>
              {formik.touched.department && formik.errors.department ? (
                <div className="text-red-500 text-xs mt-1">
                  {formik.errors.department}
                </div>
              ) : null}
            </div>

            {/* Date of Joining */}
            <div className="w-full">
              <label className="block text-sm font-medium text-white">Date of Joining</label>
              <input
                className={`w-full px-4 py-2 rounded-lg font-medium border-2 placeholder-gray-500 text-sm focus:outline-none bg-white text-black ${
                  formik.touched.dateOfJoining && formik.errors.dateOfJoining
                    ? "border-red-500"
                    : "border-transparent focus:border-black"
                }`}
                type="date"
                name="dateOfJoining"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.dateOfJoining}
              />
              {formik.touched.dateOfJoining && formik.errors.dateOfJoining ? (
                <div className="text-red-500 text-xs mt-1">
                  {formik.errors.dateOfJoining}
                </div>
              ) : null}
            </div>

            {/* Salary Amount */}
            <div className="w-full">
              <label className="block text-sm font-medium text-white">Salary Amount</label>
              <input
                className={`w-full px-4 py-2 rounded-lg font-medium border-2 placeholder-gray-500 text-sm focus:outline-none bg-white text-black ${
                  formik.touched.salaryAmount && formik.errors.salaryAmount
                    ? "border-red-500"
                    : "border-transparent focus:border-black"
                }`}
                type="number"
                name="salaryAmount"
                placeholder="Enter salary amount"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.salaryAmount}
              />
              {formik.touched.salaryAmount && formik.errors.salaryAmount ? (
                <div className="text-red-500 text-xs mt-1">
                  {formik.errors.salaryAmount}
                </div>
              ) : null}
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
