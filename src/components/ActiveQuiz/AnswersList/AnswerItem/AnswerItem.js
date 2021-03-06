import React from 'react'

import './AnswerItem.scss'

const AnswerItem = (props) => {
    
    let cls = 'list-item answer-item'

    if(props.state) {
        cls = `${cls} ${props.state}`
    }

    return (
        <li 
            className = {cls}
            onClick =  {() => props.onAnswerClick(props.answer.id)}>
            { props.answer.text }
        </li>
    )
}

export default AnswerItem