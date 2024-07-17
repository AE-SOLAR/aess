import React from 'react'
import './Blog.css'
import { getTags, getPosts } from '../../handlers/api';

export default function Blog() {

  return (
    <div className="sidebar">
      <h2 className='mainTittle'>Our blog posts</h2>

      <div className="popular-posts">
        <h3>Popular posts</h3>
        <ul>
          {getPosts().map((post, index) => (
            <li key={index} className="post-item">{post}</li>
          ))}
        </ul>
      </div>

      <div className="subscribe-section">
        <p>Stay up to date with our blog posts</p>
        <button className="subscribe-button">Subscribe now</button>
      </div>

      <div className="tags-section">
        <h3>Tags</h3>
        <div className="tags">
          {getTags().map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
