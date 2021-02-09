import React, { useState, useEffect } from 'react';

export default function Sports() {
    const [sports, setSports] = useState([]);

    const SPORTS_URL = "http://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=b20b0c325ae347edae7223c1f4f79f22";

    useEffect(() => {
      fetch(SPORTS_URL)
      .then(raw => raw.json())
      .then(res => {setSports(res.articles)})

 
    }, []) 
    console.log(sports);


    return (
        <div className="View-div">
            <ol>
           {sports.map((sports, index) => (
             <li key={index}>
                 <a href={sports.url}>{sports.title}</a>
             </li>  
           ))}
           </ol>
        </div>
    )
}
