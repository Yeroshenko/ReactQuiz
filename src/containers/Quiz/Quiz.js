import React, { Component } from 'react'

import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'

import './Quiz.scss'

export default class Quiz extends Component {

    state = {
        results: {}, // { [id]: 'success' || 'erroe' } 
        isFinished: false,
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
        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0]

            if (this.state.answerState[key] === 'success') {
                return
            }
        }

        const question = this.state.quiz[this.state.activeQuestion]
        const results = this.state.results

        if (question.rightAnswerId === answerId) {
            if(!results[question.id]) {
                results[question.id] = 'success'
            }
            this.setState({
                answerState: {[answerId]: 'success'},
                results
            })

            const timeout = setTimeout(() => {
                if (this.isQuizFinished()) {
                    this.setState({
                        isFinished: true
                    })
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }

                clearTimeout(timeout)
            }, 500)

        } else {
            results[question.id] = 'error'
            
            this.setState({
                answerState: {[answerId]: 'error'},
                results
            })
        }
    }

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    retryHandler = () => {
        this.setState({
            results: {},  
            isFinished: false,
            activeQuestion: 0,
            answerState: null
        })
    }

    componentDidMount() {
        console.log('Quize ID = ', this.props.match.params.id)
    }

    render() {
        return(
            <div className = 'quiz'>
                <div className = 'quiz-inner'>
                    {
                        this.state.isFinished 
                        ? <FinishedQuiz 
                            results = {this.state.results} 
                            quiz = {this.state.quiz}
                            onRetry =  {this.retryHandler}/>
                        : <ActiveQuiz 
                            answers = {this.state.quiz[this.state.activeQuestion].answers} 
                            question = {this.state.quiz[this.state.activeQuestion].question}
                            onAnswerClick = {this.onAnswerClickHandler}
                            quizLength =  {this.state.quiz.length}
                            answerNumber =  {this.state.activeQuestion + 1}
                            state = {this.state.answerState} />
                    }
                    
                </div>
            </div>
        ) 
    }
}