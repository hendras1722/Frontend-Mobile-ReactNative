import AsyncStorage from '@react-native-community/async-storage';

const initialState = {
    users: [],
    id: "",
    email: "",
    first_name: "",
    last_name: "",
    id_province: "",
    id_city: "",
    id_sub_city: "",
    address: "",
    no_telephone: "",
    image: "",
    role: "",
    token: ""
}

async function setId(id) {
    try {
        await AsyncStorage.setItem("id", id)
    } catch (error) {
        console.log(error)
    }
}

async function setEmail(email) {
    try {
        await AsyncStorage.setItem("email", email)
    } catch (error) {
        console.log(error)
    }
}

async function setFirst_name(first_name) {
    try {
        await AsyncStorage.setItem("first_name", first_name)
    } catch (error) {
        console.log(error)
    }
}

async function setLast_name(last_name) {
    try {
        await AsyncStorage.setItem("last_name", last_name)
    } catch (error) {
        console.log(error)
    }
}

async function setId_province(id_province) {
    try {
        await AsyncStorage.setItem("id_province", id_province)
    } catch (error) {
        console.log(error)
    }
}

async function setId_city(id_city) {
    try {
        await AsyncStorage.setItem("id_city", id_city)
    } catch (error) {
        console.log(error)
    }
}

async function setId_sub_city(id_sub_city) {
    try {
        await AsyncStorage.setItem("id_sub_city", id_sub_city)
    } catch (error) {
        console.log(error)
    }
}

async function setAddress(address) {
    try {
        await AsyncStorage.setItem("address", address)
    } catch (error) {
        console.log(error)
    }
}

async function setNo_telephone(no_telephone) {
    try {
        await AsyncStorage.setItem("no_telephone", no_telephone)
    } catch (error) {
        console.log(error)
    }
}

async function setImage(image) {
    try {
        await AsyncStorage.setItem("image", image)
    } catch (error) {
        console.log(error)
    }
}

async function setRole(role) {
    try {
        await AsyncStorage.setItem("role", role)
    } catch (error) {
        console.log(error)
    }
}

async function setToken(token) {
    try {
        await AsyncStorage.setItem("token", token)
    } catch (error) {
        console.log(error)
    }
}

const user = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_USER_PENDING':
            return {
                ...state
            }
        case 'LOGIN_USER_REJECTED':
            return {
                ...state
            }
        case 'LOGIN_USER_FULFILLED':
            let IdJSON = setId(JSON.stringify(action.payload.data.result.id))
            let emailJSON = setEmail(JSON.stringify(action.payload.data.result.email))
            let First_nameJSON = setFirst_name(JSON.stringify(action.payload.data.result.first_name))
            let Last_nameJSON = setLast_name(JSON.stringify(action.payload.data.result.last_name))
            let Id_provinceJSON = setId_province(JSON.stringify(action.payload.data.result.id_province))
            let Id_cityJSON = setId_city(JSON.stringify(action.payload.data.result.id_city))
            let Id_sub_cityJSON = setId_sub_city(JSON.stringify(action.payload.data.result.id_sub_city))
            let AddressJSON = setAddress(JSON.stringify(action.payload.data.result.address))
            let No_telephoneJSON = setNo_telephone(JSON.stringify(action.payload.data.result.no_telephone))
            let ImageJSON = setImage(JSON.stringify(action.payload.data.result.image))
            let RoleJSON = setRole(JSON.stringify(action.payload.data.result.role))
            let TokenJSON = setToken(JSON.stringify(action.payload.data.result.token))
            return {
                ...state,
                users: action.payload.data.result,
                id: IdJSON,
                email: emailJSON,
                first_name: First_nameJSON,
                last_name: Last_nameJSON,
                id_province: Id_provinceJSON,
                id_city: Id_cityJSON,
                id_sub_city: Id_sub_cityJSON,
                address: AddressJSON,
                no_telephone: No_telephoneJSON,
                image: ImageJSON,
                role: RoleJSON,
                token: TokenJSON
            }

        case 'CREATE_USER_PENDING':
            return {
                ...state
            }
        case 'CREATE_USER_REJECTED':
            return {
                ...state
            }
        case 'CREATE_USER_FULFILLED':
            return {
                ...state,
                users: action.payload.data.result
            }

        case 'READ_USER_PENDING':
            return {
                ...state
            }
        case 'READ_USER_REJECTED':
            return {
                ...state
            }
        case 'READ_USER_FULFILLED':
            return {
                ...state,
                users: action.payload.data.result
            }

        case 'UPDATE_ACCOUNT_PENDING':
            return {
                ...state,
            }

        case 'UPDATE_ACCOUNT_REJECTED':
            return {
                ...state,
            }

        case 'UPDATE_ACCOUNT_FULFILLED':
            let IdJSON_UPT = setId(JSON.stringify(action.payload.data.result[0].id))
            let emailJSON_UPT = setEmail(JSON.stringify(action.payload.data.result[0].email))
            let First_nameJSON_UPT = setFirst_name(JSON.stringify(action.payload.data.result[0].first_name))
            let Last_nameJSON_UPT = setLast_name(JSON.stringify(action.payload.data.result[0].last_name))
            let Id_provinceJSON_UPT = setId_province(JSON.stringify(action.payload.data.result[0].id_province))
            let Id_cityJSON_UPT = setId_city(JSON.stringify(action.payload.data.result[0].id_city))
            let Id_sub_cityJSON_UPT = setId_sub_city(JSON.stringify(action.payload.data.result[0].id_sub_city))
            let AddressJSON_UPT = setAddress(JSON.stringify(action.payload.data.result[0].address))
            let No_telephoneJSON_UPT = setNo_telephone(JSON.stringify(action.payload.data.result[0].no_telephone))
            let ImageJSON_UPT = setImage(JSON.stringify(action.payload.data.result[0].image))
            // let RoleJSON_UPT = setRole(JSON.stringify(action.payload.data.result[0].role))
            // let TokenJSON_UPT = setToken(JSON.stringify(action.payload.data.result[0].token))
            return {
                ...state,
                users: action.payload.data.result,
                id: IdJSON_UPT,
                email: emailJSON_UPT,
                first_name: First_nameJSON_UPT,
                last_name: Last_nameJSON_UPT,
                id_province: Id_provinceJSON_UPT,
                id_city: Id_cityJSON_UPT,
                id_sub_city: Id_sub_cityJSON_UPT,
                address: AddressJSON_UPT,
                no_telephone: No_telephoneJSON_UPT,
                image: ImageJSON_UPT,
                // role: RoleJSON_UPT,
                // token: TokenJSON_UPT
            }

        case 'DELETE_USER_PENDING':
            return {
                ...state
            }
        case 'DELETE_USER_REJECTED':
            return {
                ...state
            }
        case 'DELETE_USER_FULFILLED':
            return {
                ...state,
                users: action.payload.data.result
            }
        default:
            return state;
    }
}

export default user