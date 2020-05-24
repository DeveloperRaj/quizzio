import React, { useContext } from 'react';
import './styles/option.css';
import { GlobalContext } from '../context/GlobalState';

const Option = ({ text, optionId }) => {

	const { questions, currentIndex, incCurrentIndex, scoreChecker } = useContext(GlobalContext);

	const clickHandler = () => {
		scoreChecker(optionId, questions[currentIndex].correct);
		incCurrentIndex();
	}

	return(
		<div className="option" onClick={clickHandler}>{ text }</div>
	);
}

export default Option;