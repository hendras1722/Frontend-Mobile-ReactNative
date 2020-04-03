// import { REACT_APP_API_URL } from 'react-native-dotenv'
import axios from 'axios';

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

export const readAccount = () => {
    return {
        type: 'READ_ACCOUNT',
        payload: axios({
            method: 'GET',
            url: `http://20.20.20.155:4111/account`
        })
    }
}

export const updateAccount = (accountId, data) => {
    return {
        type: 'UPDATE_ACCOUNT',
        payload: axios({
            method: "PATCH",
            url: `http://20.20.20.155:4111/account/${accountId}`,
            data: data
        })
    }
}

export const deleteAccount = (accountId) => {
    return {
        type: 'DELETE_ACCOUNT',
        payload: axios({
            method: "DELETE",
            url: `http://20.20.20.155:4111/account/${accountId}`
        })
    }
}