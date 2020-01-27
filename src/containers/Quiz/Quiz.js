import React, { Component } from 'react'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

import './Quiz.scss'

export default class Quiz extends Component {

    state = {
        activeQuestion: 0,
        answerState: null, // { [id]: 'success' || 'erroe' } 
        quiz: [
            {
                question: 'Какого цвета небо?',
                rightAnswerId: 2,
                id: 1,
                answers: [
                    {text: 'Черного', id: 1},
                    {text: 'Синего', id: 2},
                    {text: 'Красного', id: 3},
                    {text: 'Зеленого', id: 4}
                ]
            },
            {
                question: 'Сколько дней в году?',
                rightAnswerId: 3,
                id: 2,
                answers: [
                    {text: '364', id: 1},
                    {text: '355', id: 2},
                    {text: '365', id: 3},
                    {text: '367', id: 4}
                ]
            }
        ]
    }

    onAnswerClickHandler = (answerId) => {

        const question = this.state.quiz[this.state.activeQuestion]

        if (question.rightAnswerId === answerId) {

            this.setState({
                answerState: {[answerId]: 'success'}
            })

            const timeout = setTimeout(() => {
                if (this.isQuizFinished()) {


                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }

                clearTimeout(timeout)
            }, 500)

        } else {
            this.setState({
                answerState: {[answerId]: 'error'}
            })
        }
    }

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    render() {
        return(
            <div className = 'Quiz'>
                <div className = 'QuizWrapper'>
                    <h1>Ответьте на все вопросы!</h1>
                    
                    <ActiveQuiz 
                        answers = {this.state.quiz[this.state.activeQuestion].answers} 
                        question = {this.state.quiz[this.state.activeQuestion].question}
                        onAnswerClick = {this.onAnswerClickHandler}
                        quizLength =  {this.state.quiz.length}
                        answerNumber =  {this.state.activeQuestion + 1}
                        state = {this.state.answerState} />
                </div>
            </div>
        ) 
    }
}