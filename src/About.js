import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import TaskList from './components/TaskList';
import DeletedList from './components/DeletedList';
import { FaTasks, FaInfoCircle } from 'react-icons/fa';
export const URL = process.env.REACT_APP_SERVER_URL;
export const APP_NAME = process.env.REACT_APP_NAME_VAR;
document.title = process.env.REACT_APP_DOC_TITLE;
function About() {
  return (
    <div className='app pt-3 pt-xl-5'>
      <div className='task-container text-center text-raleway'>
        <div className='py-2 px-3'>
          <h3 className='display-3 about-container'>
            <FaTasks className='display-3 text-primary pe-2' />
            {APP_NAME}
          </h3>
          <p className='fst-italic about-container'>"Makes your life easier and accomplish more today."</p>
        </div>
        {/* <p className='mx-5 lh-base pt-5'>
          <span className='text-primary'> Unote</span> is a web application it has a dedicated space for clients to
          manage their tasks. You can just simply add, edit and remove your specific task. It has a simple, no-frills
          interface built around a classic design. This task-tracking site is great for individuals, though they’ve
          recently expanded into teams and adapted to small business needs. However, they still fall short when it comes
          to team management, as you can’t assign multiple people to a single task.
        </p> */}
        <div className='members py-2 px-3 pt-5 about-container'>
          <p>Paulo Santiago</p>
          <p>John Andrei Ignacio</p>
          <p>Kyla Ysabel Nuguid</p>
          <p>Gary Andrew Gatchalian</p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default About;
