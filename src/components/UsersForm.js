import React from 'react';
import  { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

function UserForm ({ addUser, editeUser, cancelEdition, updateUser}) {
    const [ name , setName ] = useState('');
    const [ lastName , setLastName ] = useState('');
    const [ email , setEmail ] = useState('');
    const [ password , setPassword ] = useState('');
    const [ datebirth , setDatebirth ] = useState('');

useEffect(() => {
console.log('user has changes');
if(editeUser){
    setName(editeUser.first_name)
    setLastName(editeUser.last_name)
    setEmail(editeUser.email)
} else {
    setName('')
    setLastName('')
    setEmail('')
}
},[ editeUser ])
const create = (e) => {
    //here DO post or put to the API
    e.preventDefault()
    const userData = {
        id:Date.now(),
        email:email,
        password:password,
        first_name:name,
        last_name:lastName,
        birthday:datebirth
    }
    if(editeUser){
        userData.id = editeUser.id;
        updateUser(userData)
    } else {
        addUser(userData)
    }
};

    return (
    <div className="UserForm">
        <form onSubmit={create}>
            <p>
                <label htmlFor="first_name">Name</label>
                <input type="text" id="first_name" onChange={(e)=>setName(e.target.value)} value={name}/>
            </p>
            <p>
                <label htmlFor="last_name">Last Name</label>
                <input type="text" id="last_name" onChange={(e)=>setLastName(e.target.value)} value={lastName}/>
            </p>
            <p>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
            </p>
            <p>
                <label htmlFor="password">Password</label>
                <input type="text" id="password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
            </p>
            <p>
                <label htmlFor="birthday">birthday</label>
                <input type="text" id="birthday" onChange={(e)=>setDatebirth(e.target.value)} value={datebirth}/>
            </p>
            <button type="submit" >CREAR</button>
            {editeUser && <Button variant="danger"onClick={()=>cancelEdition(null)}>Cancel</Button>}
        </form>
        
    </div>
    );
}

export default UserForm;