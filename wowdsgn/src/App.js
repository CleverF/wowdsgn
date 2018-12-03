import React, { Component } from 'react';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">

          <section style={{marginBottom :'50px'}}>
          {this.props.children}
          </section>
       
      </div>


    );
  }
}

export default App;