// ! IMPORT DEPENDENCIES AND COMPONENTS
// import React from 'react';
import { FaCheckDouble, FaRegTrashAlt, FaEdit } from 'react-icons/fa';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { MdRestore } from 'react-icons/md';
// import TaskList from './TaskList';
// import { GrCheckboxSelected } from 'react-icons/fa';

const DeletedTask = ({ task, index, deleteTask, getSingleTask, setToComplete, returnToTasks }) => {
  return (
    // # CONDTION BORDER STYLE CSS
    <div className={task.completed ? 'task completed' : 'task'}>
      {/* SHOW BINNED TASK STRINGS */}
      <p>
        <b>{index + 1}. </b>
        {task.name}
      </p>
      {/* ICONS FROM REACT-ICONS */}
      <div className='task-icons'>
        <MdRestore
          //  # RESTORE TO ACTIVE TASKS
          className='fs-1'
          color='#007bff'
          onClick={() => returnToTasks(task._id)}
        />

        <FaRegTrashAlt
          // # PERMANENTLY DELETE
          className='fs-2'
          color='#c44f4f'
          onClick={() => deleteTask(task._id)}
        />
      </div>
    </div>
  );
};

export default DeletedTask;
