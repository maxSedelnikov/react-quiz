import React from 'react';
import AnswerItem from './AnswerItem/AnswerItem';
import classes from './AnswersList.module.css';

const AnswersList = (props) => {
	return (
		<ul className={classes.AnswersList}>
			{props.answers.map((answer, index) => {
				return (
					<AnswerItem
						answer={answer}
						key={index}
						onAnswerClick={props.onAnswerClick}
						state={props.state ? props.state[answer.id] : null}
					/>
				);
			})}
		</ul>
	);
};

export default AnswersList;
