import { combineReducers } from "redux";

import { items, itemsHasError, itemsIsLoading } from './items';

export default combineReducers({
    items,
    itemsHasError,
    itemsIsLoading
});