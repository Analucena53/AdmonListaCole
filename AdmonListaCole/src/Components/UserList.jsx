import logoCole from './images/logoCole.png';
import conf from './images/conf.svg';

//para usar los hooks hay que importarlos
import { useState, } from "react";

const UserList = () => {

    //hemos usado useState para crear y actualizar las variables de usuario y de la lista de usuarios. "user" la inicializamos
    //en un string vacío. "userList" inicializa en un array vacío.
    const [user, setUser] = useState({
        nameList: '',
        name: '',
        lastName: '',
        lastName2:'',
        email:'',
        tlf:''
    });
    const [userList, setUserList] = useState([]);
    
    //nuevo estado para el titulo
    const [listTitle, setListTitle] = useState('');

    //esta función coge el valor de "user" usando "setUser" y le asigna el valor del input, siendo el evento que dispara esta función
    //cualquier cambio que un usuario haga en el input al editarlo

    function handlelistNameChange(e) {
        setUser({ ...user, nameList: e.target.value });
    };

    function handleNameChange(e) {
        setUser({ ...user, name: e.target.value });
    };

    function handlelastNameChange(e) {
        setUser({ ...user, lastName: e.target.value });
    };

    function handlelastName2Change(e) {
        setUser({ ...user, lastName2: e.target.value });
    };

    function handleemailChange(e) {
        setUser({...user, email: e.target.value })
    };

    function handletlfChange(e) {
        setUser({...user, tlf: e.target.value })
    }

    
    //a tráves del evento de click (onclick) del botón se ejecuta esta función, que guarda en un array la variable user mediante el
    //"setUserList"
    function handleAddUserToList() {
        setUserList(prevUserList => [...prevUserList, {...user}]);// Crear un nuevo objeto para user
        
    //Establecer el título con el valor de nameList
        setListTitle(user.nameList);


    //Limpiar el formulario
        setUser({
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

        <nav class="contentNav">
            <img class="logo" src={logoCole} alt="logo colegio Arrabal"/>
            <button class="buttonnav" onclick="addList()">+Lista</button>
            <button class="buttonnav" onclick="editList()">Editar</button>
            <button class="buttonnav" onclick="delet()">Eliminar</button>
            <img class="conf" src={conf} alt="configuración"></img>
        </nav>

            <label>
                <h2>Lista:</h2>
                <input type="text" id="textUserlistName" name="ListName" value={user.nameList} onChange={handlelistNameChange} />
            </label>

            <form class="formList">
            <label>
                <h2>Nombre</h2>
                <input type="text" id="textUserName" name="userName" value={user.name} onChange={handleNameChange} />
            </label>

            <label>
                <h2>Apellido1</h2>
                <input type="text" id="textUserlastName" name="userLastname" value={user.lastName} onChange={handlelastNameChange} />
            </label>
            <label>
                <h2>Apellido2</h2>
                <input type="text" id="textUserlastName2" name="userLastname2" value={user.lastName2} onChange={handlelastName2Change} />
            </label>
            <label>
                <h2>Email</h2>
                <input type="text" id="textUserEmail" name="userEmail" value={user.email} onChange={handleemailChange} />
            </label>
            <label>
                <h2>Teléfono</h2>
                <input type="text" id="textUserTlf" name="userTlf" value={user.tlf} onChange={handletlfChange} />
            </label>


            <button class="buttonForm" onClick={handleAddUserToList}>Enviar</button>
            </form>

            {listTitle && (
                <>
                    <h2>{`Evento: ${listTitle}`}</h2>
                    <ol>
                        {userList.map((user, index) => (
                        <li key={index}>
                            {user.name} {user.lastName} {user.lastName2} {user.email} {user.tlf}
                        </li>
                        ))}
                    </ol>
                </>
            )}
            
        </>

    )
}

export default UserList;

