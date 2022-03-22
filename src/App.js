import './App.css';
import  { useEffect, useState } from 'react';
import axios from  'axios';
import UserForm from './components/UsersForm';
import UserList from './components/UsersList';
// import {
//   Container, Row, Col, Form, Input, Button, Navbar, Nav,
//   NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
//   DropdownToggle, DropdownMenu, DropdownItem
// } from 'react-bootstrap';
import ThemeProvider from 'react-bootstrap/ThemeProvider';



function App() {
  const [ users , setUsers ] = useState([]);
  const [ editeUser , setEditeUser ] = useState(null);

  useEffect(() => {
    getUsers();
  },[]);
  //GET ALL USERS
  const getUsers = () => {
    axios.get('https://users-crud1.herokuapp.com/users/')
    .then(res => {
      console.log(res.data);
      setUsers(res.data)
    })
  };
  //ADD NEW USERS
  const addUser = newUser => {
    axios.post('https://users-crud1.herokuapp.com/users/', newUser)
    .then(() => getUsers())
  };
  //DELETE USER
  const deleteUser = userDelete => {
    axios.delete(`https://users-crud1.herokuapp.com/users/${userDelete}/`)
    .then(() => getUsers())
  };
  //UPDATE USER
      //User selected To Edite
      const selectedToEdite = userToEdite => {
        // console.log(userToEdite)
        setEditeUser(userToEdite)
      };
      // abort operation User selected To Edite
      const cancelEdition = cleanState => setEditeUser(cleanState)
// PUT
const updateUser =  updatedUser => {
      console.log(updatedUser)
      axios.put(`https://users-crud1.herokuapp.com/users/${updatedUser.id}/`, updatedUser)
      .then(() => getUsers())
    };
  return (
    <div className='App'>
      <UserForm
      addUser={addUser}
      editeUser={editeUser} 
      cancelEdition={cancelEdition}
      updateUser={updateUser}
      />
      <UserList 
      users={users} 
      deleteUser={deleteUser} 
      selectedToEdite={selectedToEdite}
      />
    </div>
  );
}

export default App;
