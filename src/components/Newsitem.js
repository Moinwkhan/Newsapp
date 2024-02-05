import React from 'react';
import { Link } from 'react-router-dom';
import defaultImage from './noimg.jpg'; 

const Newsitem = (props) => {
  let { title, description, imageurl, URL, source, date } = props;

  return (
    <>
      <div className="card" id="card">
        <img src={imageurl || defaultImage} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">
            {title}...<span className="badge" id="source">{source}</span>
          </h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">{date}</p>
          <Link to={URL} target="_blank" id="btn" className="btn btn-primary">
            Read more
          </Link>
        </div>
      </div>
    </>
  );
};

export default Newsitem;
