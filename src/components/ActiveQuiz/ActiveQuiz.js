import React from 'react'

import AnswersList from './AnswersList/AnswersList'

import './ActiveQuiz.scss'

const ActiveQuiz = (props) => {
    return(
        <div className = 'ActiveQuiz'>
            <div className = 'Question'>
                <span className = 'QuestionTitle'>
                    <strong>2.</strong>&nbsp;
                    {props.question}
                </span>
                <span>
                    {props.answerNumber}/<small>{props.quizLength}</small>
                </span>
                
            </div>

            <AnswersList 
                state = {props.state}
                answers = {props.answers}
                onAnswerClick = {props.onAnswerClick} />
        </div>
    )
}

export default ActiveQuiz