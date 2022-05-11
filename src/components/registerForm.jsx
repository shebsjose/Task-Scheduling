import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../api/authApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const initialValues = {
    userName: "",
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
      await dispatch(registerUser(inputValues)).then((res) => {
        if (res) {
          navigate("/login");
        }
      });
    }
  };

  const validate = () => {
    const input = { ...inputValues };
    let errors = {};
    let isValid = true;
    console.log(input.userName.length);
    if (input.userName === "") {
      isValid = false;
      errors.userName = "Please enter User Name";
    } else if (input.userName.length > 8) {
      isValid = false;
      errors.userName = "Name cannot exceed 8 characters";
    }

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
      if (input.password <= 6) {
        isValid = false;
        errors.password = "Please enter your password.";
      }             
    }

    setErrors(errors);
    return isValid;
  };
  return (
    <form
      className="bg-white p-10 rounded-lg shadow-lg min-w-full"
      onSubmit={handleSubmit}
    >
      <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">
        Registration
      </h1>
      <div>
        <label
          className="text-gray-800 font-semibold block my-3 text-md"
          htmlFor="username"
        >
          {" "}
          <FontAwesomeIcon icon={faUser} />
          Username
        </label>
        <input
          className="border rounded-lg px-3 py-2 mt-1 mb-3 text-sm w-full bg-gray-100"
          type="text"
          id="username"
          name="userName"
          placeholder="Enter Your Name ...."
          value={inputValues.userName}
          onChange={handleChange}
        />
      </div>
        {errors.userName && (
          <div className="text-red-600">{errors.userName}</div>
        )}
      <div>
        <label
          className="text-gray-800 font-semibold block my-3 text-md"
          htmlFor="email"
        >
          <FontAwesomeIcon icon={faAt} />
          Email
        </label>
        <input
          className="border rounded-lg px-3 py-2 mt-1 mb-3 text-sm w-full bg-gray-100"
          type="email"
          id="email"
          name="email"
          placeholder="Enter Your Email ..."
          value={inputValues.email}
          onChange={handleChange}
        />
      </div>
        {errors.email && <div className="text-red-600">{errors.email}</div>}
      <div>
        <label
          className="text-gray-800 font-semibold block my-3 text-md"
          htmlFor="password"
        >
          {" "}
          <FontAwesomeIcon icon={faLock} />
          Password
        </label>
        <input
          className="border rounded-lg px-3 py-2 mt-1 mb-3 text-sm w-full bg-gray-100"
          type="password"
          id="password"
          name="password"
          placeholder="Enter the Password..."
          value={inputValues.password}
          onChange={handleChange}
        />
      </div>
      {errors.password && <div className="text-red-600">{errors.password}</div>}
      <button
        type="submit"
        className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans "
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
