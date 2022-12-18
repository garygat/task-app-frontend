// import React from 'react';
import { FaCheckDouble, FaRegTrashAlt, FaEdit } from 'react-icons/fa';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { MdRestore } from 'react-icons/md';
// import TaskList from './TaskList';
// import { GrCheckboxSelected } from 'react-icons/fa';

const DeletedTask = ({ task, index, deleteTask, getSingleTask, setToComplete, returnToTasks }) => {
  return (
    <div className={task.completed ? 'task completed' : 'task'}>
      <p>
        <b>{index + 1}. </b>
        {task.name}
      </p>
      <div className='task-icons'>
        <MdRestore
          className='fs-1'
          color='#007bff'
          onClick={() => deleteTask(task._id)}
        />
      </div>
    </div>
  );
};

export default DeletedTask;
