/*
import React, { Component } from 'react'
class Post extends Component {
  state = {
    id: null
  }
  
  // ----> this is good time to find out the parameter
  componentDidMount(){ 
      console.log(this.props.match.params)
    let id = this.props.match.params.post_id;
    this.setState({
      id
    })
  }
  render() {
    return (
      <div className="container">
        <h4>{this.state.id}</h4>
      </div>
    )
  }
}
export default Post
*/

import React, { Component } from 'react'
import axios from 'axios'

class Post extends Component {
  state = {
    post: null
  }
  componentDidMount(){
    let id = this.props.match.params.post_id;
    axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
      .then(res => {
        this.setState({
          post: res.data
        });
        //console.log(res.data);
      });
  }
  render() {

    const post = this.state.post ? (
      <div className="post">
        <h4 className="center">{this.state.post.title}</h4>
        <p>{this.state.post.body}</p>
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

export default Post