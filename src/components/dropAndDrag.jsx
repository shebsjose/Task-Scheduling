import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { v4 as uuid } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeTaskStatus,deleteTask,getAllTask } from "../api/taskApi";

const DropAndDown = ({ allTask }) => {
  useEffect(() => {
     dispatch(getAllTask());
  },[]);
 
  const dispatch = useDispatch();
  const [columns, setColumns] = useState({
    [uuid()]: {
      name: "Requested",
      items: allTask.filter(item => item.taskStatus === "requested"),
    },
    [uuid()]: {
      name: "To do",
      items: allTask.filter(item => item.taskStatus === "todo")
    },
    [uuid()]: {
      name: "In Progress",
      items: allTask.filter(item => item.taskStatus === "progress"),
    },
    [uuid()]: {
      name: "Done",
      items: allTask.filter(item => item.taskStatus === "done"),
    },
  });

  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);

      if(removed.taskStatus === "requested") {
        if(destColumn.name === "To do"){
          removed.taskStatus = "todo";
          dispatch(changeTaskStatus(removed));
        }
        if(destColumn.name === "In Progress"){
          removed.taskStatus = "progress";
          dispatch(changeTaskStatus(removed));
        }
        if(destColumn.name === "Done"){
          removed.taskStatus = "done";
          dispatch(changeTaskStatus(removed));
        }
      }

      if(removed.taskStatus === "todo") {
        if(destColumn.name === "Requested"){
          removed.taskStatus = "requested";
          dispatch(changeTaskStatus(removed));
        }
        if(destColumn.name === "In Progress"){
          removed.taskStatus = "progress";
          dispatch(changeTaskStatus(removed));
        }
        if(destColumn.name === "Done"){
          removed.taskStatus = "done";
          dispatch(changeTaskStatus(removed));
        }
      }

      if(removed.taskStatus === "progress") {
        if(destColumn.name === "To do"){
          removed.taskStatus = "todo";
          dispatch(changeTaskStatus(removed));
        }
        if(destColumn.name === "Requested"){
          removed.taskStatus = "requested";
          dispatch(changeTaskStatus(removed));
        }
        if(destColumn.name === "Done"){
          removed.taskStatus = "done";
          dispatch(changeTaskStatus(removed));
        }
      }

      if(removed.taskStatus === "done") {
        if(destColumn.name === "To do"){
          removed.taskStatus = "todo";
          dispatch(changeTaskStatus(removed));
        }
        if(destColumn.name === "Requested"){
          removed.taskStatus = "requested";
          dispatch(changeTaskStatus(removed));
        }
        if(destColumn.name === "In Progress"){
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
  
  const handleDelete = (id) =>{
    console.log(id);
   dispatch(deleteTask(id));
  }

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
              <h2>{column.name}</h2>
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
                        {column.items.map((item, index) => {
                          return (
                            <Draggable
                              key={item._id}
                              draggableId={item._id}
                              index={index}
                            >
                              {(provided, snapshot) => {
                                return (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
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
                                  >
                                    Task : {item.description}
                                    <p> Assigned User : {item.user}</p>
                                    <FontAwesomeIcon icon={faTrash}  style={{paddingRight :"35px", marginTop: "15px" , cursor: "pointer" }}
                                     onClick={() => handleDelete(item.id)}/> 
                                    <FontAwesomeIcon icon={faPenToSquare} style={{paddingLeft :"35px", marginTop: "1px" , cursor: "pointer"}}/>
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
