import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import CreateTaskModel from "../components/createTaskModel";

const EditTask = ({ task }) => {
  const [open, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setOpen(!open);
    setIsEditing(true);
  };

  return (
    <>
      <FontAwesomeIcon
        icon={faPenToSquare}
        style={{ paddingLeft: "35px", marginTop: "1px", cursor: "pointer" }}
        onClick={() => handleEdit()}
      />
      {open && (
        <CreateTaskModel
          setOpen={setOpen}
          open={open}
          task={task}
          isEditing={isEditing}
        />
      )}
    </>
  );
};

export default EditTask;
