import React, { useReducer } from 'react'
import TareaContext from './tareaContext'
import tareaReducer from './tareaReducer'
import {
    TAREAS_PROYECTO,
    AGREGAR_TAREAS,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_ACTUAL
} from '../../types/index'
import { v4 as uuid } from 'uuid'

const TareaState = props => {
    const initialState = {
        tareas: [
            { id: 0, nombre: 'elegir plataforma', estado: true, proyectoId: 1 },
            { id: 1, nombre: 'elegir colores', estado: true, proyectoId: 2 },
            { id: 2, nombre: 'elegir hosting', estado: true, proyectoId: 3 },
            { id: 3, nombre: 'elegir plataforma pagos', estado: true, proyectoId: 4 },
            { id: 4, nombre: 'elegir plataforma', estado: true, proyectoId: 1 },
            { id: 5, nombre: 'elegir colores', estado: true, proyectoId: 2 },
            { id: 6, nombre: 'elegir hosting', estado: true, proyectoId: 3 },
            { id: 7, nombre: 'elegir plataforma pagos', estado: true, proyectoId: 4 }],
        tareasproyecto: null,
        errorTarea: false,
        tareaseleccionada: null
    }


    const [state, distpatch] = useReducer(tareaReducer, initialState)

    //obtener tareas de un proyecto
    const obtenerTareas = proyectoId => {
        distpatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })
    }

    //Agregar una tarea al proyecto seleccionado
    const agregarTareas = tarea => {
        tarea.id = uuid();
        distpatch({
            type: AGREGAR_TAREAS,
            payload: tarea
        })
    }
    //valida y muestra un error
    const validarTarea = () => {
        distpatch({
            type: VALIDAR_TAREA
        })
    }

    //Eliminar tarea
    const eliminarTarea = id => {
        distpatch({
            type: ELIMINAR_TAREA,
            payload: id
        })
    }
    //cambia el estado de cada tarea
    const cambiarEstadoTarea = tarea => {
        distpatch({
            type: ESTADO_TAREA,
            payload: tarea
        })
    }

    //extrae una tarea para edición
    const tareaActual = tarea => {
        distpatch({
            type: TAREA_ACTUAL,
            payload: tarea
        })
    }

    //Edita o modifica una tarea 
    const actualizarTarea = tarea => {
        distpatch({
            type: ACTUALIZAR_ACTUAL,
            payload: tarea
        })
    }


    return <TareaContext.Provider value={{
        tareas: state.tareas,
        tareasproyecto: state.tareasproyecto,
        errorTarea: state.errorTarea,
        tareaseleccionada: state.tareaseleccionada,
        obtenerTareas,
        agregarTareas,
        validarTarea,
        eliminarTarea,
        cambiarEstadoTarea,
        tareaActual,
        actualizarTarea
    }}>{props.children}</TareaContext.Provider>
}

export default TareaState;