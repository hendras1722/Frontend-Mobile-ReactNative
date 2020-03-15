// import { REACT_APP_API_URL } from 'react-native-dotenv'
import axios from 'axios';

export const createProduct = (data) => {
    return {
        type: 'CREATE_PRODUCT',
        payload: axios({
            method: "POST",
            url: `http://192.168.1.17:4111/product`,
            data: data
        })
    }
}

export const readProduct = () => {
    return {
        type: 'READ_PRODUCT',
        payload: axios({
            method: "GET",
            url: `http://192.168.1.17:4111/product`
        })
    }
}

export const readProductImport = () => {
    return {
        type: 'READ_PRODUCT_IMPORT',
        payload: axios({
            method: "GET",
            url: `http://192.168.1.17:4111/product/?group=1`
        })
    }
}

export const readProductLocal = () => {
    return {
        type: 'READ_PRODUCT_LOCAL',
        payload: axios({
            method: "GET",
            url: `http://192.168.1.17:4111/product/?group=2`
        })
    }
}

export const updateProduct = (productId, data) => {
    return {
        type: 'UPDATE_PRODUCT',
        payload: axios({
            method: "PATCH",
            url: `http://192.168.1.17:4111/product/${productId}`,
            data: data
        })
    }
}

export const deleteProduct = (productId) => {
    return {
        type: 'DELETE_PRODUCT',
        payload: axios({
            method: "DELETE",
            url: `http://192.168.1.17:4111/product/${productId}`
        })
    }
}

export const detailProduct = (productId) => {
    return {
        type: 'DETAIL_PRODUCT',
        payload: axios({
            method: "GET",
            url: `http://192.168.1.17:4111/product/${productId}`
        })
    }
}