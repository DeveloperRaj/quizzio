import React, { useContext, useEffect } from 'react';
import './styles/logout.css';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';

const Logout = () => {

	const { auth, toggleAuth } = useContext(GlobalContext);

	useEffect(() => {
		if (auth) {
			localStorage.removeItem('name');
			localStorage.removeItem('enroll');
			toggleAuth();
		}
	});

	return (
		<React.Fragment>
		<div className="logout-container">
			You've been logged out
			<Link to="/">Home</Link>
			<Link to="/login">Login</Link>
		</div>
		</React.Fragment>
	);
}

export default Logout;