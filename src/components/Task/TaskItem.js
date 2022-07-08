import React, {useState } from 'react'
import TaskDate from './TaskDate';
import '../../App.css'
import './TaskItem.css'

const TaskItem = (props) => {

    //if a variable chnages , react does not give a damn and do not redraw

    //we use usestate to redrwa a part of code

    //import useState function, allows to define values as state, where changes to these state should reflect

    //useState is a react hook, and it should be called inside the react component

    const [title, setTitle] = useState(props.title);
    
    //return an array, first element is the variable itself, and second is an updation function

    //we use array destructuring to store these two elements in seperate cpnstants return from the usState

    const clickHandler = () => {
        setTitle('Update Title!')
        console.log(title);
    }

    return (
        <div className='todo-row'>
            <TaskDate date={props.date } />
            <div className='expense-item_description'>
                <h2 className='todo-h2'>{title }</h2>
            </div>
            <button
                className='todo-button'
                onClick={clickHandler}>Edit</button>
        </div>

    )
}

export default TaskItem
