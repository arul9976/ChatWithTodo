import React, { useState } from 'react'
import { TodoItem } from './TodoItem'
export const Todo = () => {
  const [data, setData] = useState([
    {
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis corporis odio assumenda ea commodi ipsum suscipit nulla adipisci unde",
      subject: "tempore ab magnam voluptatum, neque incidunt vitae. Possimus numquam laborum quidem.",
      checked: true,
      time: "10:30AM"
    },
    {
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis corporis odio assumenda ea commodi ipsum suscipit nulla adipisci unde",
      subject: "tempore ab magnam voluptatum, neque incidunt vitae. Possimus numquam laborum quidem.",
      checked: false,
      time: "01:30AM"
    },
    {
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis corporis odio assumenda ea commodi ipsum suscipit nulla adipisci unde",
      subject: "tempore ab magnam voluptatum, neque incidunt vitae. Possimus numquam laborum quidem.",
      checked: true,
      time: "11:30AM"
    }
  ]);
  return (
    <div>
      {
        data.map((item, index) => {
          return (
            <TodoItem key={index} content={item.content}
              time={item.time} subject={item.subject}
              completed={item.checked} />
          )

        })
      }
    </div>
  )
}


