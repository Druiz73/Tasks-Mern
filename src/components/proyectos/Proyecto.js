import React, { useContext } from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext'
import tareaContext from '../../context/tareas/tareaContext'

const Proyecto = ({ proyecto }) => {
   
    const proyectosContext = useContext(proyectoContext)
    const { mostrarProyectoActual } = proyectosContext

    const tareasContext = useContext(tareaContext)
    const { obtenerTareas } = tareasContext

    //funcion para agregar proyecto actual
    const seleccionarProyecto = id => {
        mostrarProyectoActual(id); //fijar un proyecto actual
        obtenerTareas(id) //fijar las tareas de un click
    }

    return (
        <li>
            <button className="btn btn-blank"
                onClick={(id) => seleccionarProyecto(proyecto.id)}>{proyecto.nombre}</button>
        </li>
    )
}

export default Proyecto
