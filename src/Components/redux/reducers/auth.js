const initialState = {
    isAuthenticated: false,
    profile: {},
    account: []
}

const auth = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_PENDING':
            return {
                ...state,
                isAuthenticated: false,
                profile: {}
            }
        case 'LOGIN_REJECTED':
            return {
                ...state,
                isAuthenticated: false,
                profile: {}
            }
        case 'LOGIN_FULFILLED':
            return {
                ...state,
                isAuthenticated: true,
                profile: action.payload.data.result
            }

        case 'LOGOUT':
            return {
                ...state,
                isAuthenticated: false,
                profile: {}
            }

        case 'CREATE_ACCOUNT_PENDING':
            return {
                ...state,
                isAuthenticated: false,
                profile: {}
            }
        case 'CREATE_ACCOUNT_REJECTED':
            return {
                ...state,
                isAuthenticated: false,
                profile: {}
            }
        case 'CREATE_ACCOUNT_FULFILLED':
            return {
                ...state,
                isAuthenticated: false,
                account: action.payload.data.result
            }

        case 'UPDATE_ACCOUNT_PENDING':
            return {
                ...state,
                isAuthenticated: false,
                profile: {}
            }
        case 'UPDATE_ACCOUNT_REJECTED':
            return {
                ...state,
                isAuthenticated: false,
                profile: {}
            }
        case 'UPDATE_ACCOUNT_FULFILLED':
            return {
                ...state,
                isAuthenticated: false,
                account: action.payload.data.result
            }
        default:
            return state;
    }
}

export default auth;