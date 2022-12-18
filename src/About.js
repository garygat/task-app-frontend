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
    <div className='app mt-3 mt-xl-5'>
      <div className='task-container text-center text-raleway'>
        <div className='py-2 px-3'>
          <h3 className='display-3 about-container'>
            <FaTasks className='display-3 text-primary pe-2' />
            {APP_NAME}
          </h3>
          <p className='fst-italic about-container'>"Makes your life easier and accomplish more today."</p>
        </div>
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
