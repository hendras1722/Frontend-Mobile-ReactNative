const initialState = {
    carts: [],
    total: 0
}

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CART_DATA':
            let filterCartId = state.carts.map(product => {
                if (product.id === action.payload.id) {
                    product.quantity += 1

                    return action.payload
                }
                return product
            })

            let existedCartData = state.carts.find(product => product.id === action.payload.id)
            // console.log(filterCartId)
            // console.log(existedCartData)
            if (existedCartData) { // kalo ada
                return {
                    ...state,
                    carts: filterCartId,
                    total: state.total + existedCartData.price// state.total + action.payload.price
                }
            }
            else { // kalo gaada
                let newTotal = state.total + action.payload.price
                action.payload.quantity = 1;
                return {
                    ...state,
                    carts: [...state.carts, action.payload],
                    total: newTotal
                }
            }

        case 'DELETE_CART_DATA':
            const filterCartIdForDelete = state.carts.filter(product => product.id !== action.payload)
            let existedCartDelete = state.carts.find(product => product.id === action.payload)
            if (existedCartDelete) {
                return {
                    ...state,
                    carts: filterCartIdForDelete,
                    total: state.total - existedCartDelete.price * existedCartDelete.quantity
                }
            }

        case 'ADD_QUANTITY':
            const addQty = state.carts.map(product => {
                if (product.id === action.payload) {
                    product.quantity += 1
                }
                return product
            })
            let existedCartAdd = state.carts.find(product => product.id === action.payload)
            if (existedCartAdd.quantity > existedCartAdd.quantity) { // kalo ada
                existedCartAdd.quantity = existedCartAdd.quantity;
                return {
                    ...state,
                }
            } else {
                return {
                    ...state,
                    carts: addQty,
                    total: state.total + existedCartAdd.price
                }
            }

        case 'REDUCE_QUANTITY':
            const reduceQty = state.carts.map(product => {
                if (product.id === action.payload) {
                    product.quantity = product.quantity - 1
                }
                return product
            })
            let existedCartReduce = state.carts.find(product => product.id === action.payload)
            if (existedCartReduce.quantity <= 0) { // kalo ada
                // alert("Cannot Reduce Below 0! ext (-1 -2 -3)")
                existedCartReduce.quantity = 1;
                return {
                    ...state,
                }
            } else {
                return {
                    ...state,
                    carts: reduceQty,
                    total: state.total - existedCartReduce.price
                }
            }

        case 'CANCEL_CART_DATA':
            return {
                ...state,
                carts: [],
                total: 0
            }

        default:
            return state
    }
}

export default cart;