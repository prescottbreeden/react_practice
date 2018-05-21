// modules
import React, { Component } from 'react';
import Person from './Person/Person';
import Radium from 'radium';

// css files
import './App.css';
import './Person/Person.css';

class App extends Component {
  state = {
    persons: [
      { id: 'adslfkj', name: 'Max', age: 28},
      { id: 'wejkh', name: 'Manu', age: 29},
      { id: 'adflkj223', name: 'Ahsley', age: 23}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;  
    })
    // create a copy
    const person = {
      ...this.state.persons[personIndex]
    };
    // change value of copy
    person.name = event.target.value;

    // copy the list
    const persons = [...this.state.persons];

    // change the value of the item in the object/list
    persons[personIndex] = person;
    
    // set the object back into state
    this.setState({ persons: persons });
  }

  deletePersonsHander = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
  }

  render() {
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      color: 'white',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person 
                click={() => this.deletePersonsHander(index)}
                name={person.name} 
                age={person.age} 
                key={person.id} 
                changed={(event) => this.nameChangedHandler(event, person.id)} />
            )
          })}
        </div>     
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>I'm a paragraph</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Show Persons</button>
        {persons}
      </div>
    );
  }
}

export default Radium(App);
