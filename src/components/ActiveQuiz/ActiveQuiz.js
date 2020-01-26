import React from 'react'

import AnswersList from './AnswersList/AnswersList'

import './ActiveQuiz.scss'

const ActiveQuiz = (props) => {
    return(
        <div className = 'ActiveQuiz'>
            <div className = 'Question'>
                <span className = 'QuestionTitle'>
                    <strong>2.</strong>
                    Как дела?
                </span>
                <span>
                    4/<small>12</small>
                </span>
                
            </div>

            <AnswersList  answers = {props.answers} />
        </div>
    )
}

export default ActiveQuiz