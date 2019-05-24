import React from 'react';
import '../css/Comment.css';

const Comment = props => {
  console.log(props);
  return(
    <div>
      <div className="container">
        <div className="comment">
          <a href="/" className="avatar">
            <img width="50px" src={props.avatar} alt="avatar" />
          </a>
          <div className="content">
            <a href="/" className="author">
              {props.author}
            </a>
            <div className="metaData">
              <span className="date">{props.timeAgo}</span>
            </div><br></br>
            <div className="commentText">{props.content}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;