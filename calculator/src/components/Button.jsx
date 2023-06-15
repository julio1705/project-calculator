import React from "react";
import './Button.css';

export default props =>
    <button
    onClick={e=> props.click && props.click(props.label)} 
    className={`
        ${props.operation ? 'button operation' : ''}
        ${props.double ? 'button double' : ''}
        ${props.triple ? 'button triple' : ''}
    `}>
        {props.label}
    </button>