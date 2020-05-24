import React from 'react';
import './styles/answer.css';

const Answer = ({ question, answer }) => {
	return(
		<div className="qna-container">
			<div>Q.) {question}</div>
			<div>
				Ans.) { answer }
			</div>
		</div>
	);
}

export default Answer;