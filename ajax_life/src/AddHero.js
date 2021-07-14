import React, { Component } from 'react';

class AddHero extends Component {
  state = {
    hero: null,
    name: null,
    power: null
  }
  handleChange = (e) => {
    this.setState(
      { [e.target.id]: e.target.value })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);

    this.props.add_func(this.state)

    this.setState({
      hero: null,
      name: null,
      power: null
    })
    document.getElementById('hero').value = ''
    document.getElementById('name').value = ''
    document.getElementById('power').value = ''
  }
  render() {
    return (
      <div className="hero1">
        <form onSubmit={this.handleSubmit}>
          <p>HERO NAME: <input type="text" id="hero" onChange={this.handleChange} /></p>
          <p>AVATAR NAME: <input type="text" id="name" onChange={this.handleChange} /></p>
          <p>POWER: <input type="text" id="power" onChange={this.handleChange} /></p>
          <button>Submit</button>
        </form>
      </div>)
  }
}
export default AddHero;