import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './FormContainer.css';

class FormContainer extends Component {
  state = {
    name: "",
    age: 0,
    color: "red"
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value 
    });
  }

  canSubmitData = () => {
    return this.state.name !== "" || this.state.age > 0;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.canSubmitData()) {
      alert(`My name is ${this.state.name}, I'm ${this.state.age} years old and I like ${this.state.color}`);
    } else {
      alert("Make sure you fill the form inputs!");
    }
  };

  render(){
    return (
    <div className="FormContainer">
      <h3>Introduction</h3>

      <form>
        <div className="form-group">
          <label>Name:</label>
          <input onChange={this.handleChange} value={this.state.name} name="name" className="form-control" type="text" placeholder="Type your name" required />
        </div>
        <div className="form-group">
          <label>Age:</label>
          <input onChange={this.handleChange} value={this.state.age} name="age" className="form-control" type="number" placeholder="Age" required />
        </div>
        <div className="form-group">
          <label>Favorite color:</label>
          <select onChange={this.handleChange} value={this.state.color} name="color" className="form-control" placeholder="Favorite color">
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="yellow">Yellow</option>
            <option value="pink">Pink</option>
          </select>
        </div>
        <div className="form-footer">
          <Link to="/">Go back</Link>
          <button onClick={this.handleSubmit}>Continue</button>
        </div>
      </form>
    </div>
    );
  }
}

export default FormContainer;