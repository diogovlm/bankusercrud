import React, {useState} from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { CreateUser } from "../../Services/apiCalls";
import {useNavigate} from 'react-router-dom'

export default function Users () {
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');

    let navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(name!==''&&cpf!==''&&email!==''){
            CreateUser(name, cpf, email);
            navigate('/newbank');
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Nome </label>
                <input name='name' onChange={(e)=>setName(e.target.value)}/>
                <label>CPF </label>
                <input name='cpf' onChange={(e)=>setCpf(e.target.value)}/>
                <label>Email</label>
                <input name='email' onChange={(e)=>setEmail(e.target.value)}/>
                <button type='submit'>Próximo passo</button>
            </form>
            <Navbar/>
        </div>
    )
}