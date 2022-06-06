import { createStore, combineReducers } from 'redux';
import bookReducer from './books/books';
import statusReducer from './categories/categories';

const rootReducer = Redux.combineReducers({
    read:bookReducer,
    stat:statusReducer
})

const store = Redux.createStore(rootReducer)