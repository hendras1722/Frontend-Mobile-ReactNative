// import { REACT_APP_API_URL } from 'react-native-dotenv'
import axios from 'axios'

export const purchaseCheckout = (data) => {
    return {
        type: "CHECKOUT_PURCHASE",
        payload: axios({
            method: "POST",
            url: `http://20.20.20.155:4111/purchase`,
            data: data
        })
    }
}

export const readPurchase = () => {
    return {
        type: "READ_PURCHASE",
        payload: axios({
            method: "GET",
            url: `http://20.20.20.155:4111/purchase`,
        })
    }
}