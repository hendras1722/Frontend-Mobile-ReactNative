// import { REACT_APP_API_URL } from 'react-native-dotenv'
import axios from 'axios';

export const createCategory = (data) => {
    return {
        type: "CREATE_CATEGORY",
        payload: axios({
            method: "POST",
            url: `http://20.20.20.155:4111/api/category`,
            data: data
        })
    }
}

export const readCategory = () => {
    return {
        type: "READ_CATEGORY",
        payload: axios({
            method: "GET",
            url: `http://20.20.20.155:4111/api/category`
        })
    }
}

export const updateCategory = (categoryId, data) => {
    return {
        type: 'UPDATE_CATEGORY',
        payload: axios({
            method: "PATCH",
            url: `http://20.20.20.155:4111/api/category/${categoryId}`,
            data: data
        })
    }
}

export const deleteCategory = (categoryId) => {
    return {
        type: 'DELETE_CATEGORY',
        payload: axios({
            method: "DELETE",
            url: `http://20.20.20.155:4111/api/category/${categoryId}`
        })
    }
}

export const searchCategory = (data) => {
    return {
        type: 'SEARCH_CATEGORY',
        payload: axios({
            method: "GET",
            url: `http://20.20.20.155:4111/api/category/${data}`
        })
    }
}
