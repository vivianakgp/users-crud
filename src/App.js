// import './App.css';
import  { useState } from 'react';

import UserForm from './components/UsersForm';
import UserList from './components/UsersList';

function App() {
  // INSTEAD ARRAY GETTING USER FROM THE API WITH AXIOS
  const usersAPI = [
    {ID:1, name:'Mateo', lastName:'Arechiga', email:'mateo@gmail.com'},
    {ID:2, name:'Guillermo', lastName:'Perez', email:'memo@gmail.com'},
    {ID:3, name:'Maricela', lastName:'Perez', email:'mary@gmail.com'},
    {ID:4, name:'Karla', lastName:'Gomez', email:'karla@gmail.com'},
    {ID:5, name:'Aurelio', lastName:'Penilla', email:'aurelio@gmail.com'},
  ];
  const [ users , setUsers ] = useState(usersAPI);
  const [ editeUser , setEditeUser ] = useState(null);
  //  addUser here call post to the API
  const addUser = newUser => setUsers([...users, newUser]);
  const deleteUser = userDelete => {
    // deleteUser here call API to delete user
    // console.log(userDelete)
    // const filterUsers = users.filter((user)=>user.ID !== userDelete)
    const indexUser = users.findIndex((user) => user.ID === userDelete);
    users.splice(indexUser, 1)
    setUsers([...users])
  };
  //  HERE CALL PUSH TO THE API
      //updateUser in usersList user has cliked to edite, what was
      const selectedToEdite = userToEdite => {
        // console.log(userToEdite)
        setEditeUser(userToEdite)
      }   
      // abort operation
      const cancelEdition = cleanState => setEditeUser(cleanState)
  // here update PUSH
    const updateUser =  updatedUser => {
      console.log(updatedUser)
      const indexUserToEdit = users.findIndex((user)=>user.ID === updatedUser.ID)
      users[indexUserToEdit]= updatedUser
      setUsers([...users])
    }
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
