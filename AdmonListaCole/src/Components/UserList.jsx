import logoCole from './images/logoCole.png';
import conf from './images/conf.svg';

import { useState, useEffect } from "react";
import { UserService } from '../userService';

const UserList = () => {

    const [user, setUser] = useState(
        {
            userName: '',
            userSurname: '',
            userSurname2: '',
            userEmail: '',
            userTlf: ''
        }
    );

    const [userList, setUserList] = useState([]);

    async function getData() {
        let users = await UserService.getAllUsers();
        users = users.map((user, index) => ({ ...user, id: user.id || index + 1 }));
        setUserList(users)
    };
    getData();

    function handleNameChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
    };

    async function handleAddUserToList() {
        if (!user.userName || !user.userSurname || !user.userSurname2 || !user.userEmail || !user.userTlf) {
            alert('Por favor, complete todos los campos del formulario.');
            return;
        }
        await UserService.submitUser(user);

        setUser({
            userName: "",
            userSurname: "",
            userSurname2: "",
            userEmail: "",
            userTlf: ""
        });
    }


    async function handleDeleteUser(userId) {
        try {
            await UserService.deleteUser(userId);
            getData();
        } catch (error) {
            console.error('Error al eliminar el usuario:', error);
        }
    }

    return (
        <>

            <nav className="contentNav">
                <img className="logo" src={logoCole} alt="logo colegio Arrabal" />
                <label className='listTitle'>
                    <h2 className='titleEvent'>Evento</h2>
                    <input className='inputTitle' type="text" id="textTitleList" name="titleList" value={user.titleList} onChange={handleNameChange} required />
                </label>
                <img className="conf" src={conf} alt="configuración"></img>
            </nav>


            <div className='content'>
                <form className="formList">
                    <label className='labelForm'>
                        <h2 className='headLabel'>Nombre</h2>
                        <input className='inputForm' type="text" id="textUserName" name="userName" value={user.userName} onChange={handleNameChange} required />
                    </label>

                    <label className='labelForm'>
                        <h2 className='headLabel'>Apellido1</h2>
                        <input className="inputForm" type="text" id="textUserlastName" name="userSurname" value={user.userSurname} onChange={handleNameChange} required />
                    </label>

                    <label className='labelForm'>
                        <h2 className='headLabel'>Apellido2</h2>
                        <input className="inputForm" type="text" id="textUserlastName2" name="userSurname2" value={user.userSurname2} onChange={handleNameChange} required />
                    </label>

                    <label className='labelForm'>
                        <h2 className='headLabel'>Email</h2>
                        <input className="inputForm" type="text" id="textUserEmail" name="userEmail" value={user.userEmail} onChange={handleNameChange} required />
                    </label>

                    <label className='labelForm'>
                        <h2 className='headLabel'>Teléfono</h2>
                        <input className="inputForm" type="text" id="textUserTlf" name="userTlf" value={user.userTlf} onChange={handleNameChange} required />
                    </label>


                    <button className="buttonForm" onClick={handleAddUserToList}>Enviar</button>
                </form>

                <section className='resultForm'>
                    <table className='tableResult'>
                        <thead className='headResult'>
                            <tr className='trRseult'>
                                <th className='thResult'>Nombre</th>
                                <th className='thResult'>Apellido1</th>
                                <th className='thResult'>Apellido2</th>
                                <th className='thResult'>Email</th>
                                <th className='thResult'>Teléfono</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userList.map((user, index) => (
                                <tr key={index}>
                                    <td className='tdResult'>{user.userName}</td>
                                    <td className='tdResult'>{user.userSurname}</td>
                                    <td className='tdResult'>{user.userSurname2}</td>
                                    <td className='tdResult'>{user.userEmail}</td>
                                    <td className='tdResult'>{user.userTlf}</td>
                                    <td className='tdResult'>
                                        <button className='buttonDelete' onClick={() => handleDeleteUser(user.id)}>Eliminar</button>
                                        <button className='buttonEdit' onClick={() => handleEditUser(index)}>Editar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </div>
        </>
    )

}


export default UserList;

