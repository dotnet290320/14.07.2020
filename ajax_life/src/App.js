import React, { Component } from 'react';
import './App.css';
import Superheroes from './Superheroes';
import AddHero from './AddHero';
import './superhero.css';
import axios from 'axios'

class App extends Component {
  state = {
    heroes:
      [{ hero: "Superman", name: "Clark kent", power: "fly", id: 1 },
      { hero: "Batman", name: "Bruce Wayne", power: "Jump", id: 2 },
      { hero: "Spiderman", name: "Pitter Parker", power: "spiddy", id: 3 }]
  }
  constructor() {
    super()
    console.log('*** constructor')
  }

  shouldComponentUpdate(nextState, nextProp) {
    //conso
    console.log('shouldComponentUpdate')
    console.log('nextState')
    console.log(nextState )
    console.log('nextProp')
    console.log(nextProp )
    console.log('shouldComponentUpdate')
    //return this.state.heroes.length >= 2
    return true;
  }

  componentDidMount() {
    /*
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        console.log(myJson)
      })
      */
    axios.get('https://jsonplaceholder.typicode.com/posts/')
      .then(res => {
        console.log(res.data);
      })
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('props')
    console.log(prevProps)
    console.log('-----------')
    console.log('state')
    console.log(prevState)
    console.log('-----------')

  }

  addHeroFunc = (new_hero) => {
    const new_heroes_list = [...this.state.heroes]
    new_heroes_list.push(new_hero)
    new_hero.id = new_heroes_list.length + 1
    this.setState({ heroes: new_heroes_list });
  }

  deleteHeroFunc = (id) => {
    const new_heroes_list = this.state.heroes.filter(hiro => hiro.id != id)
    this.setState({ heroes: new_heroes_list });
  }

  render() {
    return (
      <div className="App">
        Hello World!
      <hr />
        <Superheroes heroes={this.state.heroes} delete_func={this.deleteHeroFunc} />
        <AddHero add_func={this.addHeroFunc} className="hero1" />
      </div>
    );
  }
}

export default App;