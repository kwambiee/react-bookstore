import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const Addbook = () => {
  const[Reads, setReads]=useState({title:'',author:''})
  (
	<div className='formContainer'>
		<span className='addBook'>ADD NEW BOOK</span>
		<form className='form'>
			<input className='formTitle' type='text' placeholder='Book Title' />
			<input className='formAuthor' type='text' placeholder='Author' />
			<button type='button' className='input-submit'>
				Add book
			</button>
		</form>
	</div>;
)};

export default Addbook;
