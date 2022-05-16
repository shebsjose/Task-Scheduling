import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../api/authApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faLock } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const [inputValues, setInputValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      await dispatch(loginUser(inputValues)).then((res) => {
        if (res) {
          navigate("/home");
        }
      });
    }
    setInputValues({
      email: "",
      password: "",
    }); 
  };

  const validate = () => {
    const input = { ...inputValues };
    let errors = {};
    let isValid = true;

    if (input.email === "") {
      isValid = false;
      errors.email = "Please enter your email Address.";
    } else {
        const emailPattern = new RegExp(
          /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
        );

        if (!emailPattern.test(input.email)) {
          isValid = false;
          errors.email = "Please enter valid email address.";
        }    
    }
    if (input.password === "") {
      isValid = false;
      errors.password = "Please enter your password.";
    } else {
      if(input.password <= 6){
        isValid = false;
        errors.password = "Please enter your password.";
      }

    setErrors(errors);
    return isValid;
  };
  }
  return (
    <form
      className="bg-white p-10 rounded-lg shadow-lg min-w-full"
      onSubmit={handleSubmit}
    >
      {/* <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200"> */}
      <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">
        Login
      </h1>
      <div className="px-5 ">
        <label className="text-gray-800 font-semibold block mt-3 text-md">
          <FontAwesomeIcon icon={faAt} />
          E-mail
        </label>
        <input
          className="border rounded-lg px-3 py-2 mt-1 mb-3 text-sm w-full bg-gray-100"
          type="email"
          name="email"
          placeholder="Enter Your Email ..."
          value={inputValues.email}
          onChange={handleChange}
        />
        {errors.email && <div className="text-red-600">{errors.email}</div>}

        <label className="text-gray-800 font-semibold block mt-3 text-md">
          <FontAwesomeIcon icon={faLock} /> Password
        </label>
        <input
          className="border rounded-lg px-3 py-2 mt-1 mb-3 text-sm w-full bg-gray-100"
          type="password"
          name="password"
          placeholder="Enter Your Email ..."
          value={inputValues.password}
          onChange={handleChange}
        />
        {errors.password && (
          <div className="text-red-600 mb-5">{errors.password}</div>
        )}
        <button
          className="mt-5 transition duration-200 bg-indigo-600 hover:bg-indigo-600 focus:bg-indigo-700 focus:shadow-sm focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
          type="submit"
        >
          <span className="inline-block mr-2">Login</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-4 h-4 inline-block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
