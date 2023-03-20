import React from "react";
import { useFormik } from "formik";

const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      firstname: "",
    },
    onSubmit: (values) => {
      console.log("values", values);
    },
  });
  console.log("formilk", formik);
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="p-10 w-full max-w-[500px] mx-auto"
    >
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="firstname">First Name</label>
        <input
          type="text"
          id="firstname"
          value={formik.values.firstname}
          name="firstname"
          placeholder="Enter your firstname"
          className="p-4 rounded-md border border-gray-100"
          onChange={formik.handleChange}
        />
      </div>
      <div>
        <button className="w-full bg-blue-600 text-white font-semibold p-4 rounded-lg">
          Submit
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
