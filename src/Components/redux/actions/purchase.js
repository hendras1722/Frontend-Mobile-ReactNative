// import { REACT_APP_API_URL } from 'react-native-dotenv'
import axios from 'axios'

export const purchaseCheckout = (data) => {
    return {
        type: "CHECKOUT_PURCHASE",
        payload: axios({
            method: "POST",
            url: `http://192.168.43.152:4111/purchase`,
            data: data
        })
    }
}

export const readPurchase = () => {
    return {
        type: "READ_PURCHASE",
        payload: axios({
            method: "GET",
            url: `http://192.168.43.152:4111/purchase`,
        })
    }
}