import React from "react";

const NewsItem = ({ title, description, newsUrl, imageUrl, date }) => {
  return (
    <div className="news-card">
      <img src={imageUrl} alt="news" className="news-image" />
      <div className="news-content">
        <h5 className="news-title">{title}</h5>
        <p className="news-description">{description}</p>
        <p className="news-date">
          <small>Last updated {date}</small>
        </p>
        <a href={newsUrl} className="news-button">
          Read More...
        </a>
      </div>
    </div>
  );
};

export default NewsItem;



