/* Projeto React Login App - CRF2A */
import React, { useState } from 'react'
import './login.css'
/* IMPORTS DO REACT-ICONS */
import { MdEmail, MdLock } from "react-icons/md"
import { HiEye, HiEyeOff } from "react-icons/hi"

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [show, setShow] = useState(false)

    /* EVENTO PARA VISUALIZAR OU NÃO A SENHA */
    const handleClick = (evento) => {
        evento.preventDefault()
        setShow(!show);
    }

    return (
        <div className="login">
            <div className="login-logo">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/1828/1828506.png" alt="MdLockLogin App" />
            </div>
            <div className="login-right">
                <h1>Login Project - CRF2A</h1>

                <div className="login-loginInputEmail">
                    <MdEmail />
                    <input type="email" placeholder="Digite um email" value={email} onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className="login-loginInputPassword">
                    <MdLock />
                    <input
                        placeholder="Digite sua senha" type={show ? "text" : "password"} value={password} onChange={e => setPassword(e.target.value)}/>
                    <div className="login-eye">
                        {show ? (<HiEye size={20} onClick={handleClick}/>) : 
                        (<HiEyeOff size={20} onClick={handleClick}/>)}
                    </div>
                </div>
                <button type="submit">
                    Entrar
                </button>
                <h4>Não possui um cadastro?</h4>
                <button type="submit">
                    Cadastrar
                </button>
            </div>
        </div>
    )
}

export default Login;