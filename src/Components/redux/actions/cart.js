export const addToCart = (data) => {
    return {
        type: "ADD_CART_DATA",
        payload: data
    }
}

export const deleteCart = (data) => {
    return {
        type: 'DELETE_CART_DATA',
        payload: data
    }
}

export const addQty = (id) => {
    return {
        type: 'ADD_QUANTITY',
        payload: id
    }
}

export const reduceQty = (id) => {
    return {
        type: 'REDUCE_QUANTITY',
        payload: id
    }
}

export const cancleCart = (data) => {
    return {
        type: 'CANCEL_CART_DATA',
        method: "DELETE",
        payload: data
    }
}

export const clearCart = (data) => {
    return {
        type: 'CLEAR_CART_DATA',
        method: "DELETE",
        payload: data
    }
}