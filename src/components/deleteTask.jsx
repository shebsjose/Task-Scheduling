import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const DeleteTask = ({ handleDelete }) => {
  return (
    <FontAwesomeIcon
      icon={faTrash}
      style={{ paddingRight: "15px", marginTop: "15px", cursor: "pointer" }}
      onClick={() => handleDelete()}
    />
  );
};

export default DeleteTask;
