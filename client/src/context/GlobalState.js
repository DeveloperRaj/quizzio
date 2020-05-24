import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
	questions: [],
	currentIndex: 0,
  	score: 0,
  	auth: (localStorage.getItem('name') && localStorage.getItem('enroll')) ? true : false
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {

	const [state, dispatch] = useReducer(AppReducer, initialState);

	const incCurrentIndex = () => {
		dispatch({
			type: "INC_INDEX",
		});
	}

	const setQuestions = (questions) => {
		dispatch({
			type: "SET_QUESTIONS",
			payload: questions
		});
	}

	const scoreChecker = (ans, correctAns) => {
	    if (ans === correctAns) {
	      dispatch({
	        type: "INC_SCORE"
	      });
	    }
	}

	const toggleAuth = () => {
		dispatch({
			type: "TOGGLE_AUTH"
		});
	}

	const providerValues = {
		questions: state.questions,
		currentIndex: state.currentIndex,
		incCurrentIndex,
		setQuestions,
		score: state.score,
		scoreChecker,
		auth: state.auth,
		toggleAuth
	};

	return(
		<GlobalContext.Provider value={providerValues}>
			{children}
		</GlobalContext.Provider>
	);
}