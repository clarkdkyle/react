import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

export default function Sports() {
  const [sports, setSports] = useState([]);

  const SPORTS_URL =
    "http://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=b20b0c325ae347edae7223c1f4f79f22";

  useEffect(() => {
    fetch(SPORTS_URL)
      .then((raw) => raw.json())
      .then((res) => {
        setSports(res.articles);
      });
  }, []);
  console.log(sports);

  return (
    <div className="View-div">
      <Grid item xs={12}>
        {sports.map((sports, index) => (
          <a  className="newsLink" href={sports.url}>
            {" "}
            <Paper key={index}>{sports.title}</Paper>{" "}
          </a>
        ))}
      </Grid>
    </div>
  );
}
