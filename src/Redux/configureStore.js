import { createStore, combineReducers } from 'redux';
import bookReducer from './books/books';
import statusReducer from './categories/categories';


const rootReducer = combineReducers({
    bookReducer,
    statusReducer
})

const store = createStore(rootReducer)

export default store;

