import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { bookAdded } from '../Redux/books/books';
import { postBook } from '../Redux/books/books';

const Addbook = () => {
	const initialBookState = {
		item_id: 1,
		title: '',
		author: '',
		category: 'Favorites',
	};
	const [bookState, setBookState] = useState(initialBookState);

	const dispatch = useDispatch();

	const handleOnChange = (event) => {
		const { name, value } = event.target;
		setBookState({ ...bookState, [name]: value });
	};

	const handleSubmit = () => {
		const { title, author } = bookState;
		dispatch(postBook({ title, author })).then((data) => {
			setBookState({
				item_id: data.id,
				title: data.title,
				author: data.author,
				category: data.category,
			});
		});
		setBookState('');
	};
	return (
		<div className='formContainer'>
			<span className='addBook'>ADD NEW BOOK</span>
			<form className='form'>
				<input
					className='formTitle'
					type='text'
					name='title'
					placeholder='Book Title'
					onChange={handleOnChange}
				/>
				<input
					className='formAuthor'
					type='text'
					name='author'
					placeholder='Author'
					onChange={handleOnChange}
				/>
				<button type='button' className='input-submit' onClick={handleSubmit}>
					Add book
				</button>
			</form>
		</div>
	);
};

export default Addbook;
