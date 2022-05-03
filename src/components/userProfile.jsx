const UserProfile = ({ loginUser }) => {
  return (
    <div className="bg-white p-3 shadow-sm rounded-sm">
      <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
        <span className="text-green-500">
          <svg
            className="h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </span>
        <span className="tracking-wide text-xl">About</span>
      </div>
      <div className="text-gray-700 mt-5">
        <div className="grid md:grid-cols-2 text-sm">
          <div className="grid grid-cols-2">
            <div className="px-4 py-2 font-semibold text-base">User Name</div>
            <div className="px-4 py-2 text-base">{loginUser?.userName}</div>
          </div>
          <div className="grid grid-cols-2">
            <div className="px-4 py-2 font-semibold text-base">Email</div>
            <div className="px-4 py-2 text-base">{loginUser?.email}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
