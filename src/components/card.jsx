import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTask } from "../api/taskApi";
import DropAndDown from "./dropAndDrag";

const Card = () => {
  const dispatch = useDispatch();
  const task = useSelector((state) => state.task.task);

  useEffect(() => {
    dispatch(getAllTask());
  },[]);
 
  return (
    <div>
      {task.length && <DropAndDown allTask={task}/>}
    </div>
  );
};

export default Card;
