import { combineReducers } from 'redux';

import products from './product';
import users from './user';
import regions from './region'
import carts from './cart';
import purchases from './purchase';
// import auth from './auth';

export default combineReducers({
    products,
    users,
    regions,
    carts,
    purchases,
    // auth
});