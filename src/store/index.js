import {createStore} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import {rootReducer} from "./root-redicer";


export const store = createStore(rootReducer, composeWithDevTools())
