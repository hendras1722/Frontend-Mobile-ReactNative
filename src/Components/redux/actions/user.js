// import { REACT_APP_API_URL } from 'react-native-dotenv'
import axios from 'axios';

export const loginUser = (data) => {
    return {
        type: "LOGIN_USER",
        payload: axios({
            method: "POST",
            url: `http://192.168.1.3:4111/account/login`,
            data: data
        })
    }
}

export const createUser = (data) => {
    return {
        type: "CREATE_USER",
        payload: axios({
            method: "POST",
            url: `http://192.168.1.3:4111/account`,
            data: data
        })
    }
}

export const readUser = () => {
    return {
        type: 'READ_USER',
        payload: axios({
            method: 'GET',
            url: `http://192.168.1.3:4111/account`
        })
    }
}

export const updateAccount = (accountId, data) => {
    return {
        type: 'UPDATE_ACCOUNT',
        payload: axios({
            method: "PATCH",
            url: `http://192.168.1.3:4111/account/${accountId}`,
            data: data
        })
    }
}

export const deleteUser = (accountId) => {
    return {
        type: 'DELETE_USER',
        payload: axios({
            method: "DELETE",
            url: `http://192.168.1.3:4111/account/${accountId}`
        })
    }
}