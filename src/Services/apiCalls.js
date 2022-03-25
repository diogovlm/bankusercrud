import api from './api'

export const NumberPages = async () =>{
    let response;
    await api.get('/users').then((data)=>{
        response = data.data['hydra:member'].length
    })
    return response/5;
}

export const GetAllUsers = async (pagination, limitPage) =>{
    let response;
    await api.get('/users', {params: {page: pagination, itemsPerPage:limitPage}}).then((data)=>{
        response = data.data['hydra:member'];
    })
    return response;
}

export const GetAllBanks = async() =>{
    let response;
    await api.get('/banks').then((data)=>{
        response = data.data['hydra:member'];
    })
    return response;
}

export const GetAllBankAccounts = async (id) =>{
    let response;
    await api.get(`/users/${id}/bank_accounts`).then((data)=>{
        response = data.data;
    })
    return response;
}

export const CreateUser =  (name, cpf, email) =>{
    api.post('/users',{
        name, cpf, email
    })
}

export const CreateBankAccount =  (accountName, agency, agencyDigit, accountNumber, accountDigit, accountType, user, bank) =>{
    api.post('/bank_accounts',{
        'accountName': accountName,
        'agency': agency,
        'agencyDigit': agencyDigit,
        'accountNumber': accountNumber,
        'accountDigit': accountDigit,
        'accountType': accountType,
        'user': user,
        'bank': bank
    })
}

export const UpdateUser =  (id, name, cpf, email) =>{
    api.put(`/users/${id}`, {
        name, cpf, email
    })
}

export const UpdateBankAccount =  (id, accountName, agency, agencyDigit, accountNumber, accountDigit, accountType, user, bank) =>{
    api.put(`/bank_accounts/${id}`,{
        accountName, agency, agencyDigit, accountNumber, accountDigit, accountType, user, bank
    })
}

export const DeleteUser =  (id) =>{
    api.delete(`/users/${id}`)
}

export const DeleteBankAccount =  (id) =>{
    api.delete(`/bank_accounts/${id}`)
}