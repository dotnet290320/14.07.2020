import React, { Component } from 'react'
import { connect } from 'react-redux';
// connects is a fucn which return HOC 

import { deletePost } from './../actions/deletePost'

class Post extends Component {

  handleClick = () => {
    this.props.deletePost(this.props.post.id);
    this.props.history.push('/')
  }
  render() {
    console.log(this.props) // show delete func
    const post = this.props.post ? (
      <div className="post">
        <h4 className="center">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <div className="center">
          <button className="btn gray" onClick={this.handleClick}>
            DELETE POST
          </button>
        </div>
      </div>
    ) : (
        <div className="center">Loading post...</div>
      );

    return (
      <div className="container">
        {post}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // own props is the original props of the component
  let id = ownProps.match.params.post_id // look in App.js route parameter

  // this will take data from the state
  // and put it into the component props
  return {
    // will create props.posts on the component
    // from the state.posts
    post: state.posts.find(p => p.id == id)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => {
      dispatch(deletePost(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)