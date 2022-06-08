import axios from 'axios';

const BOOK_ADDED = './react-bookstore/bookreducer/BOOK_ADDED';
const BOOK_DELETED = './react-bookstore/bookreducer/BOOK_DELETED';
const BOOK_POSTED = './react-bookstore/bookreducer/POST_BOOK';
const BOOK_RETRIEVED = './react-bookstore/bookreducer/GET_BOOK';
const BOOK_FAILURE = './react-bookstore/bookreducer/BOOK_FAILURE';

const baseUrl =
	'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const apiKey = '2esARPzzJhTQnTpX7VBI';

const initialState = [];

export const postBook = (book) => {
	return async () => {
		await axios.post(`${baseUrl}/apps/${apiKey}/books`, book);
	};
};

export const fetchBooks = () => {
	return async (dispatch) => {
		await axios.get(`${baseUrl}/apps/${apiKey}/books`).then(
			(response) => dispatch(bookAdded(response.data)),
			(err) => dispatch({ type: BOOK_FAILURE, err })
		);
	};
};

export const bookAdded = (books) => ({
	type: BOOK_ADDED,
	payload: books,
});

export const deleteBook = (id) => ({
	type: BOOK_DELETED,
	id,
});

export default function bookReducer(state = initialState, action) {
	switch (action.type) {
		case BOOK_ADDED:
			const books = Object.entries(action.payload);
			return books.map((book) => {
				return {
					id: book[0],
					...book[1][0],
				};
			});
		case BOOK_DELETED:
			return state.filter((book) => book.id !== action.id);
		default:
			return state;
	}
}
