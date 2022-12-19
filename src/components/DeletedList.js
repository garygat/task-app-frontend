import axios from 'axios';
import TaskForm from './TaskForm';
import DeletedTask from './DeletedTask';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { URL } from '../App';
import { APP_NAME } from '../App';
import Button from 'react-bootstrap/Button';
import loadingImg from '../assets/loader.gif';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; //
// import { getTask } from '../../../backend/controllers/taskController';
const appName = `${process.env.REACT_APP_NAME_VAR}`;

const DeletedList = () => {
  const [delTasks, setDelTasks] = useState([]);
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

  const getDeletedTasks = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(`${URL}/api/deleted`);
      setDelTasks(data);
      // console.log(data);
      // alert('tae');
      setIsLoading(false);
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };
  useEffect(() => {
    getDeletedTasks();
  }, []);
  const createDeletedTask = async (e) => {
    e.preventDefault();
    if (name === '') {
      return toast.error('Input field empty...');
    }
    try {
      await axios.post(`${URL}/api/deleted`, formData);
      setFormData({ ...formData, name: '' });
      toast.success('Task added successfully!!!');
      getDeletedTasks();
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };
  const deleteTask = async (id) => {
    try {
      await axios.delete(`${URL}/api/deleted/${id}`);
      toast.success('Binned task deleted successfully!');
      getDeletedTasks();
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    const cTask = delTasks.filter((deletedTask) => {
      return deletedTask.completed === true;
    });
    setCompletedTasks(cTask);
  }, [delTasks]);
  const getSingleTask = async (task) => {
    setFormData({ name: task.name, completed: false });
    setTaskId(task._id);
    setIsEditing(true);
  };
  const updateTask = async (e) => {
    e.preventDefault();
    if (name === '') {
      return toast.error('Input field empty...');
    }
    try {
      await axios.put(`${URL}/api/deleted/${taskId}`, formData);
      setFormData({ ...formData, name: '' });
      setIsEditing(false);
      toast.success('Task edited successfully!!!');
      getDeletedTasks();
    } catch (error) {
      toast.error(error.message);
    }
  };
  const setToComplete = async (deletedTask) => {
    const newFormData = {
      name: deletedTask.name,
      completed: true,
    };
    try {
      await axios.put(`${URL}/api/deleted/${deletedTask._id}`, newFormData);
      getDeletedTasks();
    } catch (error) {
      toast.error(error.message);
    }
  };
  const returnToTasks = async (id) => {
    try {
      await axios.delete(`${URL}/api/deleted/restore/${id}`);
      toast.success('Task restored successfully!');
      getDeletedTasks();
    } catch (error) {
      toast.error(error.message);
    }
  };
  const emptyBin = async () => {
    if (delTasks.length > 0) {
      try {
        axios.post(`${URL}/api/deleted/delete`);
        await getDeletedTasks();
        toast.success('Bin Emptied!!!');
        await getDeletedTasks();
      } catch (error) {
        toast.error(error.message);
      }
    } else {
      toast.error(`Bin currently empty!!!`);
      await getDeletedTasks();
    }
  };

  // #CONFIRM DELETION MODAL
  const submit = () => {
    confirmAlert({
      title: 'Confirm Emptying Bin',
      message: 'Are you sure to do this?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => emptyBin(),
        },
        {
          label: 'No',
          // onClick: () => alert('Click No')
        },
      ],
    });
  };

  // return (
  //   <div className='container'>
  //     <button onClick={submit}>Confirm dialog</button>
  //   </div>
  // );
  return (
    <div>
      {/* <h1>{appName}</h1>
      <TaskForm
        name={name}
        handleInputChange={handleInputChange}
        createDeletedTask={createDeletedTask}
        isEditing={isEditing}
        updateTask={updateTask}
      /> */}
      {delTasks.length > 0 && (
        <div className='--flex-between --pb'>
          <p>
            <b>Total Binned Tasks: </b> {delTasks.length}
          </p>
          <p>{/* <b>Completed Tasks: </b> {completedTasks.length} */}</p>
        </div>
      )}

      <hr />
      {isLoading && (
        <div className='--flex-center'>
          <img
            src={loadingImg}
            alt='loading'
          />
        </div>
      )}
      {!isLoading && delTasks.length === 0 ? (
        <p>No Binned Tasks Found!!!</p>
      ) : (
        <>
          {delTasks.map((task, index) => {
            return (
              <DeletedTask
                key={task._id}
                task={task}
                index={index}
                deleteTask={deleteTask}
                getSingleTask={getSingleTask}
                setToComplete={setToComplete}
                returnToTasks={returnToTasks}
              />
            );
          })}
        </>
      )}
      <div class='text-center'>
        <form
          action='/deleted/delete'
          method='post'
          onSubmit="return confirm('Are you sure you wish to clear your todo list?');"
        >
          <Button
            // className='text-center fs-1 btn-danger w-100'
            id='deleteAll'
            className='btn btn-lg rounded-2 fs-3 --btn-light-blue clear w-100'
            name='delete'
            onClick={submit}
          >
            Clear
          </Button>
        </form>
      </div>
    </div>
  );
};

export default DeletedList;
