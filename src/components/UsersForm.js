import React from 'react';
import  { useState, useEffect } from 'react';
// formulario donde pondrás los inputs para llenar los siguientes datos:
// Nombre (“first_name”).
// Apellido (“last_name”).
// Email (“email”).
// Contraseña (“password”).
// Fecha de nacimiento (“birthday”).

// Al hacer submit, debes hacer una petición “post” para crear el nuevo usuario.
//  En caso de que haya algún usuario para editar, la petición no sería de tipo 
//   “post” sino “put”, para editarlo.

function UserForm ({ addUser, editeUser, cancelEdition, updateUser}) {
    const [ name , setName ] = useState('');
    const [ lastName , setLastName ] = useState('');
    const [ email , setEmail ] = useState('');
    // const [ password , setPassword ] = useState('');
    // const [ datebirth , setDatebirth ] = useState('');

// you will be listening if editeUser has changed, if this is true set
// all states. useEffect
useEffect(()=>{
console.log('user has changes');
if(editeUser){
    setName(editeUser.name)
    setLastName(editeUser.lastName)
    setEmail(editeUser.email)
} else {
    setName('')
    setLastName('')
    setEmail('')
}
},[editeUser])
const create = (e) => {
    //here DO post or put to the API
    e.preventDefault()
    const userData = {
        ID:Date.now(),
        name,
        lastName,
        email
    }
    if(editeUser){
        userData.ID = editeUser.ID;
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
            {/* <p>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
            </p>
            <p>
                <label htmlFor="birthday">birthday</label>
                <input type="" id="birthday" onChange={(e)=>setDatebirth(e.target.value)} value={datebirth}/>
            </p> */}
            <button type="submit" >CREAR</button>
            {editeUser && <button onClick={()=>cancelEdition(null)}>Cancel</button>}
        </form>
        
    </div>
    );
}

export default UserForm;