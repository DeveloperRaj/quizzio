import React, { useState, useContext, useEffect } from 'react';
import './styles/test.css';
import { Redirect } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';
import axios from 'axios';

//components
import Header from '../components/Header';
import Footer from '../components/Footer';
import QuestioDisplay from '../components/QuestionDisplay';
import Option from '../components/Option';

const Test = () => {
	const [loading, setLoading] = useState(true);
	const [isAllowed, setIsAllowed] = useState(false);

	const { auth, questions, currentIndex, setQuestions } = useContext(GlobalContext);

	const onMount = () => {
		const getQuestions = async () => {
		// 	try {
		// 		const res = await axios.get('/question');
		// 		const { message } = await res.data;
		// 		if (message === 'success') {
		// 			const { data } = await res.data;
		// 			setQuestions(data);
		// 		} else {
		// 			alert("Server error, please try again later");
		// 		}
		// 	} catch (error) {
		// 		console.log(error);
		// 	}	
		// }
		try {
			const res = await axios.get('/config');
			const { isTestActive } = await res.data;
			if (isTestActive) {
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
		getQuestions();
	}

	useEffect(onMount, []);

	useEffect(() => {
		if (questions.length !== 0) setLoading(false);
	}, [questions]);

	return(
		<div>
			<Header />
			{
				!auth && <Redirect to="/login" />
			}
			{
				loading && <div className="data-container loading">Loading...</div>
			}
			{
				!loading && !isAllowed && 
				<div className="data-container access-denied">
					Seems like test is over or yet not even started, please contact faculty if you think this is glitch
				</div>
			}
			{
				!loading && currentIndex >= questions.length && isAllowed && <Redirect to="/result" />
			}
			{
				currentIndex < questions.length && 
				!loading && 
				<div className="data-container">
					<QuestioDisplay text={questions[currentIndex].question} number={currentIndex+1} />
					<div className="option-container">
						{
							questions[currentIndex].options.map((opt, index) => (
								<Option text={opt} optionId={index} key={index} />
							))
						}
					</div>
				</div>
			}
			<Footer />
		</div>
	);
}

export default Test;