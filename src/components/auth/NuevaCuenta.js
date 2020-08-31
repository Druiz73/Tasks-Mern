import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const NuevaCuenta = () => {

    //state para iniciar sesion
    const [usuario, setUsuario] = useState({
        userName: '',
        email: '',
        password: '',
        confirmPass: ''
    });

    const { email, password, confirmPass, userName } = usuario;

    const onChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    //cuando el usuario quiere iniciar sesión

    const onSubmit = e => {
        e.preventDefault();

        //validar campos vacios

        //validar pass iguales y min 6 caracteres


        //pasarlo al action


    }
    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1> Crear Cuenta</h1>
                <form onSubmit={onSubmit}>
                    <div className="campo-form">
                        <label htmlFor="name">Nombre</label>
                        <input type="text" id="userName"
                            name="userName"
                            placeholder="Nombre"
                            onChange={onChange}
                            value={userName} >
                        </input>
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email"
                            name="email"
                            placeholder="email"
                            onChange={onChange}
                            value={email} >
                        </input>
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password"
                            name="password"
                            placeholder="password"
                            onChange={onChange}
                            value={password}>
                        </input>
                    </div>
                    <div className="campo-form">
                        <label htmlFor="confirmPass">Confirmar Password</label>
                        <input type="password" id="confirmPass"
                            name="confirmPass"
                            placeholder="Confirmar Contraseña"
                            onChange={onChange}
                            value={confirmPass}>
                        </input>
                    </div>
                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block"
                            value="Crear Cuenta" />
                    </div>
                </form>
                <Link to={'/'} className="enlace-nueva mt-2">
                    Volver a iniciar sesion
                </Link>
            </div>
        </div>
    )
}

export default NuevaCuenta
