import React, {useState, useEffect} from "react";
import Navbar from "../../Components/Navbar/Navbar";
import RenderUser from "../../Components/RenderUser/RenderUser";
import {GetAllUsers, NumberPages} from "../../Services/apiCalls";
import './Users.css'

export default function Users () {
    const [allUsers, setAllUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [loaded, setLoaded] = useState(false);
    const [maxPages, setMaxPages] = useState(1);

    const LIMIT_PAGE = 5;

    useEffect (()=>{
        async function getPages(){
            const response = await NumberPages();
            setMaxPages(response);
        }
        getPages();
    },[maxPages])

    useEffect(() => {
        async function getUsers(){
            const response = await GetAllUsers(page, LIMIT_PAGE);
            setAllUsers(response);
            setLoaded(true);
        }
        getUsers();
      }, [page]);

    useEffect(()=>{
        if(loaded){
            setLoaded(false);
        }
    },[loaded])

    //Minus one in users pagination
    function PreviousPage (){
            setPage(page-1);
    }

    //Plus one in users pagination
    function NextPage () {
        setPage(page+1);
    }

    return (
        <div className="container">
            <h1>Users</h1>
                <table className="content-table">
                    <thead>
                        <tr>
                            <th>Deletar</th>
                            <th>Update</th>
                            <th>Nome</th>
                            <th>CPF</th>
                            <th>Email</th>
                            <th>Bancos</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allUsers.map((user, index)=>{
                            return(
                            <RenderUser user={user} key={index}/>
                            )
                        })}
                    </tbody>
                </table>
            <div className="button-container">
                {(page===1) ? <></> : <button onClick={PreviousPage}>Anterior</button>}
                {(page>=maxPages) ? <></> : <button onClick={NextPage}>Próxima</button>}
            </div>
            <Navbar/>
        </div>
    )
}