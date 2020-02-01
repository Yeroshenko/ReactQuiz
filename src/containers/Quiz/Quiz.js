import React, { Component } from 'react'
import axios from '../../axios/axios-quiz'

import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'
import { Loader } from '../../components/Ui'

import './Quiz.scss'

export default class Quiz extends Component {

    state = {
        results: {},
        isFinished: false,
        activeQuestion: 0,
        answerState: null,
        loading: true, 
        quiz: []
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

        console.log(typeof(question.rightAnswerId), typeof(answerId))
        if (question.rightAnswerId == answerId) {

            console.log(results[question.id])
            
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

    async componentDidMount() {
        try {
            const response = await axios.get(`quizes/${this.props.match.params.id}.json`)
            const quiz = response.data

            this.setState({
                quiz : quiz,
                loading: false
            })
        } catch(e) {
            console.log(e)
        }
    }

    render() {
        return(
            <div className = 'quiz'>
                <div className = 'quiz-inner'>

                    {
                        this.state.loading
                            ? <Loader />
                            :  this.state.isFinished 
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