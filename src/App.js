import React from 'react';
import logo from './logo.svg';
import Form from './components/Form';
import './App.css';

{/* class based component */}
class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      greetingStart: "Hello, ",  // string data type
      showForm: false  // boolean data type
    }

  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.setState({
      showForm: !this.state.showForm
    })
  }


  handleToggleButton = (event) => {
    this.setState({
      showForm: !this.state.showForm
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.showForm ?  // if this.state.showForm is == true

          <Form
            greetingStart={this.state.greetingStart}
            salutation={'Mr.'}
            handleSubmit={this.handleFormSubmit}
          />
          : //else 
          <div>
            <h4>No Form shown</h4>
            <button id="btn" onClick={this.handleToggleButton}>Toggle Form</button>
          </div>
        }
        <br></br>
        
      </div>
    );
  }
}

export default App;
// ternary expression
