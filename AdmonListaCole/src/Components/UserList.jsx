
//para usar los hooks hay que importarlos
import { useState, } from "react";

const UserList = () => {

    //hemos usado useState para crear y actualizar las variables de usuario y de la lista de usuarios. "user" la inicializamos
    //en un string vacío. "userList" inicializa en un array vacío.
    const [user, setUser] = useState({
        nameList: '',
        name: '',
        lastName: '',
    });
    const [userList, setUserList] = useState([]);
    const [listTitle, setListTitle] = useState('');
    //nuevo estado para el titulo

    //esta función coge el valor de "user" usando "setUser" y le asigna el valor del input, siendo el evento que dispara esta función
    //cualquier cambio que un usuario haga en el input al editarlo
    function handleNameChange(e) {
        setUser({ ...user, name: e.target.value });
    };

    function handlelastNameChange(e) {
        setUser({ ...user, lastName: e.target.value });
    };

    function handlelistNameChange(e) {
        setUser({ ...user, nameList: e.target.value });
    };

    //a tráves del evento de click (onclick) del botón se ejecuta esta función, que guarda en un array la variable user mediante el
    //"setUserList"
    function handleAddUserToList() {
        setUserList(prevUserList => [...prevUserList, {...user}]);// Crear un nuevo objeto para user
        setListTitle(user.nameList);
        //Establecer el título con el valor de nameList

        //este console log lo pusimos por razones ajenas al objetivo de la aplicación, queríamos comprobar que el array se fuera cargando sin 
        //más y también lo pusimos para tener un punto de parada en los breakpoint. Sin embargo, el array no aparecía actualizado. El problema
        //era que si está metido dentro de la funcióno nunca iba a imprimir el array actualizado. No nos hemos dado cuenta y pensábamos
        //que había errores en el código. Unas risas.

        //   console.log(userList);

        //Limpiar el formulario
        setUser({
            name: '',
            lastName: '',
        });

    }

    //Este console log sí imprime el array actualizado, puesto que está fuera de la función que actualiza el array

    console.log(userList);



    //Creíamos que la solución al array que no se acutalizaba era usar useEffect. En realidad no era necesario, pero en cualquier caso
    //hemos aprendido a usarlo: sirve para manipular efectos secundarios, por ejemplo, para asegurarte de que lo que declares dentro del 
    //useEffect no se ejecute hasta que se haya actualizado el estado del componenente o de una variable, que es lo que ponemos dentro
    //del corchete (se llama dependencia). El console no se ejecutaría hasta que se hubiera actualizado el estado (valor) de userList

    //   useEffect(()=>{
    //     console.log(userList)
    //   },[userList,])


    // en el return usamos un .map() en el array userList para transformar sus elementos. .map() itera sobre cada elemento, lo transforma 
    //y devuelve un array nuevo con los elementos transformados. Aquí lo usamos para asignar a cada elemento un <li> con su contenido 
    // (que es un nombre, un string)
    return (
        <>
            <h1>Qué lista eres</h1>
            <label>
                <h2>Evento</h2>
                <input type="text" id="textUserlistName" name="ListName" value={user.nameList} onChange={handlelistNameChange} />
            </label>

            <label>
                <h2>Nombre</h2>
                <input type="text" id="textUserName" name="userName" value={user.name} onChange={handleNameChange} />
            </label>

            <label>
                <h2>Apellido</h2>
                <input type="text" id="textUserlastName" name="userLastname" value={user.lastName} onChange={handlelastNameChange} />
            </label>


            <button onClick={handleAddUserToList}>Añadir usuario</button>

            {listTitle && (
                <>
                    <h2>{`Evento: ${listTitle}`}</h2>
                    <ol>
                        {userList.map((user, index) => (
                            <li key={index}>
                                {user.name} {user.lastName}
                            </li>
                        ))}
                    </ol>
                </>
            )}
        </>

    )
}

export default UserList;

