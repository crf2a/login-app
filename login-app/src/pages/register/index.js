/* Projeto React Login App - CRF2A */

import React, { useState } from 'react'
import './register.css'
/* IMPORTS DO REACT-ICONS */
import { MdEmail, MdLock } from "react-icons/md"
import { HiEye, HiEyeOff } from "react-icons/hi"
import { ImUser } from "react-icons/im";

function Register() {
    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [show, setShow] = useState(false)
    const [show1, setShow1] = useState(false)

    /* EVENTO PARA VISUALIZAR OU NÃO A SENHA */
    const handleClick = (e) => {
        e.preventDefault()
        setShow(!show);
    }

    const handleClick1 = (e1) => {
        e1.preventDefault()
        setShow1(!show1);
    }

    return (
        <div className="login">
            <div className="login-logo">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/1828/1828506.png" alt="MdLockLogin App" />
            </div>
            <div className="login-right">
                <h1>Login Project - CRF2A</h1>
                    <h2>Cadastro</h2>
                <div className="login-loginInputNome">
                    <ImUser />
                    <input type="text" placeholder="Digite seu Nome" value={nome} onChange={e => setNome(e.target.value)}/>
                </div>
                <div className="login-loginInputSobrenome">
                    <ImUser />
                    <input type="text" placeholder="Digite seu Sobrenome" value={sobrenome} onChange={e => setSobrenome(e.target.value)}/>
                </div>
                <div className="login-loginInputEmail">
                    <MdEmail />
                    <input type="email" placeholder="Digite um e-mail" value={email} onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className="login-loginInputPassword">
                    <MdLock />
                    <input placeholder="Digite uma senha" type={show ? "text" : "password"} value={password} onChange={e => setPassword(e.target.value)}/>
                    <div className="login-eye">
                        {show ? (<HiEye size={20} onClick={handleClick}/>) : 
                        (<HiEyeOff size={20} onClick={handleClick}/>)}
                    </div>
                </div>
                <div className="login-loginInputPasswordConfirm">
                    <MdLock />
                    <input placeholder="Confirme sua senha" type={show1 ? "text" : "password"} value={passwordConfirm} onChange={e1 => setPasswordConfirm(e1.target.value)}/>
                    <div className="login-eye">
                        {show1 ? (<HiEye size={20} onClick={handleClick1}/>) : 
                        (<HiEyeOff size={20} onClick={handleClick1}/>)}
                    </div>
                </div>
                
                <button type="submit">
                    Criar Conta
                </button>
            </div>
        </div>
    )
}

export default Register;