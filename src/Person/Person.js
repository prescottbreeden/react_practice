import React from 'react';

const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>I'm {props.name} and I am {randomAge()}!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

const randomAge = () => Math.floor(Math.random()*30);

export default person;