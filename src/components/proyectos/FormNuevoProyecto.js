import React, { Fragment, useState, useContext } from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext'

const FormNuevoProyecto = () => {

    const [proyecto, setProyecto] = useState({ nombre: '' })

    //context state
    const proyectosContext = useContext(proyectoContext);
    const { formulario, errorformulario, mostrarFormulario, agregarProyecto, mostrarError } = proyectosContext;

    //extraer nombre de proyecto
    const { nombre } = proyecto

    //leer contenido de inputs
    const onChangeProyecto = e => {
        setProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitProyecto = e => {
        e.preventDefault();
        //validar proyecto
        if (nombre === "") {
            mostrarError()
            return null
        }
        agregarProyecto(proyecto)
        setProyecto({ nombre: '' })
    }


    return (
        <Fragment>
            <button className="btn btn-block 
        btn-primario" onClick={() => mostrarFormulario()}>Nuevo Proyecto
            </button>
            {
                formulario ?
                    <form className="formulario-nuevo-proyecto"
                        onSubmit={onSubmitProyecto}>
                        <input type="text" className="input-text"
                            onChange={onChangeProyecto}
                            placeholder="Nombre Proyecto"
                            name="nombre" value={nombre}>
                        </input>
                        <input type="submit"
                            className="btn btn-primario btn-block"
                            value="Agregar Proyecto" />
                    </form>
                    :
                    null
            }
            {
                errorformulario ? <p className="mensaje error">El nombre del proyecto es obligatorio</p> : null
            }

        </Fragment>

    )
}

export default FormNuevoProyecto
