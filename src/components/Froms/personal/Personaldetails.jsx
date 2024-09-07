import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const FormRegistration = ({ onSubmit, initialValues }) => {
  const navigate = useNavigate();
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstName: initialValues.firstName || "",
      lastName: initialValues.lastName || "",
      email: initialValues.email || "",
      phone: initialValues.phone || "",
      gender: initialValues.gender || "",
      maritalStatus: initialValues.maritalStatus || "",
      address: initialValues.address || "",
      dateOfBirth: initialValues.dateOfBirth
        ? new Date(initialValues.dateOfBirth).toISOString().split("T")[0]
        : "",
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
      maritalStatus: Yup.string().required("Marital status is required"),
      address: Yup.string().required("Address is required"),
      dateOfBirth: Yup.date()
        .required("Date of birth is required")
        .nullable(),
    }),
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  return (
    <div className="flex flex-col justify-center mt-8 items-center w-full h-full bg-[#282D2D] px-4 py-6">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-black w-full max-w-4xl p-6 rounded-md"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name */}
          <div className="flex flex-col">
            <label htmlFor="firstName" className="text-gray-300 mb-1">First Name</label>
            <input
              className={`w-full px-4 py-2 rounded-lg font-medium border-2 placeholder-gray-500 text-sm focus:outline-none bg-white text-black ${
                formik.touched.firstName && formik.errors.firstName
                  ? "border-red-500"
                  : "border-transparent focus:border-black"
              }`}
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Employee first name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
            <div className="text-red-500 text-xs mt-1">
              {formik.touched.firstName && formik.errors.firstName}
            </div>
          </div>

          {/* Last Name */}
          <div className="flex flex-col">
            <label htmlFor="lastName" className="text-gray-300 mb-1">Last Name</label>
            <input
              className={`w-full px-4 py-2 rounded-lg font-medium border-2 placeholder-gray-500 text-sm focus:outline-none bg-white text-black ${
                formik.touched.lastName && formik.errors.lastName
                  ? "border-red-500"
                  : "border-transparent focus:border-black"
              }`}
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Employee last name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
            />
            <div className="text-red-500 text-xs mt-1">
              {formik.touched.lastName && formik.errors.lastName}
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-300 mb-1">Email</label>
            <input
              className={`w-full px-4 py-2 rounded-lg font-medium border-2 placeholder-gray-500 text-sm focus:outline-none bg-white text-black ${
                formik.touched.email && formik.errors.email
                  ? "border-red-500"
                  : "border-transparent focus:border-black"
              }`}
              type="email"
              name="email"
              id="email"
              placeholder="Employee email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            <div className="text-red-500 text-xs mt-1">
              {formik.touched.email && formik.errors.email}
            </div>
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label htmlFor="phone" className="text-gray-300 mb-1">Phone</label>
            <input
              className={`w-full px-4 py-2 rounded-lg font-medium border-2 placeholder-gray-500 text-sm focus:outline-none bg-white text-black ${
                formik.touched.phone && formik.errors.phone
                  ? "border-red-500"
                  : "border-transparent focus:border-black"
              }`}
              type="tel"
              name="phone"
              id="phone"
              placeholder="Employee phone"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />
            <div className="text-red-500 text-xs mt-1">
              {formik.touched.phone && formik.errors.phone}
            </div>
          </div>

          {/* Gender */}
          <div className="flex flex-col">
            <label htmlFor="gender" className="text-gray-300 mb-1">Gender</label>
            <select
              className={`w-full px-4 py-2 rounded-lg font-medium border-2 text-sm focus:outline-none bg-white text-black ${
                formik.touched.gender && formik.errors.gender
                  ? "border-red-500"
                  : "border-transparent focus:border-black"
              }`}
              name="gender"
              id="gender"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.gender}
            >
              <option value="" disabled>
                Select gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <div className="text-red-500 text-xs mt-1">
              {formik.touched.gender && formik.errors.gender}
            </div>
          </div>

          {/* Marital Status */}
          <div className="flex flex-col">
            <label htmlFor="maritalStatus" className="text-gray-300 mb-1">Marital Status</label>
            <select
              className={`w-full px-4 py-2 rounded-lg font-medium border-2 text-sm focus:outline-none bg-white text-black ${
                formik.touched.maritalStatus && formik.errors.maritalStatus
                  ? "border-red-500"
                  : "border-transparent focus:border-black"
              }`}
              name="maritalStatus"
              id="maritalStatus"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.maritalStatus}
            >
              <option value="" disabled>
                Select marital status
              </option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="Divorced">Divorced</option>
              <option value="Widowed">Widowed</option>
            </select>
            <div className="text-red-500 text-xs mt-1">
              {formik.touched.maritalStatus && formik.errors.maritalStatus}
            </div>
          </div>

          {/* Address */}
          <div className="flex flex-col ">
            <label htmlFor="address" className="text-gray-300 mb-1">Address</label>
            <input
              className={`w-full px-4 py-2 rounded-lg font-medium border-2 placeholder-gray-500 text-sm focus:outline-none bg-white text-black ${
                formik.touched.address && formik.errors.address
                  ? "border-red-500"
                  : "border-transparent focus:border-black"
              }`}
              type="text"
              name="address"
              id="address"
              placeholder="Employee address"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.address}
            />
            <div className="text-red-500 text-xs mt-1">
              {formik.touched.address && formik.errors.address}
            </div>
          </div>

          {/* Date of Birth */}
          <div className="flex flex-col">
            <label htmlFor="dateOfBirth" className="text-gray-300 mb-1">Date of Birth</label>
            <input
              className={`w-full px-4 py-2 rounded-lg font-medium border-2 placeholder-gray-500 text-sm focus:outline-none bg-white text-black ${
                formik.touched.dateOfBirth && formik.errors.dateOfBirth
                  ? "border-red-500"
                  : "border-transparent focus:border-black"
              }`}
              type="date"
              name="dateOfBirth"
              id="dateOfBirth"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.dateOfBirth}
            />
            <div className="text-red-500 text-xs mt-1">
              {formik.touched.dateOfBirth && formik.errors.dateOfBirth}
            </div>
          </div>
        </div>

        <div className="w-full mt-6">
          <button
            type="submit"
            className="tracking-wide font-semibold bg-[#E9522C] text-gray-100 w-full py-3 rounded-lg hover:bg-[#E9522C]/90 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
          >
            <span className="text-sm">Next</span>
          </button>
        </div>
        {/* Back Button */}
        <div className="w-full mt-4">
          <button
            onClick={() => navigate(-1)}
            type="button"
            className="tracking-wide font-semibold text-[#E9522C] w-full py-3 rounded-lg border border-[#E9522C] hover:bg-[#E9522C] hover:text-gray-100 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
          >
            <span className="text-sm">Back to dashboard</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormRegistration;
