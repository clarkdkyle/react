import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
/* import Article from '../Components/Article'; */

export default function Entertainment() {
  const [entertainment, setEntertainment] = useState([]);

  const ENTERTAINMENT_URL =
    "http://newsapi.org/v2/top-headlines?country=us&category=Entertainment&apiKey=b20b0c325ae347edae7223c1f4f79f22";

  useEffect(() => {
    fetch(ENTERTAINMENT_URL)
      .then((raw) => raw.json())
      .then((res) => {
        setEntertainment(res.articles);
      });
  }, []);
  console.log(entertainment);

  return (
    <div className="View-div">
      <Grid item xs={12}>
        {entertainment.map((entertainment, index) => (
          <a  className="newsLink" href={entertainment.url}>
            {" "}
            <Paper key={index}>{entertainment.title}</Paper>{" "}
          </a>
        ))}
      </Grid>
    </div>
  );
}
