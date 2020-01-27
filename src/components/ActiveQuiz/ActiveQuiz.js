import React from 'react'

import AnswersList from './AnswersList/AnswersList'

import './ActiveQuiz.scss'

const ActiveQuiz = (props) => {
    return(
        <div className = 'card'>
            <div className = 'question card-title'>
                <span>
                    <strong>{props.answerNumber}.</strong>&nbsp;
                    {props.question}
                </span>
                <small>
                    {props.answerNumber}/<small>{props.quizLength}</small>
                </small>
                
            </div>

            <AnswersList 
                state = {props.state}
                answers = {props.answers}
                onAnswerClick = {props.onAnswerClick} />
        </div>
    )
}

export default ActiveQuiz