import React, { useState, useContext } from 'react';
import './styles/login.css';
import { Redirect } from 'react-router-dom';

import { GlobalContext } from '../context/GlobalState';

//Login page component
const Login = () => {

	const [loggedIn, setLoggedIn] = useState(false);

	const [name, setName] = useState("");
	const [enroll, setEnroll] = useState("");

	const { toggleAuth } = useContext(GlobalContext);

	const submitHandler = (e) => {
		e.preventDefault();
		localStorage.setItem('name', name);
		localStorage.setItem('enroll', enroll);
		toggleAuth();
		setLoggedIn(true);
	}

	return(
		<React.Fragment>
		{
			loggedIn && <Redirect to="/" />
		}
		{
			!loggedIn &&
			<div className="login-container">
				<div className="greetings-container">
					<span>Welcome To Quizzio</span>
				</div>
				<div className="form-container">
					<div className="form-header">Fill you info</div>
					<form onSubmit={submitHandler}>
						<input 
							type="text" 
							placeholder="Full name"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						<input 
							type="text" 
							placeholder="Enrollment number"
							value={enroll}
							onChange={(e) => setEnroll(e.target.value)}
						/>
						<input type="submit" value="submit" />
					</form>
				</div>
			</div>
		}
		</React.Fragment>
	);

}

export default Login;