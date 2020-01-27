import React from 'react'

import './FinishedQuiz.scss'

const FinishedQuiz = (props) => {

    const successCount = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'success') {
            total++
        }
        
        return total
    }, 0)

    return (
        <div className = 'card finished-quiz'>
            <p className = 'card-title'>
                Правильно {successCount} из {props.quiz.length}
            </p>
            <ul>
                { props.quiz.map((quizItem, index) => {
                    const cls = [
                        'fa',
                        props.results[quizItem.id] === 'error' 
                            ? 'fa-times error' 
                            : 'fa-check success' 
                    ]
                    
                    return (
                        <li key = {index} 
                            className = 'list-item' >

                            <span>
                                <strong>{index + 1}.</strong> &nbsp;
                                {quizItem.question}
                            </span>
                            <i className = {cls.join(' ')}/>
                        </li>
                    )
                }) }
            </ul>

            <div>
                <button 
                    className = 'finished-quiz__btn btn' 
                    onClick = {props.onRetry} >
                    Повторить
                </button>
            </div>
        </div>
    )
}

export default FinishedQuiz