import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './QuizList.scss'

class QuizList extends Component {

    renderQuize() {
        return [1, 2, 3].map((quiz, index) => {
            return (
                <li key = {index} 
                    className = 'QuizList-item list-item' >
                    <NavLink to = {'quiz/' + quiz}>
                        Тест {quiz}
                    </NavLink>
                </li>
            )
        })
    }

    render() {
        return (
            <div className = 'QuizList'>
                <div className = 'QuizList-inner card'>
                   <h1 className = 'card-title'>Список тестов</h1> 

                   <ul>
                       { this.renderQuize() }
                   </ul>
                </div>
            </div>
        );
    }
}

export default QuizList;