import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import Bacdrop from '../../Ui/Backdrop/Backdrop'

import './Drawer.scss'

const links = [
    {to: '/', label: 'Список', exact: true},
    {to: '/auth', label: 'Авторизация', exact: false},
    {to: '/quiz-creator', label: 'Создать тест', exact: false}
]

export default class Drawer extends Component {

    clickHandler = () => {
        this.props.onClose()
    } 

    renderLinks() {
        return links.map((link, index) => {
            return (
                <li key = {index}>
                    <NavLink
                        to = {link.to}
                        exact = {link.exact}
                        activeClassName = 'active'
                        onClick = {this.clickHandler} >

                        {link.label}
                    </NavLink>
                </li>
            )
        })
    }

    render() {

        const cls = ['Drawer']

        if (!this.props.isOpen) {
            cls.push('close')
        }
         
        return (
            <React.Fragment>

                <nav className =  {cls.join(' ')}> 
                    <ul>
                        { this.renderLinks() }
                    </ul>
                </nav>

                { this.props.isOpen ? 
                    <Bacdrop onClick = {this.props.onClose} />
                    : null }

            </React.Fragment>
        );
    }
}
