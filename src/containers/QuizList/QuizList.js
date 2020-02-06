import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchQuizes } from '../../store/actions/quiz'

import { Loader } from '../../components/Ui'

import './QuizList.scss'

class QuizList extends Component {

    renderQuize() {
        return this.props.quizes.map((quiz) => {
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

    componentDidMount() {
        this.props.fetchQuizes()
    }

    render() {
        return (
            <div className = 'quizList'>
                <div className = 'quizList-inner card'>
                   <h1 className = 'card-title'>Список тестов</h1> 

                    {
                        this.props.loading && this.props.quizes.length !== 0
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

function mapStateToProps(state) {
    return {
        quizes: state.quiz.quizes,
        loading: state.quiz.loading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchQuizes: () => dispatch(fetchQuizes())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizList);