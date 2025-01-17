'use client'

import { useState } from 'react'
import './login.css'
import Link from 'next/link'

export default function Login() {

    const [user, setUser] = useState<boolean>(false)

    const toggleForms = () => {
        setUser(prev => !prev)
    }
    return (
        <>
        <Link href={'/'} className="return-action">
            <h1>←</h1>
        </Link>
            <div className="login-container">
                {
                    user
                        ?
                        (
                            <div className="login-box" id="login-box">
                                <h2>Iniciar Sesión</h2>
                                <form action="#" method="post">
                                    <div className="textbox">
                                        <input type="text" placeholder="Usuario" name="username" required />
                                    </div>
                                    <div className="textbox">
                                        <input type="password" placeholder="Contraseña" name="password" required />
                                    </div>
                                    <input type="submit" value="Entrar" className="btn" />
                                </form>
                                <div className="links" onClick={toggleForms}>
                                    <a href="#" >¿No tienes cuenta? Regístrate</a>
                                    <a href="#">¿Olvidaste tu contraseña?</a>
                                </div>
                            </div>
                        )
                        :
                        (
                            <div className="login-box" id="register-box">
                                <h2>Registrar Cuenta</h2>
                                <form action="#" method="post">
                                    <div className="textbox">
                                        <input type="text" placeholder="Usuario" name="username" required />
                                    </div>
                                    <div className="textbox">
                                        <input type="email" placeholder="Correo Electrónico" name="email" required />
                                    </div>
                                    <div className="textbox">
                                        <input type="password" placeholder="Contraseña" name="password" required />
                                    </div>
                                    <div className="textbox">
                                        <input type="password" placeholder="Confirmar Contraseña" name="confirm-password" required />
                                    </div>
                                    <input type="submit" value="Registrarse" className="btn" />
                                </form>
                                <div className="links" onClick={toggleForms}>
                                    <a href="#" >¿Ya tienes cuenta? Inicia sesión</a>
                                </div>
                            </div>
                        )
                }
            </div>
        </>
    )
}