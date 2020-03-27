import axios from 'axios'

export const readProvince = () => {
    return {
        type: 'READ_PROVINCE',
        payload: axios({
            method: "GET",
            url: `http://192.168.1.3:4111/province`
        })
    }
}

export const readCity = () => {
    return {
        type: 'READ_CITY',
        payload: axios({
            method: "GET",
            url: `http://192.168.1.3:4111/city`
        })
    }
}

export const readSubCity = () => {
    return {
        type: 'READ_SUB_CITY',
        payload: axios({
            method: "GET",
            url: `http://192.168.1.3:4111/subcity`
        })
    }
}