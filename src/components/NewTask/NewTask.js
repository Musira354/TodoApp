import React from "react";



export const NewTask = (props) => {
    
    const saveTaskDataHandler = (enteredTaskData) => {
        const taskData = {
            ...enteredTaskData,
            id: Math.random().toString()
        };
    }
    
    return (
        <div>
            
        </div>
    )
}
