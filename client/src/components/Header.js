import React, { useState, useContext } from 'react';
import './styles/header.css';
import menu from '../assets/icons/menu.svg';
import { Link } from 'react-router-dom';

import { GlobalContext } from '../context/GlobalState';

const Header = () => {

	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { auth } = useContext(GlobalContext);

	return(
		<header>
			<div className="logo-burger-container">
				<div className="logo-container">
					<span>Q</span>uizzi<span>o</span>
				</div>
				<div className="burger-menu-container" onClick={() => setIsMenuOpen(!isMenuOpen)}>
					<img src={menu} alt="menu btn" />
				</div>
			</div>
			<div className="menu-options-container" style={{ top: isMenuOpen ? '70px' : '-100%' }}>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/test">Give Test</Link></li>
					<li><Link to="/answer">Answers</Link></li>
					{!auth && <li><Link to="/login">Login</Link></li>}
					{auth && <li><Link to="/logout">Logout</Link></li>}
				</ul>
			</div>
		</header>
	);
}

export default Header;