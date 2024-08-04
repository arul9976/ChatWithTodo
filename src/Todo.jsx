import React, { useState } from 'react'
import { TodoItem } from './TodoItem'
import { ReduxData } from './Utils/Crud';
export const Todo = ({ updateData, show }) => {
  const [data, setData] = useState();

  const { TodoDatas } = ReduxData();
  return (
    <>
      {
        (TodoDatas && TodoDatas.length > 0) &&
        TodoDatas.map((item, index) => {
          return (
            <TodoItem id={item._id} key={index} content={item.message}
              time={item.TimeDate} subject={item.subject}
              completed={item.checked} update={updateData} show={show} />
          )

        })
      }
    </>

  )
}


