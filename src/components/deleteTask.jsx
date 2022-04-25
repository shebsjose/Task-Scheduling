import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare} from '@fortawesome/free-solid-svg-icons';

const DeleteTask = ({ onDelete }) => {
    return ( 
           <FontAwesomeIcon icon={faTrash}  style={{paddingRight :"35px", marginTop: "15px" , cursor: "pointer" }}
                                     onClick={() => onDelete()}/> 
     );
}
 
export default DeleteTask;