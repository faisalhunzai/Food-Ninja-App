import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import counterReducer from './Reducer'; 

const store = createStore(counterReducer, applyMiddleware());

export default store;


