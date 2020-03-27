const initialState = {
    purchases: []
}

const purchase = (state = initialState, action) => {
    switch (action.type) {
        case 'CHECKOUT_PURCHASE_PENDING':
            return {
                ...state
            }
        case 'CHECKOUT_PURCHASE_REJECTED':
            return {
                ...state
            }
        case 'CHECKOUT_PURCHASE_FULFILLED':
            return {
                ...state,
                purchases: action.payload.data.result
            }

        case 'READ_PURCHASE_PENDING':
            return {
                ...state
            }
        case 'READ_PURCHASE_REJECTED':
            return {
                ...state
            }
        case 'READ_PURCHASE_FULFILLED':
            return {
                ...state,
                purchases: action.payload.data.result
            }
        default:
            return state;
    }
}

export default purchase