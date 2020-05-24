import React, { useContext, useEffect } from 'react';
import './styles/result.css';
import { GlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom';
import axios from 'axios';
  
import Header from '../components/Header';
import Footer from '../components/Footer';

const Result = () => {

	const { questions, score } = useContext(GlobalContext);

	useEffect(() => {
		const addStudent = async () => {
			if (questions.length !== 0) {
				try {
					const res = await axios.post('/students/add', { name: localStorage.getItem('name'), enrollment: localStorage.getItem('enroll'), score });
					const { message } = await res.data;
					if (message === 'success') {
						alert("Thanks for giving exam");
					} else {
						alert("Error, please check your internet connection");
					}
				} catch (error) {
					console.log("error");
				}
			}
		}
		addStudent();
	}, []);

	return(
		<div>
			<Header />
			{
				questions.length !== 0 &&
				<div className="data-container results">
					<div className="marks">{ score }/{ questions.length }</div>
					<div className="pass-fail">
					{
						score >= (Math.round((questions.length * 33) / 100)) ? <span>Congrats, you passed exam!!</span> : <span>Sorry, you failed.</span>
					}
					</div>
					<Link to="/">Continue</Link>
				</div>
			}
			{
				questions.length === 0 &&
				<div className="data-container results" style={{ textAlign: 'center' }}>
					Please Goto test and give your attempt before checking result
					<Link to="/test">Give Test</Link>
				</div>
			}
			<Footer />
		</div>
	);
}

export default Result;