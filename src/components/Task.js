// ! IMPORT DEPENDENCIES AND COMPONENTS
// import React from 'react';
import { FaCheckDouble, FaRegTrashAlt, FaEdit } from 'react-icons/fa';
// import TaskList from './TaskList';
// import { GrCheckboxSelected } from 'react-icons/fa';

const Task = ({ task, index, deleteTask, getSingleTask, setToComplete }) => {
  return (
    // # CONDTION BORDER STYLE CSS
    <div className={task.completed ? 'task completed' : 'task'}>
      {/* SHOW BINNED TASK STRINGS */}
      <p>
        <b>{index + 1}. </b>
        {task.name}
      </p>
      <div className='task-icons'>
        <FaCheckDouble
          // # SET TASK TO COMPLETE
          color='#007bff'
          onClick={() => setToComplete(task)}
        />
        <FaEdit
          // # FINDONE AND EDIT
          color='#28356e'
          onClick={() => getSingleTask(task)}
        />
        <FaRegTrashAlt
          // # MOVE TO BIN
          color='#c44f4f'
          onClick={() => deleteTask(task._id)}
        />
      </div>
    </div>
  );
};

export default Task;
