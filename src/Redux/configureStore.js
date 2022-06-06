import { createStore, combineReducers } from 'redux';
import bookReducer from './books/books';
import statusReducer from './categories/categories';

const rootReducer = Redux.combineReducers({
    bookReducer,
    statusReducer
})

const store = Redux.createStore(rootReducer)