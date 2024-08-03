import React from 'react'
import { Todo } from './Todo'
import "./css/container.css"
const Container = () => {
    return (
        <div className="container">
            <div className="cardTop">
                
            </div>
            <div className="cardBody">
                <Todo />
            </div>
        </div>
    )
}

export default Container