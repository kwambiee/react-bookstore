const BOOK_ADDED = './react-bookstore/bookreducer/BOOK_ADDED';
const BOOK_DELETED = './react-bookstore/bookreducer/BOOK_DELETED';

const baseUrl =
	'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const apiKey = 'LP80sdfnevJyEHbzDpGP';

const initialState = [];

export const postBook = (book) => {
	return async (dispatch) => {
		await fetch(`${baseUrl}/apps/${apiKey}/books`, {
			method: 'POST',
			body: JSON.stringify(book),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		})
			.then((response) => response.data)
			.then((response) => {
				dispatch({ type: BOOK_ADDED, payload: response.data });
			});
	};
};

const fetchBooks = () => {
	return async (dispatch) => {
		await fetch(`${baseUrl}/apps/${apiKey}/books`)
			.then((response) => response.data)
			.then((response) => {
				dispatch({ type: BOOK_ADDED, payload: response.data });
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
