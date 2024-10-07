import React from "react";
import "./News.css";
import { getTags, getPosts } from "../../handlers/api";

export default function NewsPage() {
  return (
    <div className="sidebar">
      <h2 className="mainTittle">Our news</h2>

      <div className="popular-posts">
        <h3>Popular news</h3>
        <ul>
          {getPosts().map((post, index) => (
            <li key={index} className="post-item">
              {post}
            </li>
          ))}
        </ul>
      </div>

      <div className="subscribe-section">
        <span>Stay up to date with our newsletter</span>
        <button className="subscribe-button">Subscribe now</button>
      </div>

      <div className="tags-section">
        <h3>Tags</h3>
        <div className="tags">
          {getTags().map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
