import { useEffect } from "react";
import image from "../assets/image/task-scheduler.png"
const Home = ({ setToken }) => {
  
  useEffect(() => {
    const token = localStorage.getItem('Token');
    setToken(token)
  }, []);

  return (
    <div>
     <img src={image}  alt="task-scheduler" style={{ marginLeft : "300px", marginTop : "50px"}} />
    </div>
  );
};

export default Home;
