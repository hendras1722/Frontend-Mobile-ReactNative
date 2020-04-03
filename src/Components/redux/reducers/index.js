import { combineReducers } from 'redux';

import auth from './auth';
import products from './product';
import accounts from './account';
import regions from './region'
import carts from './cart';
import purchases from './purchase';

export default combineReducers({
    auth,
    products,
    accounts,
    regions,
    carts,
    purchases
});