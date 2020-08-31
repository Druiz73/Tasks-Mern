import React from 'react'
import FormNuevoProyecto from '../proyectos/FormNuevoProyecto'
import ListadoProyectos from '../proyectos/ListadoProyectos'

const Sidebar = props => {
    return (
        <aside>
            <h1>Mern <span>Tasks</span></h1>
            <FormNuevoProyecto />
            <div className="proyectos">
                <h2>Tus proyectos</h2>
                <ListadoProyectos />
            </div>
        </aside>
    )
}


export default Sidebar
