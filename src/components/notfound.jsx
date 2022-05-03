import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div
      className="flex items-center justify-center bg-white py-0"
      style={{ marginTop: "90px" }}
    >
      <div className="flex flex-col">
        <div className="flex flex-col items-center">
          <div className="text-indigo-500 font-bold text-7xl py-0">404</div>

          <div className="font-bold text-2xl xl:text-5xl lg:text-6xl md:text-5xl mt-10">
            This page does not exist
          </div>

          <div className="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-8">
            The page you are looking for could not be found.
          </div>
          <button
            className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-indigo bg-indigo-600 active:bg-indigo-600 hover:bg-indigo-700"
            style={{ marginTop: "35px" }}
            onClick={() => navigate("/home")}
          >
            Back to homepage
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
