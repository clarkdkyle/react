import React, { useState, useEffect } from 'react';

/* import Article from '../Components/Article'; */

export default function Entertainment() {
    const [entertainment, setEntertainment] = useState([]);

    const ENTERTAINMENT_URL = "http://newsapi.org/v2/top-headlines?country=us&category=Entertainment&apiKey=b20b0c325ae347edae7223c1f4f79f22";

    useEffect(() => {
      fetch(ENTERTAINMENT_URL)
      .then(raw => raw.json())
      .then(res => {setEntertainment(res.articles)})

 
    }, []) 
    console.log(entertainment);


    return (
        <div className="View-div">
            <ol>
           {entertainment.map((entertainment, index) => (
             <li key={index}>
                 <a href={entertainment.url}>{entertainment.title}</a>
             </li>  
           ))}
           </ol>
        </div>
    )
}

