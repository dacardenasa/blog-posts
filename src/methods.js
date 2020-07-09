const sortBy = (data, type) => {
  if (type === 'Asc') {
    return data.sort((a, b) => (a.votes - b.votes));
  } else if(type === 'Desc') {
    return data.sort((a, b) => (b.votes - a.votes));
  }
}

const addVote = (posts, postId) => {
  let data =  posts.map( post => { 
    if (post.id === postId) {
      post.votes += 1;
      return post;
    } else {
      return post;
    }
  });
  return data;
}

const deleteVote = (posts, postId) => {
  let data =  posts.map( post => { 
    if (post.id === postId) {
      post.votes -= 1;
      return post;
    } else {
      return post;
    }
  });
  return data;
}

export { sortBy, addVote, deleteVote }