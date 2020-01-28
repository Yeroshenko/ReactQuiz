import React from 'react';

import './Backdrop.scss'

const Backdrop = (props) => {
    return (
        <div className = 'Backdrop'
            onClick = {props.onClick}>
            
        </div>
    );
};

export default Backdrop;