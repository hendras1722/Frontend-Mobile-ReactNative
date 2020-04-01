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
<<<<<<< HEAD
            url: `http://20.20.20.155:4111/api/category`
=======
            url: `http://192.168.1.3:4111/category`
>>>>>>> 1f76d540beb9188ead9a9e876594f1e06a706995
        })
    }
}

export const updateCategory = (categoryId, data) => {
    return {
        type: 'UPDATE_CATEGORY',
        payload: axios({
            method: "PATCH",
<<<<<<< HEAD
            url: `http://20.20.20.155:4111/api/category/${categoryId}`,
=======
            url: `http://192.168.1.3:4111/category/${categoryId}`,
>>>>>>> 1f76d540beb9188ead9a9e876594f1e06a706995
            data: data
        })
    }
}

export const deleteCategory = (categoryId) => {
    return {
        type: 'DELETE_CATEGORY',
        payload: axios({
            method: "DELETE",
<<<<<<< HEAD
            url: `http://20.20.20.155:4111/api/category/${categoryId}`
=======
            url: `http://192.168.1.3:4111/category/${categoryId}`
>>>>>>> 1f76d540beb9188ead9a9e876594f1e06a706995
        })
    }
}

export const searchCategory = (data) => {
    return {
        type: 'SEARCH_CATEGORY',
        payload: axios({
            method: "GET",
<<<<<<< HEAD
            url: `http://20.20.20.155:4111/api/category/${data}`
=======
            url: `http://192.168.1.3:4111/category/${data}`
>>>>>>> 1f76d540beb9188ead9a9e876594f1e06a706995
        })
    }
}
