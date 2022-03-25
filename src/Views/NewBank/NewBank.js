import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { CreateBankAccount, GetAllBanks, GetAllUsers } from "../../Services/apiCalls";

export default function NewBank () {
    
    const [accountName, setAccountName] = useState('');
    const [agency, setAgency] = useState('');
    const [agencyDigit, setAgencyDigit] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [accountDigit, setAccountDigit] = useState('');
    const [accountType, setAccountType] = useState('');
    const [bankList, setBankList] = useState([]);
    const [user, setUser] = useState([]);
    const [bank, setBank] = useState('');

    let navigate = useNavigate();
    
    useEffect(()=>{
        async function getInfo (){
            const response = await GetAllBanks();
            const data = await GetAllUsers();
            setBankList(response);
            setUser(`/users/${data[data.length-1].id}`);
        }
        getInfo();
    },[])
    
    const handleSubmit = () => {
        setUser(`/api/users/${user}`)
        CreateBankAccount(accountName, agency, agencyDigit, accountNumber, accountDigit, accountType, user, bank)
        navigate('/');
    }

    return (
        <div>
            <h1>Adicionar Conta</h1>
            <form>
                <label>Nome da conta </label>
                <input name='name' onChange={(e)=>setAccountName(e.target.value)}/>
                <label>Agência </label>
                <input name='agency' onChange={(e)=>setAgency(e.target.value)}/>
                <label>-</label>
                <input name='agencyDigit' onChange={(e)=>setAgencyDigit(e.target.value)}/>
                <label>Conta</label>
                <input name='accountNumber' onChange={(e)=>setAccountNumber(e.target.value)}/>
                <label>-</label>
                <input name='accountDigit' onChange={(e)=>setAccountDigit(e.target.value)}/>
                <label>Tipo de Conta</label>
                <input name='accountType' onChange={(e)=>setAccountType(e.target.value)}/>
                <label>Banco</label>
                <select onChange={(e)=>setBank(e.target.value)}>
                    <option>Selecione seu Banco</option>
                    {bankList.map((banks)=>{
                        return(
                        <option key={banks.id} value={`/banks/${banks.id}`}>{banks.id} {banks.name}</option>)
                    })}
                </select>
                <button type='button' onClick={handleSubmit}>Enviar</button>
            </form>
        </div>
    )
}