import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ComponentsCss/DashboardCss.css"; // Add your CSS for styling

const Dashboard = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          "https://untitled-twkmuar27a-uc.a.run.app/api"
        );
        setArticles(response.data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };
    fetchArticles();
  }, []);

  return (
    <div className="dashboard-container">
      <h2>Photography</h2>
      <div className="article-list">
        {articles
          .filter((article) => article.category === "Photography")
          .map((article) => (
            <div key={article.id} className="article-item">
              <img src={article.image} alt={article.title} />
              <p>{article.title}</p>
            </div>
          ))}
      </div>

      <h2>Learning</h2>
      <div className="article-list">
        {articles
          .filter((article) => article.category === "Learning")
          .map((article) => (
            <div key={article.id} className="article-item">
              <img src={article.image} alt={article.title} />
              <p>{article.title}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
