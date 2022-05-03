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
  }, [task.length]);

  return (
    <div>
      <center>
        <div style={{ margin: "50px", textAlign: "center", width: "550px" }}>
          {task.length > 0 ? (
            <DropAndDown allTask={task} />
          ) : (
            <div
              className="py-3 px-20 bg-blue-100 text-blue-900 text-sm rounded-md border border-blue-200 m"
              role="alert"
            >
              <strong> There is no data! Please add new task.</strong>
            </div>
          )}
        </div>
      </center>
    </div>
  );
};

export default Card;
