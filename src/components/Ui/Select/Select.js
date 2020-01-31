import React from 'react';

import './Select.scss'

const Select = (props) => {

    const htmlFor = `${Math.random()}`

    return (
        <div className = 'select'>
            <label htmlFor = {htmlFor}>
                {props.label}
            </label>
            <select 
                value = {props.value}
                onChange = {props.onChange} 
                id = {htmlFor} >
                { props.options.map((option, index) => {
                    return (
                        <option
                            value = {option.value}
                            key = {option.value + index}>
                            
                            {option.text}
                        </option>
                    )
                }) }
            </select>
        </div>
    );
};

export default Select;