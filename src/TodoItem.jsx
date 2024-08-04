import React, { useEffect, useState } from "react";
import "./css/todoItem.css";
import { useDispatch } from "react-redux";
import { TodoRedux } from "./Redux/Store";
import { checkData, removeData } from "./Redux/Action";
import { ReduxData } from "./Utils/Crud";
export const TodoItem = ({ id, subject, content, time, completed, update, show }) => {
  const [menu, setMenu] = useState(false);
  const dispatch = useDispatch(TodoRedux);
  const { Userdata } = ReduxData();
  const handleTaskStatus = () => {
    dispatch(checkData({ id: id, username: Userdata.username }))
  };
  const menuFunc = () => {
    setMenu(!menu)
  }

  const DeleteData = (e) => {
    dispatch(removeData(e.target.parentElement.parentElement.offsetParent.id))
    console.log(e.target.parentElement.parentElement.offsetParent.id);
  }

  useEffect(() => {
    if (menu) {
      setMenu(false)
    }
  }, [show])

  let Time = `${time.hours}:${time.minutes} ${time.ampm.toUpperCase()}`
  return (
    <div id={id} className={`todo-item ${completed && "completed"} ${menu && "opened"}`}
    >
      <div className="todo-content" onClick={handleTaskStatus}>
        <p className="heading-todo">{subject}</p>
        <div className="content">{content}</div>
      </div>
      <div className="date-time">
        <span>{Time}</span>
        <div className={`menu ${menu && "open"}`}>
          {
            menu &&
            (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" onClick={update} height="25" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                  <path d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" onClick={DeleteData} height="25" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                </svg>
              </>
            )
          }
          {
            menu ? <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" onClick={menuFunc} fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" onClick={menuFunc} className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
              <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
            </svg>
          }


        </div>
      </div>
    </div>
  );
};
