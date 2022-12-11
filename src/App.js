import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TaskList from './components/TaskList';
export const URL = process.env.REACT_APP_SERVER_URL;
export const APP_NAME = process.env.REACT_APP_NAME_VAR;

function App() {
  return (
    <div className='app'>
      <div className='task-container'>
        <TaskList />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
