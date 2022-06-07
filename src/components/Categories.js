import React from 'react';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../Redux/categories/categories';

function Categories() {
	const dispatch = useDispatch();
	return (
		<div className='category'>
			<button
				className='status'
				type='submit'
				onClick={() => {
					dispatch(checkStatus());
				}}
			>
				Check Status
			</button>
		</div>
	);
}

export default Categories;
