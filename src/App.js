import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar.js';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let toDo = ['Navbar', 'Form Body', 'Routes', 'Use MongoDB and Mongoose for Data Persistency'];
    return (
      <div>
        <NavigationBar />
        <h1>React + Node + Express App</h1>
        <h3>To Do List</h3>
        <ul>
          {toDo.map((elem, index) => <li key={index}>{elem}</li>)}
        </ul>
      </div>
    )
  }
}
