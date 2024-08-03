import React, { useState } from "react";
import "./css/todoItem.css";
export const TodoItem = ({ subject, content, time, completed }) => {
  const [status, setStatus] = useState(false);

  const handleTaskStatus = () => {
    console.log("hello");
    setStatus((status) => !status);
  };

  return (
    <div
      onClick={handleTaskStatus}
      className={`todo-item ${completed && "completed"}`}
    >
      <div className="todo-content">
        <p className="heading-todo">{subject}</p>
        <div className="content">{content}</div>
      </div>
      <div className="date-time">
        <span>{time}</span>
      </div>
    </div>
  );
};
