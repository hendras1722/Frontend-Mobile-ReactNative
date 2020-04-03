import axios from 'axios';

export const login = (data) => {
    return {
        type: "LOGIN",
        payload: axios({
            method: "POST",
            url: `http://20.20.20.155:4111/account/login`,
            data: data
        })
    }
}

export const logout = () => {
    return {
        type: "LOGOUT"
    }
}

export const createAccount = (data) => {
    return {
        type: "CREATE_ACCOUNT",
        payload: axios({
            method: "POST",
            url: `http://20.20.20.155:4111/account`,
            data: data
        })
    }
}

export const updateAccount = (accountId, data) => {
    console.log(data)
    return {
        type: 'UPDATE_ACCOUNT',
        payload: axios({
            method: "PATCH",
            url: `http://20.20.20.155:4111/account/${accountId}`,
            data: data
        })
    }
}