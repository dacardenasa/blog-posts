import React, { Component } from 'react';
import posts from '../posts';
import { sortBy, addVote, deleteVote } from '../methods';

export class Posts extends Component {
  constructor(){
    super();
    this.state = {
      posts: sortBy(posts, 'Desc')
    }
  }

  handleAscOrderClick(){
    this.setState({
      posts: sortBy(this.state.posts, 'Asc')
    });
  }

  handleDescOrderClick(){
    this.setState({
      posts: sortBy(this.state.posts, 'Desc')
    });
  }

  handleAddVoteClick(postId, e){
    e.preventDefault();
    let newPostList = addVote(this.state.posts, postId);
    this.setState({
      posts: sortBy(newPostList, 'Desc')
    });
  }

  handleRemoveVoteClick(postId, e){
    e.preventDefault();
    let newPostList = deleteVote(this.state.posts, postId);
    this.setState({
      posts: sortBy(newPostList, 'Desc')
    });
  }

  render(){
    return(
      <div>
        <div className="filter-posts">
          Ordenar: 
          <button className="btn btn-outline-primary ml-2" onClick={this.handleAscOrderClick.bind(this)}>
            Ascendente
          </button>
          <button className="btn btn-outline-info ml-2" onClick={this.handleDescOrderClick.bind(this)}>
            Descendente
          </button>
        </div>
        <section className="posts-box">
          {this.state.posts.map( (post, index) => 
            <article className="article-box" key={index}>
              <img src={post.post_image_url} alt={post.title} className="img-fluid post-image" />
              <div className="votes-summary-box">
                <ul>
                  <li>
                    <button onClick={(e) => this.handleAddVoteClick(post.id, e)} >
                      <i className="fa fa-caret-up" aria-hidden="true"></i>
                    </button>
                  </li>
                  <li>{post.votes}</li>
                  <li>
                    <button onClick={(e) => this.handleRemoveVoteClick(post.id, e)} >
                      <i className="fa fa-caret-down" aria-hidden="true"></i>
                    </button>
                  </li>
                </ul>
                <div className="summary-box">
                  <a href={post.url} rel="noopener noreferrer" target="_blank">{post.title}</a>
                  <p>{post.description}</p>
                  <span>Escrito por:</span>
                  <img src={post.writer_avatar_url} alt="German"/>
                </div>
              </div>
            </article>
          )}
        </section>
      </div>
    );
  }
}