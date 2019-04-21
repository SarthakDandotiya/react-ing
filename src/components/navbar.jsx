import React, { Component } from 'react';

// Stateless Functional Component
const Navbar = props => {
	return (
		<nav className='navbar navbar-light bg-light'>
			<a className='navbar-brand font-weight-bold' href='/'>
				Items{' '}
				<span className='badge badge-success'>
					{props.totalCounter}
				</span>
			</a>
		</nav>
	);
};

export default Navbar;
