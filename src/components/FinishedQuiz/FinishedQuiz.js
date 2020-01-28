import React from 'react'
import { Link } from 'react-router-dom'

import Button from './../Ui/Button/Button'

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

            <div className = 'finished-quiz__btns'>
                <Link to = '/' >
                    <Button type = 'success' >
                        Список тестов
                    </Button>
                </Link>
                
                <Button onClick = {props.onRetry} >
                    Повторить
                </Button>
            </div>
        </div>
    )
}

export default FinishedQuiz