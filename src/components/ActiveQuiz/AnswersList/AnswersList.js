import React from 'react'

import AnswerItem from './AnswerItem/AnswerItem'

import './AnswersList.scss'

const AnswersList = (props) => {
    return(
        <ul className = 'AnswersList'>
            { props.answers.map((answer, index) => {
                return (
                    <AnswerItem answer = {answer}  key = {index}/>
                )
            }) }
        </ul>
    )
    
}

export default AnswersList