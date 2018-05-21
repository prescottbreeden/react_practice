import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Ahsley', age: 23}
    ],
    otherState: 'some other value'
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

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick={() => this.switchNameHandler('Bouncy')}>Switch Name</button>
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
        {/* <Person name="Manu"/>
        <Person name="Ashely">Hobbies: being booby</Person>
        <Person name="Lawyer">Hobbies: arguing</Person> */}
      </div>
      // React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React AP?'))
    );
  }
}

export default App;
