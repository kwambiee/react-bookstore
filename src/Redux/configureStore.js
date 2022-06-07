import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import statusReducer from './categories/categories';

const rootReducer = combineReducers({
  bookReducer,
  statusReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
