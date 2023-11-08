import { useEffect, useState } from "react";
import PersonCard from "../PersonCard/PersonCard";
import style from "./ListPerson.module.css"


const ListPerson = () => {
    const [list, setList] = useState([]);

    const [isOpen, setIsOpen] = useState(false); // Estado para controlar la apertura/cierre de la lista

    const llamarLista = async () => {
        const response = await fetch('https://reqres.in/api/users?page=1');
        const responseJson = await response.json();
        console.log(responseJson)
        setList(responseJson.data)
    }

    useEffect(() => {
        llamarLista()
    }, [])

    const abrirLista = () => {
        setIsOpen(true); // Abre la lista
    }

    const cerrarLista = () => {
        setIsOpen(false); // Cierra la lista
    } 

    return (

        <div className={style.container}>
            <h1>Lista de Contactos</h1>
            <button  className={style.abrir} onClick={abrirLista}>Abrir</button> {/* Botón para abrir la lista */}
            
            {isOpen && ( // Renderiza la lista solo si isOpen es true
                <div className={style.lista}>
                    {list.map((person) => (
                        <PersonCard key={person.id} person={person} />
                    ))}
                </div>
            )}
            <button className={style.cerrar} onClick={cerrarLista}>Cerrar</button> {/* Botón para cerrar la lista */}
        </div>

    )
}

export default ListPerson