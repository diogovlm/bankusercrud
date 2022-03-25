import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import {DeleteUser} from "../../Services/apiCalls";

export default function Renderuser(user, index){
    const [banks, setBanks] = useState([]);
    let navigate = useNavigate();
    function DeleteButton (){
        DeleteUser(user.user.id);
        navigate('/');
    }

    function toggleShown (username){
        const shownState = banks.slice();
        const bankIndex = shownState.indexOf(username);
        if(bankIndex >= 0){
            shownState.splice(index, 1);
            setBanks(shownState);
        }
        else{
            shownState.push(username);
            setBanks(shownState);
        }
    }

    return(
        <>
        <tr key={index} className="row-container">
            <td>
                <button onClick={DeleteButton}>X</button>
            </td>
            <td>
                <button>Update</button>
            </td>
            <td> 
                {user.user.name}
            </td>
            <td>
                {user.user.cpf}
            </td>
            <td>
                {user.user.email}
            </td>
            <td>
                <button onClick={()=>toggleShown(user.user.name)}>Bancos</button>
            </td>
        </tr>
        {banks.includes(user.user.name) &&(
        <>
            <tr>
                <td>pudim</td>
            </tr>
            <button>Adicionar banco</button>
        </>
        )}
        </>
    )
}