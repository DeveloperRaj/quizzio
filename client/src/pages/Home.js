import React from 'react';
import './styles/home.css';
import { Link } from 'react-router-dom';

//importing components
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
	return (
		<div>
			<Header />
			<div className="banner">
				<p>Are you all set to answer quizz and increase your knowledge?</p>
				<p>SUCCESS AWAITS YOU</p>
				<Link to="/test">Give Test</Link>
			</div>
			<Footer />
		</div>
	);
}

export default Home;