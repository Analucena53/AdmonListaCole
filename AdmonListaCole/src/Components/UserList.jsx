import logoCole from './images/logoCole.png';
import conf from './images/conf.svg';

import { useState, } from "react";
import { UserService } from '../userService';

const UserList = () => {

    const [user, setUser] = useState(
        {
        nameList: '',
        userName: '',
        userSurname: '',
        userSurname2:'',
        userEmail:'',
        userTlf:''
        }
    );

    const [userList, setUserList] = useState([]);

    async function getData(){
        let users = await UserService.getAllUsers();
        setUserList(users)
        }
    
        getData();

    //nuevo estado para el titulo
    const [listTitle, setListTitle] = useState('');


    function handlelistNameChange(e) {
        setUser({ ...user, nameList: e.target.value });
    }
    
    function handleNameChange(e) {
        setUser({ ...user, name: e.target.value });
    }
    
    function handlelastNameChange(e) {
        setUser({ ...user, lastName: e.target.value });
    }
    
    function handlelastName2Change(e) {
        setUser({ ...user, lastName2: e.target.value });
    }
    
    function handleemailChange(e) {
        setUser({ ...user, email: e.target.value });
    }
    
    function handletlfChange(e) {
        setUser({ ...user, tlf: e.target.value });
    }
    

    
    //a tráves del evento de click (onclick) del botón se ejecuta esta función, que guarda en un array la variable user mediante el
    //"setUserList"
    function handleAddUserToList() {
        setUserList(prevUserList => [...prevUserList, {...user}]);// Crear un nuevo objeto para user
        
    //Establecer el título con el valor de nameList
        setListTitle(user.nameList);


    //Limpiar el formulario
        setUser({
            nameList:'',
            name: '',
            lastName: '',
            lastName2:'',
            email:'',
            tlf:''
        });

    }

    //Este console log sí imprime el array actualizado, puesto que está fuera de la función que actualiza el array

    console.log(userList);


    // en el return usamos un .map() en el array userList para transformar sus elementos. .map() itera sobre cada elemento, lo transforma 
    //y devuelve un array nuevo con los elementos transformados. Aquí lo usamos para asignar a cada elemento un <li> con su contenido 
    // (que es un nombre, un string)
    return (
        <>

        <nav className="contentNav">
            <img className="logo" src={logoCole} alt="logo colegio Arrabal"/>
            <button className="buttonnav" onclick="addList()">+Lista</button>
            <button className="buttonnav" onclick="editList()">Editar</button>
            <button className="buttonnav" onclick="delet()">Eliminar</button>
            <img className="conf" src={conf} alt="configuración"></img>
        </nav>

            <label className='list'>
                <h2>Lista:</h2>
                <input type="text" id="textUserlistName" name="ListName" value={user.nameList} onChange={handlelistNameChange} required/>
            </label>

            <form className="formList">
            <label className='labelForm'>
                <h2>Nombre</h2>
                <input className='inputForm' type="text" id="textUserName" name="userName" value={user.name} onChange={handleNameChange} required/>
            </label>

            <label className='labelForm'>
                <h2>Apellido1</h2>
                <input className="inputForm" type="text" id="textUserlastName" name="userLastname" value={user.userSurname} onChange={handlelastNameChange} required/>
            </label>

            <label className='labelForm'>
                <h2>Apellido2</h2>
                <input className="inputForm" type="text" id="textUserlastName2" name="userLastname2" value={user.userSurname2} onChange={handlelastName2Change} required/>
            </label>

            <label className='labelForm'>
                <h2>Email</h2>
                <input className="inputForm" type="text" id="textUserEmail" name="userEmail" value={user.userEmail} onChange={handleemailChange} required/>
            </label>

            <label className='labelForm'>
                <h2>Teléfono</h2>
                <input className="inputForm" type="text" id="textUserTlf" name="userTlf" value={user.userTlf} onChange={handletlfChange} required/>
            </label>


            <button className="buttonForm" onClick={handleAddUserToList}>Enviar</button>
            </form>

            {listTitle && (
                <>
                    <h2>{`Evento: ${listTitle}`}</h2>
                    <ol>
                        {userList.map((user, index) => (
                        <li key={index}>
                            {user.nameList} {user.userName} {user.userSurname} {user.userSurname2} {user.userEmailmail} {user.userTlf}
                        </li>
                        ))}
                    </ol>
                </>
            )}
            
        </>

    )
}

export default UserList;

