import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const FormRegistration = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      companyName: "",
      pincode: "",
      email: "",
      position: "",
      phone: "",
      locationFounded: "", 
    },
    validationSchema: Yup.object({
      companyName: Yup.string().required("Company name is required"),
      pincode: Yup.string().matches(/^[0-9]+$/, "Pincode is not valid").required("Pincode is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      position: Yup.string().required("Position is required"),
      phone: Yup.string().matches(/^[0-9]+$/, "Phone number is not valid").required("Phone number is required"),
      locationFounded: Yup.string().required("Location is required"), 
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
        <h1 className="text-center text-lg font-extrabold text-white">
         COMPANY DETAILS
        </h1>

        <div className="w-full mt-6">
          <div className="mx-auto max-w-xs sm:max-w-sm md:max-w-md flex flex-col gap-3">
            {/* Company Name */}
            <div className="w-full">
              <input
                className={`w-full px-4 py-2 rounded-lg font-medium border-2 placeholder-gray-500 text-sm focus:outline-none bg-white text-black ${
                  formik.touched.companyName && formik.errors.companyName
                    ? "border-red-500"
                    : "border-transparent focus:border-black"
                }`}
                type="text"
                name="companyName"
                placeholder="Enter company name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.companyName}
              />
              {formik.touched.companyName && formik.errors.companyName ? (
                <div className="text-red-500 text-xs mt-1">
                  {formik.errors.companyName}
                </div>
              ) : null}
            </div>
               {/* Position */}
               <div className="w-full">
              <input
                className={`w-full px-4 py-2 rounded-lg font-medium border-2 placeholder-gray-500 text-sm focus:outline-none bg-white text-black ${
                  formik.touched.position && formik.errors.position
                    ? "border-red-500"
                    : "border-transparent focus:border-black"
                }`}
                type="text"
                name="position"
                placeholder="Enter your position"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.position}
              />
              {formik.touched.position && formik.errors.position ? (
                <div className="text-red-500 text-xs mt-1">
                  {formik.errors.position}
                </div>
              ) : null}
            </div>

       
            {/* Email */}
            <div className="w-full">
              <input
                className={`w-full px-4 py-2 rounded-lg font-medium border-2 placeholder-gray-500 text-sm focus:outline-none bg-white text-black ${
                  formik.touched.email && formik.errors.email
                    ? "border-red-500"
                    : "border-transparent focus:border-black"
                }`}
                type="email"
                name="email"
                placeholder="Enter company's email"
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

         

            {/* Phone */}
            <div className="w-full">
              <input
                className={`w-full px-4 py-2 rounded-lg font-medium border-2 placeholder-gray-500 text-sm focus:outline-none bg-white text-black ${
                  formik.touched.phone && formik.errors.phone
                    ? "border-red-500"
                    : "border-transparent focus:border-black"
                }`}
                type="tel"
                name="phone"
                placeholder="Enter company's phone"
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

            {/* Location Founded */}
            <div className="w-full">
              <input
                className={`w-full px-4 py-2 rounded-lg font-medium border-2 placeholder-gray-500 text-sm focus:outline-none bg-white text-black ${
                  formik.touched.locationFounded && formik.errors.locationFounded
                    ? "border-red-500"
                    : "border-transparent focus:border-black"
                }`}
                type="text"
                name="locationFounded"
                placeholder="Enter location "
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.locationFounded}
              />
              {formik.touched.locationFounded && formik.errors.locationFounded ? (
                <div className="text-red-500 text-xs mt-1">
                  {formik.errors.locationFounded}
                </div>
              ) : null}
            </div>
                   {/* Pincode */}
            <div className="w-full">
              <input
                className={`w-full px-4 py-2 rounded-lg font-medium border-2 placeholder-gray-500 text-sm focus:outline-none bg-white text-black ${
                  formik.touched.pincode && formik.errors.pincode
                    ? "border-red-500"
                    : "border-transparent focus:border-black"
                }`}
                type="text"
                name="pincode"
                placeholder="Enter pincode"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.pincode}
              />
              {formik.touched.pincode && formik.errors.pincode ? (
                <div className="text-red-500 text-xs mt-1">
                  {formik.errors.pincode}
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
