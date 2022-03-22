

function UserList ({users, deleteUser, selectedToEdite}) {
    return (
    <div className='userList container mt-5 pb-5'>
            <div className='userList__content row d-flex flex justify-content-center '>{
            users.map( user => (
                <div className='card col-8 mb-2  col-lg-3 p-3  m-2' key={user.id}>
                    <h2 className='card-title text-center'>{user.first_name}</h2>
                    <p className='text-center'>{user.last_name}</p>
                    <p><i class='bi bi-envelope me-2'style={{ fontSize: 20 }}></i>{user.email}</p>
                    <p><i className='bi bi-calendar-date me-2' style={{ fontSize: 20 }}></i>{user.birthday}</p>
                    <div className='d-flex flex-row-reverse '>
                        <i class='bi bi-pencil  p-2 m-2' onClick={()=>selectedToEdite(user)} style={{ fontSize:23, color:'blue' }}></i>
                        <i class='bi bi-trash  p-2 m-2' onClick={()=>deleteUser(user.id)} style={{ fontSize:23, color:'red'}}></i>
                    </div>

                    {/* <button onClick={()=>deleteUser(user.id)}>{<i class='bi bi-trash '></i>}</button>
                    <button onClick={()=>selectedToEdite(user)}>{<i class='bi bi-pencil'></i>}</button> */}
                </div>
            ))
            }</div>       
    </div>
    );
}
export default UserList;