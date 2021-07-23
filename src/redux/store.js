// import {createStoreHook} from "react-redux";

import {createStore} from 'redux'
import itemReducer from "./reducers/itemReducer";

export default createStore(itemReducer);