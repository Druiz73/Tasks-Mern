import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const Login = () => {

    //state para iniciar sesion
    const [usuario, setUsuario] = useState({
        email: '',
        password: ''
    });

    const { email, password } = usuario;

    const onChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    //cuando el usuario quiere iniciar sesión

    const onSubmit = e => {
        e.preventDefault();
    }
    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1> Iniciar Sesión</h1>
                <form onSubmit={onSubmit}>
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
                        <input type="submit" className="btn btn-primario btn-block"
                            value="Iniciar Sesión" />
                    </div>
                </form>
                <div className="d-flex justify-content-between">
                    <Link to={'/nueva-cuenta'} className="enlace-nueva mt-2">
                        Crear Cuenta
                </Link>
                    <Link to={'/'} className="enlace-nueva mt-2">
                        Olvidé mi contraseña
                </Link>
                </div>
            </div>
        </div>
    )
}

export default Login
