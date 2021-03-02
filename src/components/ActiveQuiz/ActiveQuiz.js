import React from 'react';
import classes from './ActiveQuiz.module.css';
import AnswersList from './AnswersList/AnswersList';

const ActiveQuiz = (props) => {
	return (
		<div className={classes.ActiveQuiz}>
			<p className={classes.Question}>
				<span>
					<strong>{props.questionNumber}.</strong>&nbsp; {props.question}
				</span>
				<small>
					{props.questionNumber} из {props.quizLength}
				</small>
			</p>
			<AnswersList
				state={props.state}
				answers={props.answers}
				onAnswerClick={props.onAnswerClick}
			/>
		</div>
	);
};

export default ActiveQuiz;
