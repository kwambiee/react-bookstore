import axios from 'axios';

const BOOK_ADDED = './react-bookstore/bookreducer/BOOK_ADDED';
const BOOK_DELETED = './react-bookstore/bookreducer/BOOK_DELETED';
const POST_BOOK = './react-bookstore/bookreducer/POST_BOOK';
const GET_BOOK = './react-bookstore/bookreducer/GET_BOOK';

const baseUrl =
	'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const apiKey = 'LP80sdfnevJyEHbzDpGP';

const initialState = [];

export const postBook = (book) => {
	return async (dispatch) => {
		await axios
			.post(`${baseUrl}/apps/${apiKey}/books`, book)
			.then((res) => res.data)
			.then((res) => {
				dispatch(bookPosted(res.data));
			});
	};
};

export const fetchBooks = () => {
	return async (dispatch) => {
		await axios
			.get(`${baseUrl}/apps/${apiKey}/books`)
			.then((response) => console.log(response.data))
			.then((response) => {
				dispatch(retrieveBook(response.data));
			});
	};
};

export const deleteBooks = (id) => {
	return async (dispatch) => {
		await fetch(`${baseUrl}/apps/${apiKey}/books/${id}`)
			.then((response) => response.data)
			.then((response) => {
				dispatch();
			});
	};
};

export const bookAdded = (book) => ({
	type: BOOK_ADDED,
	payload: book,
});

export const deleteBook = (id) => ({
	type: BOOK_DELETED,
	id,
});

const bookPosted = () => {
	type: BOOK_POSTED;
};

const retrieveBook = () => {
	type: BOOK_RETRIEVED;
};

export default function bookReducer(state = initialState, action) {
	switch (action.type) {
		case BOOK_ADDED:
			return [...state, { id: state.length + 1, ...action.payload }];
		case BOOK_DELETED:
			return state.filter((book) => book.id !== action.id);
		default:
			return state;
	}
}
