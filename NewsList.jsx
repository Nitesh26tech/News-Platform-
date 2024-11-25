import React, { useEffect, useState, useCallback } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";

const News = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = useCallback(async () => {
    const apiKey = "8e8ecfebe9bd48dea8204af8779c6f7e";
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=8`;

    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  }, [page, category]);

  useEffect(() => {
    document.title = `${category} - DailyNews`;
    updateNews();
  }, [page, category, updateNews]);

  return (
    <div className="news-container">
      <h1 className="Top-news">DailyDose-News Top News</h1>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <>
          <div className="news-grid">
            {articles.map((article) => (
              <NewsItem
                key={article.url}
                title={article.title || ""}
                description={article.description || ""}
                imageUrl={article.urlToImage || ""}
                newsUrl={article.url}
                date={article.publishedAt}
              />
            ))}
          </div>
          <div className="pagination">
            <button
              disabled={page <= 1}
              className="nav-button"
              onClick={() => setPage(page - 1)}
            >
              &laquo; Previous
            </button>
            <button
              disabled={page + 1 > Math.ceil(totalResults/8)}
              className="nav-button"
              onClick={() => setPage(page + 1)}
            >
              Next &raquo;
            </button>
          </div>
        </>
      )}
    </div>
  );
};

News.defaultProps = {
  category: "general",
  page: 1,
};

News.propTypes = {
  category: PropTypes.string,
  page: PropTypes.number,
};

export default News;
