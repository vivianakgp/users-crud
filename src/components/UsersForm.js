import React from 'react';
import  { useState, useEffect } from 'react';
// import Button from 'react-bootstrap/Button';
import {Modal, Button, Form } from 'react-bootstrap';


function UserForm ({ addUser, editeUser, cancelEdition, updateUser}) {
    const [ name , setName ] = useState('');
    const [ lastName , setLastName ] = useState('');
    const [ email , setEmail ] = useState('');
    const [ password , setPassword ] = useState('');
    const [ datebirth , setDatebirth ] = useState('');
    const [ modalIsActive , setModalIsActive ] = useState(false);
console.log(editeUser)
// const heandleModal = () => {
//     setModalIsActive(!modalIsActive)

// };
useEffect(() => {
console.log('user has changes');
if(editeUser){
    // heandleModal()
    setName(editeUser.first_name)
    setLastName(editeUser.last_name)
    setEmail(editeUser.email)
    setPassword(editeUser.password)
    setDatebirth(editeUser.birthday)
    setModalIsActive(true)
} else {
    setName('')
    setLastName('')
    setEmail('')
    setPassword('')
    setDatebirth('')
}
},[ editeUser]);

const create = (e) => {
    //here DO post or put to the API
    e.preventDefault();
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
        // heandleModal();
        setModalIsActive(false)
        cancelEdition(null);

    } else {
        addUser(userData);
        // heandleModal();
        setModalIsActive(false)
        setName('')
        setLastName('')
        setEmail('')
        setPassword('')
        setDatebirth('')
    }
};   

    return (
    <div className="UserForm">
        <Button onClick={()=>setModalIsActive(true)}>Add user</Button>
        <Modal show={modalIsActive}>
            <Modal.Header closeButton  onClick={()=>setModalIsActive(false)}>Add User</Modal.Header>
            <Modal.Body >
                <Form className='d-flex flex-column align-items-center' onSubmit={create}>
                    <p>
                        <label htmlFor="first_name"   className='d-none'>Name</label>
                        <input type="text" id="first_name" className='border-1 rounded-2 border-primary' placeHolder='Name' onChange={(e)=>setName(e.target.value)} value={name}/>
                    </p>
                    <p>
                        <label htmlFor="last_name" className='d-none'>Last Name</label>
                        <input type="text" id="last_name" className='border-1 rounded-2 border-primary' placeHolder='Last Name' onChange={(e)=>setLastName(e.target.value)} value={lastName}/>
                    </p>
                    <p>
                        <label htmlFor="email" className='d-none'>Email</label>
                        <input type="text" id="email" className='border-1 rounded-2 border-primary' placeHolder='Email' onChange={(e)=>setEmail(e.target.value)} value={email}/>
                    </p>
                    <p>
                        <label htmlFor="password" className='d-none'>Password</label>
                        <input type="text" id="password" className='border-1 rounded-2 border-primary' placeHolder='Password' onChange={(e)=>setPassword(e.target.value)} value={password}/>
                    </p>
                    <p>
                        <label htmlFor="birthday" className='d-none'>birthday</label>
                        <input type="text" id="birthday" className='border-1 rounded-2 border-primary' placeHolder='birthday' onChange={(e)=>setDatebirth(e.target.value)} value={datebirth}/>
                    </p>
                    <p className='d-flex'>
                        <Button type="submit">{editeUser?'update':'save'}</Button>
                        {editeUser ?<Button className='d-block ms-3' variant="danger"onClick={()=>cancelEdition(null)}>Cancel</Button>:<Button className='d-none'></Button>}
                    </p>
                </Form>
            </Modal.Body>
        </Modal>
        
    </div>
    );
}

export default UserForm;
