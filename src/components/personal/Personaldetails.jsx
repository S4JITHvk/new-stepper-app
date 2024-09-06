import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const FormRegistration = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      gender: "",
      address: "",
      dob: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phone: Yup.string()
        .matches(/^[0-9]+$/, "Phone number is not valid")
        .required("Phone number is required"),
      gender: Yup.string().required("Gender is required"),
      address: Yup.string().required("Address is required"),
      dob: Yup.date().required("Date of birth is required").nullable(),
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
        <h1 className="text-center text-lg font-semibold text-white">
          PERSONAL DETAILS
        </h1>

        <div className="w-full mt-6">
          <div className="mx-auto max-w-xs sm:max-w-sm md:max-w-md flex flex-col gap-3">
            {/* First Name and Last Name */}
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="w-full">
                <input
                  className={`w-full px-4 py-2 rounded-lg font-medium border-2 placeholder-gray-500 text-sm focus:outline-none bg-white text-black ${
                    formik.touched.firstName && formik.errors.firstName
                      ? "border-red-500"
                      : "border-transparent focus:border-black"
                  }`}
                  type="text"
                  name="firstName"
                  placeholder="Your first name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div className="text-red-500 text-xs mt-1">
                    {formik.errors.firstName}
                  </div>
                ) : null}
              </div>

              <div className="w-full">
                <input
                  className={`w-full px-4 py-2 rounded-lg font-medium border-2 placeholder-gray-500 text-sm focus:outline-none bg-white text-black ${
                    formik.touched.lastName && formik.errors.lastName
                      ? "border-red-500"
                      : "border-transparent focus:border-black"
                  }`}
                  type="text"
                  name="lastName"
                  placeholder="Your last name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div className="text-red-500 text-xs mt-1">
                    {formik.errors.lastName}
                  </div>
                ) : null}
              </div>
            </div>

            {/* Email and Phone */}
            <div className="w-full">
              <input
                className={`w-full px-4 py-2 rounded-lg font-medium border-2 placeholder-gray-500 text-sm focus:outline-none bg-white text-black ${
                  formik.touched.email && formik.errors.email
                    ? "border-red-500"
                    : "border-transparent focus:border-black"
                }`}
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 text-xs mt-1">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>

            <div className="w-full">
              <input
                className={`w-full px-4 py-2 rounded-lg font-medium border-2 placeholder-gray-500 text-sm focus:outline-none bg-white text-black ${
                  formik.touched.phone && formik.errors.phone
                    ? "border-red-500"
                    : "border-transparent focus:border-black"
                }`}
                type="tel"
                name="phone"
                placeholder="Enter your phone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
              />
              {formik.touched.phone && formik.errors.phone ? (
                <div className="text-red-500 text-xs mt-1">
                  {formik.errors.phone}
                </div>
              ) : null}
            </div>

            {/* Gender */}
            <div className="w-full">
              <select
                className={`w-full px-4 py-2 rounded-lg font-medium border-2 text-sm focus:outline-none bg-white text-black ${
                  formik.touched.gender && formik.errors.gender
                    ? "border-red-500"
                    : "border-transparent focus:border-black"
                }`}
                name="gender"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.gender}
              >
                <option value="" disabled>
                  Select your gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              {formik.touched.gender && formik.errors.gender ? (
                <div className="text-red-500 text-xs mt-1">
                  {formik.errors.gender}
                </div>
              ) : null}
            </div>

            {/* Address */}
            <div className="w-full">
              <input
                className={`w-full px-4 py-2 rounded-lg font-medium border-2 placeholder-gray-500 text-sm focus:outline-none bg-white text-black ${
                  formik.touched.address && formik.errors.address
                    ? "border-red-500"
                    : "border-transparent focus:border-black"
                }`}
                type="text"
                name="address"
                placeholder="Enter your address"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.address}
              />
              {formik.touched.address && formik.errors.address ? (
                <div className="text-red-500 text-xs mt-1">
                  {formik.errors.address}
                </div>
              ) : null}
            </div>



            {/* Date of Birth */}
            <div className="w-full">
              <input
                className={`w-full px-4 py-2 rounded-lg font-medium border-2 placeholder-gray-500 text-sm focus:outline-none bg-white text-black ${
                  formik.touched.dob && formik.errors.dob
                    ? "border-red-500"
                    : "border-transparent focus:border-black"
                }`}
                type="date"
                name="dob"
                placeholder="Select your date of birth"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.dob}
              />
              {formik.touched.dob && formik.errors.dob ? (
                <div className="text-red-500 text-xs mt-1">
                  {formik.errors.dob}
                </div>
              ) : null}
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
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormRegistration;
