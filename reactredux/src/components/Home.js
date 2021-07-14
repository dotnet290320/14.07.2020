import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Pokeball from './../pokeball.png'
import { connect } from 'react-redux';
// connects is a fucn which return HOC 

class Home extends Component {
  render() {
    console.log(this.props)
    const { posts } = this.props
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <img src={Pokeball} alt="a pokeball" />
            <div className="card-content">
              <Link to={'/posts/' + post.id}>
                <span className="card-title red-text">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
        <div className="center">No posts to show</div>
      );

    return (
      <div>
        <div className="container">
          <h4 className="center">Home</h4>
          {postList}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // this will take data from the state
  // and put it into the component props
  return {
    // will create props.posts on the component
    // from the state.posts
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Home)