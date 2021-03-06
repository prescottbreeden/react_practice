import React from 'react';
import Radium from 'radium';

const person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }
    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>I'm {props.name} and I am {randomAge()}!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

const randomAge = () => Math.floor(Math.random()*30);

export default Radium(person);