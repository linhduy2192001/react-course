import React from "react";
import useHandleChange from "../../hooks/useHandleChange";

const Form = () => {
  // const [fullname, setFullname] = useState("");
  // const [message, setMessage] = useState("");
  // const [country, setCountry] = useState("");

  // const handleInputChange = (e) => {
  //   setFullname(e.target.value);
  // };
  // const handleTextareaChange = (e) => {
  //   setMessage(e.target.value);
  // };
  // const handleSelectChange = (e) => {
  //   setCountry(e.target.value);

  // };
  // fullname: "",
  // email: "",
  // hobby: false,
  const { values, handleChange } = useHandleChange({
    fullname: "",
    email: "",
    hobby: false,
  });
  console.log("values", values);
  return (
    <div className="p-5">
      <form className="flex gap-x-3" autoComplete="off">
        <input
          type="text"
          name="fullname"
          onChange={handleChange}
          className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
          placeholder="Enter your name"
        />
        <input
          type="email"
          name="email"
          onChange={handleChange}
          className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
          placeholder="Enter your email"
        />
        <button type="submit" className="p-3 rounded-lg text-white bg-blue-500">
          Submit
        </button>
      </form>
      {/* <textarea
        type="text"
        name="message"
        onChange={handleTextareaChange}
        className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
        placeholder="Enter your message"
      ></textarea>
      <select onChange={handleSelectChange} name="country" id="">
        <option value="vietnam">VN</option>
        <option value="usa">USA</option>
        <option value="japan">JP</option>
      </select> */}
    </div>
  );
};

export default Form;
