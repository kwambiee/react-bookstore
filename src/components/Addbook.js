import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const Addbook = () => {
	const [reads, setReads] = useState({ title: '', author: '' });
	const bookAdded = (e) => {
		setReads({
			[e.target.name]: e.target.value,
		});
	};

	<div className='formContainer'>
		<span className='addBook'>ADD NEW BOOK</span>
		<form className='form' onSubmit={bookAdded}>
			<input
				className='formTitle'
				type='text'
				name='title'
				placeholder='Book Title'
				value={reads.value}
			/>
			<input
				className='formAuthor'
				type='text'
				name='author'
				placeholder='Author'
				value={reads.value}
			/>
			<button type='button' className='input-submit'>
				Add book
			</button>
		</form>
	</div>;
};

export default Addbook;
