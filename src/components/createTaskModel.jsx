import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createTask, getAllTask } from "../api/taskApi";
import { getAllUser } from "../api/usersApi";
import ListBox from "./listBox";
import { useEffect } from "react";

const CreateTaskModel = ({ open, setOpen }) => {
  const cancelButtonRef = useRef(null);

  useEffect(() => {
    dispatch(getAllUser());
  },[]);

  const users = useSelector((state) => state.users.userTask);
  console.log({ users });

  const [description, setDescription] = useState("");
  const [select, setSelect] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useSelector((state) => state.task.user);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setDescription(e.target.value);
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createTask({ description, user:select}))
    setOpen(false);
    dispatch(getAllTask());
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title
                      as="h1"
                      className="text-lg leading-6 font-medium text-gray-900"
                    >
                     {isEditing ? "Create Your Task" : "Update Your Task"}
                    </Dialog.Title>
                    <div className="mt-2">
                      <textarea
                        className="text-sm text-gray-500 outline-none width: 367px"
                        placeholder="Please Add Your Task Here..."
                        onChange={handleChange}
                        name="description"
                        value={description}
                      ></textarea>
                    </div>
                    <ListBox
                      users={users}
                      select={select}
                      setSelect={setSelect}
                    />
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-sky-600 text-base font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 sm:ml-3 sm:w-auto sm:text-sm hover:bg-sky-700"
                  onClick={(event) => handleSubmit(event)}
                >
                  {isEditing ? "Submit" : "Update"}
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setOpen(false)}
                  // ref={cancelButtonRef}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default CreateTaskModel;
