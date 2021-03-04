import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

function Headlines() {
  const [news, setNews] = useState([]);

  const NEWS_URL =
    "http://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=b20b0c325ae347edae7223c1f4f79f22";

  useEffect(() => {
    fetch(NEWS_URL)
      .then((raw) => raw.json())
      .then((res) => {
        setNews(res.articles);
      });
  }, []);
  console.log(news);

  return (
    <div className="View-div">
      <Grid item xs={12}>
        {news.map((news, index) => (
          <a className="newsLink" href={news.url}>
            <Paper key={index}>{news.title}</Paper>
          </a>
        ))}
      </Grid>
    </div>
  );
}
export default Headlines;
