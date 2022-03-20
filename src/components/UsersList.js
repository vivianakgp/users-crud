// listar todos los usuarios, mostrando su nombre, 
// apellido, email y fecha de nacimiento. Adicionalmente 
// colocarás dos botones, uno para eliminar, el cuál ejecutará
//  un “delete” en la API para eliminar el usuario seleccionado.
//   Y uno para editar, el cuál pondrá toda la información del usuario 
//   seleccionado en “UsersForm”.
function UserList ({users, deleteUser, selectedToEdite}) {
    return (
    <div className="UserList">
        <ul>{
            users.map( user => (
                <li key={user.ID}>
                    <ul>
                        <li><b>Name:</b>{user.name}</li>
                        <li><b>Last Name:</b>{user.lastName}</li>
                        <li><b>Email:</b>{user.email}</li>
                    </ul>
                    <button onClick={()=>deleteUser(user.ID)}>delete</button>
                    <button onClick={()=>selectedToEdite(user)}>edite</button>

                </li>
            ))
        }</ul>        
    </div>
    );
  }
  
  export default UserList;