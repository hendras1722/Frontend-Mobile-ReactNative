const initialState = {
    province: [],
    city: [],
    subcity: []
}

const region = (state = initialState, action) => {
    switch (action.type) {
        case 'READ_PROVINCE_PENDING':
            return {
                ...state
            }
        case 'READ_PROVINCE_REJECTED':
            return {
                ...state
            }
        case 'READ_PROVINCE_FULFILLED':
            return {
                ...state,
                province: action.payload.data.result
            }

        case 'READ_CITY_PENDING':
            return {
                ...state
            }
        case 'READ_CITY_REJECTED':
            return {
                ...state
            }
        case 'READ_CITY_FULFILLED':
            return {
                ...state,
                city: action.payload.data.result
            }

        case 'READ_SUB_CITY_PENDING':
            return {
                ...state
            }
        case 'READ_SUB_CITY_REJECTED':
            return {
                ...state
            }
        case 'READ_SUB_CITY_FULFILLED':
            return {
                ...state,
                subcity: action.payload.data.result
            }

        default:
            return state;
    }
}

export default region