import React, { useEffect, useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Timer = () => {

	const [timer, setTimer] = useState(0);
	const [timerInterval, setTimerInterval] = useState(null);
	const { currentIndex, incCurrentIndex } = useContext(GlobalContext);

	const startTimer = () => {
		const interval = setInterval(
			() => setTimer(timer => timer + 1),
			1000
		);
		setTimerInterval(interval);
	}

	const stopTimer = () => {
		clearInterval(timerInterval);
	}

	const resestTimer = () => {
		setTimer(0);
	}

	const onTimerChanged = () => {
		if (timer === 61) {
			incCurrentIndex();
		}
	}

	const onCurrentIndexChange = () => {
		stopTimer();
		resestTimer();
		startTimer();
	}

	useEffect(onTimerChanged, [timer]);
	useEffect(onCurrentIndexChange, [currentIndex]);
	useEffect(() => {
		return () => {
			stopTimer();
			resestTimer();
		}
	}, []);

	return(
		<div>{timer}</div>
	);
}

export default Timer;