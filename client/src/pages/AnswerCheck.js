import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/answercheck.css'

import Header from '../components/Header';
import Footer from '../components/Footer';
import Answer from '../components/Answer';

const AnswerCheck = () => {

	const [loading, setLoading] = useState(true);
	const [questions, setQuestions] = useState([]);
	const [isAllowed, setIsAllowed] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get('/config');
				const { allowSeeCorrect } = await res.data;
				if (allowSeeCorrect) {
					setIsAllowed(true);
					try {
						const res = await axios.get('/question');
						const { message } = await res.data;
						if (message === 'success') {
							const { data } = await res.data;
							setQuestions(data);
						} else {
							alert("we got some server error");
						}
					} catch (error) {
						alert("something went wrong2");
					}
				}
				setLoading(false);
			} catch (error) {
				alert("something went wrong1");
			}
		}
		fetchData();
	});

	return(
		<div>
			<Header />
			{
				loading && <div className="data-container loading">Loading...</div>
			}
			{
				!loading && !isAllowed && 
				<div className="data-container access-denied">
					You can't access this page right now, come again later when access is allowed from faculty
				</div>
			}
			{
				!loading && isAllowed &&
				<div className="data-container">
					{
						questions.map((q, index) => (
							<Answer question={q.question} answer={q.options[q.correct]} />
						))
					}
				</div>
			}
			<Footer />
		</div>
	);
}

export default AnswerCheck;