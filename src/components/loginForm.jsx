import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../api/authApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faLock } from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from 'react-router-dom'

const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const [inputValues, setInputValues] = useState(initialValues);

  const user = useSelector((state) => state.login.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(loginUser(inputValues))
    .then((res) => {
      if(res.login){
        navigate('/home');
      }
    })
  };

  return (
    <form className="" onSubmit={handleSubmit}>
      <div className="min-h-screen-100vh bg-gray-100 flex flex-col justify-center sm:py-12">
        <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
          <h1 className="font-bold text-center text-2xl mb-5">Login</h1>
          <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
            <div className="px-5 py-7">
              <label className="font-semibold text-sm text-gray-600 pb-1 block">
                <FontAwesomeIcon icon={faAt} />
                E-mail
              </label>
              <input
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                type="email"
                name="email"
                placeholder="Enter Your Email ..."
                value={inputValues.email}
                onChange={handleChange}
              />
              <label className="font-semibold text-sm text-gray-600 pb-1 block">
                <FontAwesomeIcon icon={faLock} /> Password
              </label>
              <input
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                type="password"
                name="password"
                placeholder="Enter Your Email ..."
                value={inputValues.password}
                onChange={handleChange}
              />
              <button
                className="transition duration-200 bg-indigo-600 hover:bg-indigo-600 focus:bg-indigo-700 focus:shadow-sm focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
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
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
