// import React from 'react';
import { FaCheckDouble, FaRegTrashAlt, FaEdit } from 'react-icons/fa';
// import TaskList from './TaskList';
// import { GrCheckboxSelected } from 'react-icons/fa';

const DeletedTask = ({ task, index, deleteTask, getSingleTask, setToComplete }) => {
  return (
    <div className={task.completed ? 'task completed' : 'task'}>
      <p>
        <b>{index + 1}. </b>
        {task.name}
      </p>
      {/* <div className='task-icons'>
        <FaCheckDouble
          color='#52B75A'
          onClick={() => setToComplete(task)}
        />
        <FaEdit
          color='#5896CA'
          onClick={() => getSingleTask(task)}
        />
        <FaRegTrashAlt
          color='#E2353F'
          onClick={() => deleteTask(task._id)}
        />
      </div> */}
    </div>
  );
};

export default DeletedTask;
