// # IMPORT DEPENDENCIES AND COMPONENTS
import axios from 'axios';
import TaskForm from './TaskForm';
import Task from './Task';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { URL } from '../App';
import { APP_NAME } from '../App';

import loadingImg from '../assets/loader.gif';
// import { getTask } from '../../../backend/controllers/taskController';
const appName = `${process.env.REACT_APP_NAME_VAR}`;

const TaskList = () => {
  // # STATE HOOKS
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [taskId, setTaskId] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    completed: false,
  });
  const { name } = formData;
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...FormData, [name]: value });
  };
  // # GET ALL ACTIVE TASKS -> TASKCONTROLLER
  const getTasks = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(`${URL}/api/tasks`);
      setTasks(data);
      setIsLoading(false);
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };
  // # EFFECT HOOK
  useEffect(() => {
    getTasks();
  }, []);
  // # ADD A NEW TASK -> TASKCONTROLLER
  const createTask = async (e) => {
    e.preventDefault();
    if (name === '') {
      return toast.error('Input field empty...');
    }
    try {
      await axios.post(`${URL}/api/tasks`, formData);
      setFormData({ ...formData, name: '' });
      toast.success('Task added successfully!!!');
      getTasks();
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };
  // # MOVE A TASK TO BIN  -> TASKCONTROLLER
  const deleteTask = async (id) => {
    try {
      await axios.delete(`${URL}/api/tasks/${id}`);
      getTasks();
    } catch (error) {
      toast.error(error.message);
    }
  };
  // # EFFECT HOOK
  useEffect(() => {
    const cTask = tasks.filter((task) => {
      return task.completed === true;
    });
    setCompletedTasks(cTask);
  }, [tasks]);
  // # USESTATE AND GET A SINGLE TASK
  const getSingleTask = async (task) => {
    setFormData({ name: task.name, completed: false });
    setTaskId(task._id);
    setIsEditing(true);
  };
  // # FIND AND UPDATE A TASK -> TASKCONTROLLER
  const updateTask = async (e) => {
    e.preventDefault();
    if (name === '') {
      return toast.error('Input field empty...');
    }
    try {
      await axios.put(`${URL}/api/tasks/${taskId}`, formData);
      setFormData({ ...formData, name: '' });
      setIsEditing(false);
      toast.success('Task edited successfully!!!!');
      getTasks();
    } catch (error) {
      toast.error(error.message);
    }
  };
  // # SET TASK TO COMPLETE
  const setToComplete = async (task) => {
    const newFormData = {
      name: task.name,
      completed: true,
    };
    try {
      await axios.put(`${URL}/api/tasks/${task._id}`, newFormData);
      getTasks();
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    // # RENDER
    <div>
      {/* <h1>{appName}</h1> */}
      <TaskForm
        name={name}
        handleInputChange={handleInputChange}
        createTask={createTask}
        isEditing={isEditing}
        updateTask={updateTask}
      />
      {/* CONDITON iF RECORDs > 0 */}
      {tasks.length > 0 && (
        <div className='--flex-between --pb'>
          <p>
            <b>Total Tasks: </b> {tasks.length}
          </p>
          <p>
            <b>Completed Tasks: </b> {completedTasks.length}
          </p>
        </div>
      )}

      <hr />
      {/* LOADER GIF WHILE PROCESSING */}
      {isLoading && (
        <div className='--flex-center'>
          <img
            src={loadingImg}
            alt='loading'
          />
        </div>
      )}
      {!isLoading && tasks.length === 0 ? (
        <p>No Task Found!!!</p>
      ) : (
        <>
          {tasks.map((task, index) => {
            return (
              <Task
                // # EXPORT TO TASKJS
                key={task._id}
                task={task}
                index={index}
                deleteTask={deleteTask}
                getSingleTask={getSingleTask}
                setToComplete={setToComplete}
              />
            );
          })}
        </>
      )}
    </div>
  );
};

export default TaskList;
