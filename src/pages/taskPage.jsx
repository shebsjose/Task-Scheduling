import Card from "../components/card";
import { useState } from "react";
import CreateTaskModel from "../components/createTaskModel";

const TaskPage = () => {

   const [open, setOpen] = useState(false)

   const handleClick = () => {
      setOpen(!open);
   }
   return (
      <div>
         <button className="w-50 mt-6 bg-indigo-600 rounded-lg px-2 py-2 text-lg text-white tracking-wide font-semibold font-sans rounded-full ml-6"
            onClick={handleClick}
         >
            <span>Create Task</span>
         </button>
         <Card />
         {open && <CreateTaskModel setOpen={setOpen} open={open} />}
      </div>

   );
};

export default TaskPage;
