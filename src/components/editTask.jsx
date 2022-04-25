import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare} from '@fortawesome/free-solid-svg-icons';

const EditTask = ({ onEdit }) => {
    return (       <FontAwesomeIcon icon={faPenToSquare} style={{paddingLeft :"35px", marginTop: "1px" , cursor: "pointer"}}
                    onClick={() => onEdit()}  
        />
     );
}
 
export default EditTask;