import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {  registerUser } from "../api/authApi";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faLock, faUser} from '@fortawesome/free-solid-svg-icons';
import {useNavigate} from 'react-router-dom'


const RegisterForm = () => {
  const initialValues = {
    userName: "",
    email: "",
    password: "",
  };

  const [inputValues, setInputValues] = useState(initialValues);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(registerUser(inputValues))
    .then((res) => {
      if(res.register){
        navigate('/login');
      }
    })
  };

  return (
    <form
      className="bg-white p-10 rounded-lg shadow-lg min-w-full"
      onSubmit={handleSubmit}
    >
      <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">
        Form Register
      </h1>
      <div>
        <label
          className="text-gray-800 font-semibold block my-3 text-md"
          htmlFor="username"
        > <FontAwesomeIcon icon={faUser}/>
          Username
        </label>
        <input
          className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
          type="text"
          id="username"
          name="userName"
          placeholder="Enter Your Name ...."
          value={inputValues.userName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label
          className="text-gray-800 font-semibold block my-3 text-md"
          htmlFor="email"
        >
          <FontAwesomeIcon icon={faAt}/>
          Email
        </label>
        <input
          className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
          type="email"
          id="email"
          name="email"
          placeholder="Enter Your Email ..."
          value={inputValues.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label
          className="text-gray-800 font-semibold block my-3 text-md"
          htmlFor="password"
        > <FontAwesomeIcon icon={faLock}/>
          Password
        </label>
        <input
          className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
          type="password"
          id="password"
          name="password"
          placeholder="Enter the Password..."
          value={inputValues.password}
          onChange={handleChange}
        />
      </div>
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
