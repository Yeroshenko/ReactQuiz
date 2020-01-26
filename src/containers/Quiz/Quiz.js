import React, { Component } from 'react'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

import './Quiz.scss'

export default class Quiz extends Component {

    state = {
        quiz: [
            {
                answers: [
                    {text: 'Варіант 1'},
                    {text: 'Варіант 2'},
                    {text: 'Варіант 3'},
                    {text: 'Варіант 4'}
                ]
            }
        ]
    }

    render() {
        return(
            <div className = 'Quiz'>
                <div className = 'QuizWrapper'>
                    <h1>Ответьте на все вопросы!</h1>
                    
                    <ActiveQuiz answers = {this.state.quiz[0].answers}/>
                </div>
            </div>
        ) 
    }
}