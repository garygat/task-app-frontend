// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import TaskList from './components/TaskList';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaCheckDouble, FaRegTrashAlt, FaEdit, FaInfo } from 'react-icons/fa';
import { FaTasks, FaInfoCircle } from 'react-icons/fa';
// import { FcAbout } from 'react-icons/fc';

export const URL = process.env.REACT_APP_SERVER_URL;
export const APP_NAME = process.env.REACT_APP_NAME_VAR;

function NavBar() {
  return (
    <Navbar
      bg='light'
      expand='lg'
      className='px-5 fixed-top'
    >
      {/* <Container> */}
      <Navbar.Brand
        href='/'
        className='fs-3 text-cyan'
        id='NavBarBrand'
      >
        <FaTasks
          className='nav-logo'
          // margin='0 5px 0 0'
        />{' '}
        {' ' + APP_NAME}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ms-auto nav-link'>
          <Nav.Link
            href='/deleted'
            className='fs-3'
          >
            <FaRegTrashAlt
              color='#2e5f94'
              className='nav-bin'
            />
          </Nav.Link>
          <Nav.Link
            href='/about'
            className='fs-3'
          >
            <FaInfoCircle
              color='#2e5f94'
              className='nav-bin'
            />
          </Nav.Link>
          {/* <Nav.Link href='#link'>Link</Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
      {/* </Container> */}
    </Navbar>
  );
}

export default NavBar;
