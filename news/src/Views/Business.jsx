import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

export default function Business() {
  const [business, setBusiness] = useState([]);

  const BUSINESS_URL =
    "http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b20b0c325ae347edae7223c1f4f79f22";

    useEffect(() => {
      fetch(BUSINESS_URL)
        .then((raw) => raw.json())
        .then((res) => {
          setBusiness(res.articles);
        });
    }, []);
    console.log(business);

  return (
    <div className="View-div">
      <Grid item xs={12}>
        {business.map((business, index) => (
          <a  className="newsLink" href={business.url}>
            <Paper key={index}>{business.title}</Paper>{" "}
          </a>
        ))}
      </Grid>
    </div>
  );
}
