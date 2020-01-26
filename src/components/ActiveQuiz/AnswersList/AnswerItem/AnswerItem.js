import React from 'react'

import './AnswerItem.scss'

const AnswerItem = (props) => {
    return (
        <li className = 'AnswerItem'>
            { props.answer.text }
        </li>
    )
}

export default AnswerItem