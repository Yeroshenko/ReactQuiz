import React from 'react'

import AnswerItem from './AnswerItem/AnswerItem'

import './AnswersList.scss'

const AnswersList = (props) => {

    return(
        <ul className = 'AnswersList'>
            { props.answers.map((answer, index) => {
                return (
                    <AnswerItem
                        answer = {answer}  
                        key = {index}
                        onAnswerClick = {props.onAnswerClick}
                        state = {props.state ? props.state[answer.id] : null} />
                )
            }) }
        </ul>
    )
    
}

export default AnswersList