import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { v4 as uuid } from "uuid";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeTaskStatus, deleteTask } from "../api/taskApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import DeleteTask from "./deleteTask";
import EditTask from "./editTask";

const DropAndDown = ({ allTask }) => {
  useEffect(() => {
    setColumns({
      [uuid()]: {
        name: "Requested",
        items: allTask.filter((item) => item.taskStatus === "requested"),
      },
      [uuid()]: {
        name: "To do",
        items: allTask.filter((item) => item.taskStatus === "todo"),
      },
      [uuid()]: {
        name: "In Progress",
        items: allTask.filter((item) => item.taskStatus === "progress"),
      },
      [uuid()]: {
        name: "Done",
        items: allTask.filter((item) => item.taskStatus === "done"),
      },
    });
  }, [allTask]);

  const dispatch = useDispatch();
  const [columns, setColumns] = useState({});

  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);

      if (removed.taskStatus === "requested") {
        if (destColumn.name === "To do") {
          removed.taskStatus = "todo";
          dispatch(changeTaskStatus(removed));
        }
        if (destColumn.name === "In Progress") {
          removed.taskStatus = "progress";
          dispatch(changeTaskStatus(removed));
        }
        if (destColumn.name === "Done") {
          removed.taskStatus = "done";
          dispatch(changeTaskStatus(removed));
        }
      }

      if (removed.taskStatus === "todo") {
        if (destColumn.name === "Requested") {
          removed.taskStatus = "requested";
          dispatch(changeTaskStatus(removed));
        }
        if (destColumn.name === "In Progress") {
          removed.taskStatus = "progress";
          dispatch(changeTaskStatus(removed));
        }
        if (destColumn.name === "Done") {
          removed.taskStatus = "done";
          dispatch(changeTaskStatus(removed));
        }
      }

      if (removed.taskStatus === "progress") {
        if (destColumn.name === "To do") {
          removed.taskStatus = "todo";
          dispatch(changeTaskStatus(removed));
        }
        if (destColumn.name === "Requested") {
          removed.taskStatus = "requested";
          dispatch(changeTaskStatus(removed));
        }
        if (destColumn.name === "Done") {
          removed.taskStatus = "done";
          dispatch(changeTaskStatus(removed));
        }
      }

      if (removed.taskStatus === "done") {
        if (destColumn.name === "To do") {
          removed.taskStatus = "todo";
          dispatch(changeTaskStatus(removed));
        }
        if (destColumn.name === "Requested") {
          removed.taskStatus = "requested";
          dispatch(changeTaskStatus(removed));
        }
        if (destColumn.name === "In Progress") {
          removed.taskStatus = "progress";
          dispatch(changeTaskStatus(removed));
        }
      }

      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };

  const handleDelete = (task) => {
    dispatch(deleteTask(task));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100%",
        marginTop: "30px",
      }}
    >
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              key={columnId}
            >
              <h2>
                {column.name} : {column.items.length || 0}
              </h2>
              <div style={{ margin: 8 }}>
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          background: snapshot.isDraggingOver
                            ? "lightblue"
                            : "#bdc6ed",
                          padding: 4,
                          width: 280,
                          minHeight: 450,
                          borderRadius: 27,
                          boxShadow: "10px 5px 5px #c0baba",
                        }}
                      >
                        {column.items.map((task, index) => {
                          return (
                            <Draggable
                              key={task._id}
                              draggableId={task._id}
                              index={index}
                            >
                              {(provided, snapshot) => {
                                return (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                      fontSize: "16px",
                                      textAlign: "center",
                                      userSelect: "none",
                                      padding: 16,
                                      margin: "27px 5px 18px",
                                      minHeight: "79px",
                                      borderRadius: "25px",
                                      backgroundColor: snapshot.isDragging
                                        ? "#6366F1"
                                        : "#4F46E5",
                                      color: "white",
                                      ...provided.draggableProps.style,
                                    }}
                                  ><div className="flex flex-col">
                                      
                                      <span
                                     
                                        style={{
                                          fontSize: "12px",
                                          float: "left",
                                        }}
                                      >
                                        <FontAwesomeIcon
                                          icon={faCalendarDays}
                                          style={{ marginRight: "8px" }}
                                        />
                                        {new Date(
                                          task.createdAt
                                        ).toDateString()}
                                      </span>
                                    </div>
                                    <div className="flex flex-col">
                                    <p className="mt-3">{task.description}</p>
                                      <p className="mt-1"> User : {task.user}</p>
                                      <span style={{ fontSize: "14px", marginTop: "4px"}}>
                                        {" "}
                                        Estimated Time : ({task.time}) Hours
                                      </span>
                                        <div
                                          style={{
                                            float: "right",
                                            fontSize: "16px",
                                          }}
                                        >
                                          <DeleteTask
                                            handleDelete={() =>
                                              handleDelete(task)
                                            }
                                          />
                                          <EditTask task={task} />
                                        </div>
                                    </div>
                                  </div>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
              </div>
            </div>
          );
        })}
      </DragDropContext>
    </div>
  );
};

export default DropAndDown;
