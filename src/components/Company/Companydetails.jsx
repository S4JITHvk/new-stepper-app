import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const FormRegistration = ({onSubmit}) => {
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
      locationFounded: Yup.string().required("Location founded is required"), 
    }),
    onSubmit: (values) => {
        onSubmit(values);
      },
  });

  return (
    <div className="flex flex-col justify-center items-center w-full h-[100vh] bg-[#282D2D] px-5">
      <div className="xl:max-w-3xl bg-black w-full p-5 sm:p-10 rounded-md">
        <h1 className="text-center text-xl sm:text-3xl font-semibold text-white">
          Company Details
        </h1>
        <form onSubmit={formik.handleSubmit} className="w-full mt-8">
          <div className="mx-auto max-w-xs sm:max-w-md md:max-w-lg flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="w-full">
                <input
                  className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none ${
                    formik.touched.companyName && formik.errors.companyName
                      ? "border-red-500"
                      : "bg-[#302E30] text-white border-transparent focus:border-white"
                  }`}
                  type="text"
                  name="companyName"
                  placeholder="Company Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.companyName}
                />
                {formik.touched.companyName && formik.errors.companyName ? (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.companyName}
                  </div>
                ) : null}
              </div>

              <div className="w-full">
                <input
                  className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none ${
                    formik.touched.pincode && formik.errors.pincode
                      ? "border-red-500"
                      : "bg-[#302E30] text-white border-transparent focus:border-white"
                  }`}
                  type="text"
                  name="pincode"
                  placeholder="Enter pincode"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.pincode}
                />
                {formik.touched.pincode && formik.errors.pincode ? (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.pincode}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="w-full">
              <input
                className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none ${
                  formik.touched.email && formik.errors.email
                    ? "border-red-500"
                    : "bg-[#302E30] text-white border-transparent focus:border-white"
                }`}
                type="email"
                name="email"
                placeholder="Enter Company's email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>
            <div className="w-full">
              <input
                className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none ${
                  formik.touched.position && formik.errors.position
                    ? "border-red-500"
                    : "bg-[#302E30] text-white border-transparent focus:border-white"
                }`}
                type="text"
                name="position"
                placeholder="Enter Your Position"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.position}
              />
              {formik.touched.position && formik.errors.position ? (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.position}
                </div>
              ) : null}
            </div>
            <div className="w-full">
              <input
                className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none ${
                  formik.touched.phone && formik.errors.phone
                    ? "border-red-500"
                    : "bg-[#302E30] text-white border-transparent focus:border-white"
                }`}
                type="tel"
                name="phone"
                placeholder="Enter Company's phone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
              />
              {formik.touched.phone && formik.errors.phone ? (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.phone}
                </div>
              ) : null}
            </div>

            <div className="w-full">
              <input
                className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none ${
                  formik.touched.locationFounded && formik.errors.locationFounded
                    ? "border-red-500"
                    : "bg-[#302E30] text-white border-transparent focus:border-white"
                }`}
                type="text"
                name="locationFounded"
                placeholder="Location "
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.locationFounded}
              />
              {formik.touched.locationFounded && formik.errors.locationFounded ? (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.locationFounded}
                </div>
              ) : null}
            </div>

            <button
              type="submit"
              className="mt-5 tracking-wide font-semibold bg-[#E9522C] text-gray-100 w-full py-4 rounded-lg hover:bg-[#E9522C]/90 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
            >
              <span className="ml-3">Next</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormRegistration;
