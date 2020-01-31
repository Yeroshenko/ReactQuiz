import React, { Component } from 'react';

import { Button, Input } from '../../components/Ui';

import './Auth.scss'

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


export default class Auth extends Component {

    state = {
        isFormValid: false,
        formControls: {
            email: {
                value: '',
                type: 'email',
                label: 'Email',
                errorMessage: 'Введите корректный email',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }
            },
            password: {
                value: '',
                type: 'password',
                label: 'Пароль',
                errorMessage: 'Минимум 6 символов',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6
                }
            }
        } 
    }

    loginHandler = () => {

    }

    registerHandler = () => {

    }

    submitHandler = (e) => {
        e.preventDefault()
    }

    validateControl(value, validation) {
        if (!validation) {
            return true
        }

        let isValid = true

        if (validation.required) {
            isValid = value.trim() !== '' && isValid
        }
        
        if (validation.email) {
            isValid = validateEmail(value) && isValid
        }
        
        if (validation.minLength) {
            isValid = value.length >= validation.minLength && isValid
        }

        return isValid
    }

    onChangeHandler = (e, controlName) => {

        const formControls = { ...this.state.formControls }
        const control = { ...formControls[controlName] }

        control.value = e.target.value
        control.touched = true
        control.valid = this.validateControl(control.value, control.validation)

        formControls[controlName] = control

        let isFormValid = true

        Object.keys(formControls).forEach((name) => {
            isFormValid = formControls[name].valid && isFormValid
        })

        this.setState({
            formControls,
            isFormValid
        })
    }

    renderInputs() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName]
            return (
                <Input 
                    key = {controlName + index}
                    type = {control.type}
                    value = {control.value}
                    label = {control.label}
                    valid = {control.valid}
                    touched = {control.touched}
                    shouldValidate = {!!control.validation}
                    errorMessage = {control.errorMessage}
                    onChange = {(e) => this.onChangeHandler(e, controlName)}
                    />
            )
        })
    }

    render() {
        return (
            <div className = 'auth'>
                <div className = 'auth-inner card'>
                    <h1 className = 'card-title'>Авторизация</h1>

                    <form className = 'auth-form' 
                        onSubmit = {this.submitHandler}>

                        <div className = 'auth-form__inputs'>
                            { this.renderInputs() }
                        </div>
                        <div className = 'auth-form__buttons'>
                            <Button type = 'primary-left'
                                onClick = {this.loginHandler}
                                disabled = {!this.state.isFormValid} >
                                Войти
                            </Button>

                            <Button type = 'success-right'
                                onClick = {this.registerHandler}
                                disabled = {!this.state.isFormValid} > 
                                Регистрация
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
