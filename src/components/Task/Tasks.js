import React from 'react'
import TaskItem from './TaskItem'
import './Tasks.css'

const Tasks = (props)=> {
    return (
        <div className='expenses'>
            {props.items.map( task =>
                <TaskItem
                    title={task.title}
                    amount={task.amount}
                    date={task.date}
                />
            ) }
        </div>
    )
}

export default Tasks