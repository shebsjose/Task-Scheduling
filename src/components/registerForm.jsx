import { useState } from "react";

const RegisterForm = () => {
  const initialValues = {
    userName: "",
    email: "",
    password: "",
  };

  const [inputValues, setInputValues] = useState(initialValues);

  const handleChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
          for="username"
        >
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
          for="email"
        >
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
          for="password"
        >
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
        className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans"
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
