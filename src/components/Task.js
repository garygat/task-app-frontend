// import React from 'react';
import { FaCheckDouble, FaRegTrashAlt, FaEdit } from 'react-icons/fa';
// import TaskList from './TaskList';
// import { GrCheckboxSelected } from 'react-icons/fa';

const Task = ({ task, index, deleteTask, getSingleTask, setToComplete }) => {
  return (
    <div className={task.completed ? 'task completed' : 'task'}>
      <p>
        <b>{index + 1}. </b>
        {task.name}
      </p>
      <div className='task-icons'>
        <FaCheckDouble
          color='#007bff'
          onClick={() => setToComplete(task)}
        />
        <FaEdit
          color='#28356e'
          onClick={() => getSingleTask(task)}
        />
        <FaRegTrashAlt
          color='#c44f4f'
          onClick={() => deleteTask(task._id)}
        />
      </div>
    </div>
  );
};

export default Task;
