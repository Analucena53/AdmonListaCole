import logoCole from './images/logoCole.png';
import conf from './images/conf.svg';

import { useState, useEffect } from "react";
import { UserService } from '../userService';

const UserList = () => {

    const [user, setUser] = useState(
        {
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

    
    function handleNameChange(e) {
        setUser({...user, [e.target.name]:e.target.value})
    };
    
    async function handleAddUserToList() {
        await UserService.submitUser(user);
    

        setUser({
            userName: "",
            userSurname:"",
            userSurname2:"",
            userEmail:"",
            userTlf:""
        });
    }
    


    return (
        <>

        <nav className="contentNav">
            <img className="logo" src={logoCole} alt="logo colegio Arrabal"/>
            <button className="buttonnav" onClick="addList()">+Lista</button>
            <button className="buttonnav" onClick="editList()">Editar</button>
            <button className="buttonnav" onClick="delet()">Eliminar</button>
            <img className="conf" src={conf} alt="configuración"></img>
        </nav>

        <h2 className='list'>Lista:</h2>
            
        <form className="formList">
            <label className='labelForm'>
                <h2>Nombre</h2>
                <input className='inputForm' type="text" id="textUserName" name="userName" value={user.userName} onChange={handleNameChange} required/>
            </label>

            <label className='labelForm'>
                <h2>Apellido1</h2>
                <input className="inputForm" type="text" id="textUserlastName" name="userSurname" value={user.userSurname} onChange={handleNameChange} required/>
            </label>

            <label className='labelForm'>
                <h2>Apellido2</h2>
                <input className="inputForm" type="text" id="textUserlastName2" name="userSurname2" value={user.userSurname2} onChange={handleNameChange} required/>
            </label>

            <label className='labelForm'>
                <h2>Email</h2>
                <input className="inputForm" type="text" id="textUserEmail" name="userEmail" value={user.userEmail} onChange={handleNameChange} required/>
            </label>

            <label className='labelForm'>
                <h2>Teléfono</h2>
                <input className="inputForm" type="text" id="textUserTlf" name="userTlf" value={user.userTlf} onChange={handleNameChange} required/>
            </label>


            <button className="buttonForm" onClick={handleAddUserToList}>Enviar</button>
            </form>

            <section className='resultForm'>  
                <ul>       
                {
                    userList.map((user, index) => (
                            <li key={index}>
                                {user.userName} {user.userSurname} {user.userSurname2} {user.userEmailmail} {user.userTlf}
                            </li>
                            ))
                }
                </ul> 
            </section>  
            </>
            )

}





export default UserList;

