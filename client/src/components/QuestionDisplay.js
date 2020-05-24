import React, { useState } from 'react';
import './styles/questiondisplay.css';

import Timer from './Timer';

const QuestionDisplay = ({ text, number }) => {

	const [timer, setTimer] = useState(0);

	return(
		<div className="question-display-container">
			<div className="counter-container">
				<Timer timer={timer} setTimer={setTimer} />
			</div>
			<div className="question">
				{number}.) { text }
			</div>
		</div>
	);
}

export default QuestionDisplay;