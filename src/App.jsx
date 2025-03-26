import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [users, setUsers] = useState([]);
  const [visibleComments, setVisibleComments] = useState({});

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const fetchComments = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/comments');
      const data = await response.json();
      setComments(data);
    };

    fetchComments();
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  const getUserById = (userId) => {
    return users.find(user => user.id === userId);
  };

  const toggleCommentsVisibility = (postId) => {
    setVisibleComments(prevState => ({
      ...prevState,
      [postId]: !prevState[postId],
    }));
  };

  return (
    <div className="app">
      <h1>Социальная сеть</h1>
      <h2>Посты</h2>
      <ul className="post-list">
        {posts.map(post => {
          const user = getUserById(post.userId);
          const postComments = comments.filter(comment => comment.postId === post.id);
          return (
            <li key={post.id} className="post" onClick={() => toggleCommentsVisibility(post.id)} style={{ cursor: 'pointer' }}>
              <div className="post-header">
                {user && (
                  <div className="user-info">
                    <strong>{user.name}</strong> <span>@{user.username}</span>
                    <p>{user.email}</p>
                    <p>{user.address.city}, {user.address.street}</p>
                  </div>
                )}
              </div>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              
              {visibleComments[post.id] && postComments.length > 0 && (
                <div className="comments">
                  <h4>Комментарии:</h4>
                  <ul>
                    {postComments.map(comment => (
                      <li key={comment.id} className="comment">
                        <strong>Эмайл:</strong> {comment.email} <br/>
                        <strong>{comment.name}</strong>: {comment.body}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;