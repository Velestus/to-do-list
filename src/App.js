import React, { Component } from 'react';
import StickyNote from './_components/sticky-note/sticky-note';
import axios from 'axios';
import InputField from './_components/input-field/input-field';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: []
    }
    this.getTodos = this.getTodos.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.formatDate = this.formatDate.bind(this);
    this.getTodos();
  }
  getTodos() {
    axios.get('http://localhost:3000/Todos')
      .then( response => {
        this.setState({todo: response.data})
      }
    );
  }
  addTodo(event) {
    event.preventDefault();
    let date = new Date();
    date = this.formatDate(date);
    const message = document.querySelector('#NewNote').value;
    axios.post('http://localhost:3000/Todos', {
      message: message,
      date: date
    }).then( res => {
      console.log(res);
      let list = this.state.todo;
      let newNote = {
        message: res.data.message,
        date: res.data.date,
        id: res.data.id
      };
      list.push(newNote);
      this.setState({ todo: list });
      document.querySelector('#NewNote').value = "";
    }
  );
  }
  deleteTodo(id) {
    axios.delete('http://localhost:3000/Todos/' + id)
      .then( (res) => {
        let list = this.state.todo;
        list = list.filter( item => item.id !== id );
        this.setState({ todo: list });
      }
    );
  }
  formatDate(date) {
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
  
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
  
    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }

  render() {
    let list = this.state.todo;
    const todos = list.map((item) => {
      for(let i = 0; i < list.length; i++) {
        return <StickyNote key={item.id} date={item.date} message={item.message} number={item.id} onClick={this.deleteTodo}/>
      }
      return null;
    });
    const content = list.length ? todos: (<p className="App-content">You don't have any To Do's! Maybe you want to add some?</p>);
    return (
      <div className="App gradient">
        <header className="App-header">
          <h1 className="App-title">To Do List</h1>
        </header>
        <InputField onClick={this.addTodo}/>
        <main>
          <div className="StickyBoard">
            {content}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
