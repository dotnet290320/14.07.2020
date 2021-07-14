import React, { Component } from 'react';


class Superheroes extends Component {

  state = {
    mystyle: {
      backgroundColor: '#f7e6ff',
      padding: '12px',
      borderRadius: '2px',
      width: '100%'
    }
  }
  render() {

    const { heroes, delete_func } = this.props

    // since we don't have props we get the data as a parameter!
    // const { heroes } = this.props

    function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    var index = 0
    const heroes_list = heroes.map(one_hero => {
      const { hero, name, power, id } = one_hero
      return (
        <div key={id} style={this.state.mystyle}>
          <p>HERO-NAME : {hero}</p>
          <p>NAME : {name}</p>
          <p>POWER : {power}</p>
          <button className="btn" onClick={() => { delete_func(one_hero.id) }} >X</button>
          <hr />
        </div >
      )
    })
    return (
      <div>
        {heroes_list}
      </div>
    )
  }
}


export default Superheroes;