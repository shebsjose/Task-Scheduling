const ListBox = ({ users, select, setSelect }) => {
  const handleChange = (event) => {
    setSelect(event.target.value);
  };
  
  return (
    <div className="relative mt-5">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        Select User
      </label>
      <select
        className="block appearance-none w-max bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        value={select}
        onChange={handleChange}
      >
        <option value="" >Please select user</option>
        {users.map((user) => (
          <option key={user._id} value={user.userName}>
            {user.userName}
          </option>
        ))}
      </select>
      <div className="mt-6 pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
};

export default ListBox;
