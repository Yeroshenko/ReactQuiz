import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from '../../axios/axios-quiz';

import { Loader } from '../../components/Ui'

import './QuizList.scss'

class QuizList extends Component {

    state = {
        quizes: [],
        loading: true
    }

    renderQuize() {
        return this.state.quizes.map((quiz) => {
            return (
                <li key = {quiz.id} 
                    className = 'quizList-item list-item' >
                    <NavLink to = {'quiz/' + quiz.id}>
                        {quiz.name}
                    </NavLink>
                </li>
            )
        })
    }

    async componentDidMount() {
        try{
            const response = await axios.get('quizes.json')

            const quizes = []

            Object.keys(response.data).forEach((key, index) => {
                quizes.push({
                    id: key,
                    name: `Тест №${index + 1}`
                })
            })

            this.setState({
                quizes,
                loading: false
            })
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        return (
            <div className = 'quizList'>
                <div className = 'quizList-inner card'>
                   <h1 className = 'card-title'>Список тестов</h1> 

                    {
                        this.state.loading
                            ? <Loader />
                            : <ul>
                                { this.renderQuize() }
                              </ul>
                    }

                   
                </div>
            </div>
        );
    }
}

export default QuizList;