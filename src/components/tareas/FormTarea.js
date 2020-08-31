import React, { useContext, useState, useEffect } from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext'
import tareaContext from '../../context/tareas/tareaContext'


const FormTarea = () => {


    //contexts
    const proyectosContext = useContext(proyectoContext)
    const { proyecto } = proyectosContext

    const tareasContext = useContext(tareaContext)
    const { tareaseleccionada,
        errorTarea,
        agregarTareas,
        validarTarea,
        obtenerTareas,
        actualizarTarea } = tareasContext

    useEffect(() => {
        if (tareaseleccionada !== null) {
            setTarea(tareaseleccionada)
        } else {
            setTarea({
                nombre: ''
            })
        }

    }, [tareaseleccionada])


    //state del formulario
    const [tarea, setTarea] = useState({ nombre: '' })

    //extraer el nombre del proyecto
    const { nombre } = tarea;

    //si no hay proyectos seleccionado
    if (!proyecto) return null;

    const [proyectoActual] = proyecto;

    const handleChange = e => {
        setTarea({
            ...tarea,
            [e.target.name]: e.target.value
        })
    }


    const onsubmit = e => {
        e.preventDefault();
        //validar
        if (nombre.trim() === '') {
            validarTarea();
            return
        }
        //revisar si es edicion o nueva tarea
        if (tareaseleccionada === null) {
            //agregar nueva tarea al state
            tarea.proyectoId = proyectoActual.id;
            tarea.estado = false;
            agregarTareas(tarea)
        } else {
            actualizarTarea(tarea)
        }


        //reiniciar el form
        setTarea({ nombre: '' })

        //listar tareas de nuevo
        obtenerTareas(proyectoActual.id)
    }

    return (
        <div className="formulario">
            <form onSubmit={onsubmit}>
                <div className="contenedor-input">
                    <input onChange={handleChange} value={nombre} type="text" name="nombre" className="input-text" placeholder="Nombre de la Tarea" />
                </div>
                <div className="contenedor-input">
                    <input type="submit" className="btn btn-primario btn-submit btn-block" value={tareaseleccionada ? "Editar Tarea" : "Agregar Tarea"} />
                </div>
            </form>
            {errorTarea ? <p className="mensaje error">Completar el campo</p> : null}
        </div>
    )
}

export default FormTarea