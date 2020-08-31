import React, { useContext } from 'react'
import tareaContext from '../../context/tareas/tareaContext'
import proyectoContext from "../../context/proyectos/proyectoContext"

const Tarea = ({ tarea }) => {

    //context tarea
    const tareasContext = useContext(tareaContext);
    const { eliminarTarea, obtenerTareas, cambiarEstadoTarea, tareaActual } = tareasContext;

    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    //extraer el proyecto
    const [proyectoActual] = proyecto;

    //btn eliminar
    const eliminar = id => {
        eliminarTarea(id)
        //re-render lista de tareas
        obtenerTareas(proyectoActual.id)
    }

    const cambiarEstado = tarea => {
        tarea.estado = !tarea.estado;
        cambiarEstadoTarea(tarea)
    }


    //agregar una tarea actual al querer editarla
    const seleccionarTarea = tarea => {
        tareaActual(tarea)
    }

    return (
        <li className="tarea sombra">
            <p>{tarea.nombre}</p>
            <div className="estado" >
                {tarea.estado ?
                    (<button className="completo" onClick={() => cambiarEstado(tarea)} type="button">completo</button>)
                    : (<button className="incompleto" onClick={() => cambiarEstado(tarea)} type="button">incompleto</button>)
                }
            </div>
            <div className="acciones">
                <button type="button" className="btn btn-primario" onClick={() => seleccionarTarea(tarea)}>Editar</button>
            </div>
            <div className="acciones">
                <button type="button" className="btn btn-secundario" onClick={() => eliminar(tarea.id)}>Eliminar</button>
            </div>
        </li>
    )
}

export default Tarea
