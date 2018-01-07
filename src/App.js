import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const marked = require('marked');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
  }
  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <header>
          <h1>Markdown Previewer</h1>
        </header>
        <main>
          <div className="markInput">
            <h2>Input</h2>
            <textarea onChange={this.handleChange} value={this.state.input} />
          </div>
          <div className="markOutput">
            <h2>Output</h2>
            <div dangerouslySetInnerHTML={{ __html: marked(this.state.input) }}></div>
          </div>
        </main>
        <footer>
          Coded by Chad Pjontek - 2018
          <img src={logo} className="App-logo" alt="logo" />
        </footer>
      </div>
    )
  }
}

export default App;
