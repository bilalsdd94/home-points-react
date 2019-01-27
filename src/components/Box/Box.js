import React from 'react';
import classes from './Box.module.css';
import Checkbox from '../Checkbox/Checkbox.js';
const box = (props) =>
(
    
        <div className= {classes.Div} onClick={props.clicked}>
            
            <Checkbox ticked={props.clicked}/>
            
            <p> <strong>Product Name:{props.name}</strong></p>
            <p> Description: {props.description}</p>
            <p> Points:{props.points}</p>
            <p> Price:{props.price}</p>
            <p> Image:{props.image_url}</p>
            <p> Source:{props.source_url}</p>
            
        </div>

);

export default box;