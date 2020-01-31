import React from 'react';

import './Input.scss'

function isInvalid( {valid, touched, shouldValidate} ) {  
    return !valid &&shouldValidate && touched 
}

const Input = (props) => {

    const htmlFor = `${Math.random()}`
    const inputType = props.type || 'text'
    const cls = ['input']

    if (isInvalid(props)) {
        cls.push('invalid')
    }

    return (
        <div className = {cls.join(' ')} >
            <label htmlFor = {htmlFor}>
                {props.label}
            </label>

            <input 
                id = {htmlFor}
                type = {inputType}
                value = {props.value}
                onChange = {props.onChange}
                placeholder = {props.placeholder} />

            {
                isInvalid(props) 
                    ? <span>{props.errorMessage}</span>
                    : null
            }

        </div>
    );
};

export default Input;