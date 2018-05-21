// components
import React, { Component } from 'react';
import Person from './Person/Person';

// css files
import './App.css';
import './Person/Person.css';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Ahsley', age: 23}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 28},
        {name: 'Manpage', age: 29},
        {name: 'Ahsley Ho ho ho', age: 23}
      ]
    })
    // DONT DO THIS this.state.persons[0].name = 'Ballchinian';
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Chuck Norris', age: 28},
        {name: event.target.value, age: 29},
        {name: 'Ahsley Ho ho ho', age: 23}
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      color: 'black',
      cursor: 'pointer'
    }

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>          
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}
            click={this.switchNameHandler.bind(this, 'Balls')}
          />
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Max!!')}
            changed={this.nameChangedHandler}
          />
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}
          />
        </div>     
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Show Persons</button>
        {persons}
      </div>
      
      /* { 
          this.state.showPersons ? 
            <div>          
              <Person 
                name={this.state.persons[0].name} 
                age={this.state.persons[0].age}
                click={this.switchNameHandler.bind(this, 'Balls')}
              />
              <Person 
                name={this.state.persons[1].name} 
                age={this.state.persons[1].age}
                click={this.switchNameHandler.bind(this, 'Max!!')}
                changed={this.nameChangedHandler}
              />
              <Person 
                name={this.state.persons[2].name} 
                age={this.state.persons[2].age}
              />
            </div>         
          : null
        } */

        /* <Person name="Manu"/>
        <Person name="Ashely">Hobbies: being booby</Person>
        <Person name="Lawyer">Hobbies: arguing</Person> */
      
      // React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React AP?'))
    );
  }
}

export default App;
