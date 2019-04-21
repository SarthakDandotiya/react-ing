import React from 'react';

// Stateless Functional Component
const Navbar = ({ totalCounters }) => {
	return (
		<nav className='navbar navbar-light bg-light'>
			<a className='navbar-brand font-weight-bold' href='/'>
				Items{' '}
				<span className='badge badge-success'>{totalCounters}</span>
			</a>
		</nav>
	);
};

export default Navbar;
