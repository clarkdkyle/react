import React, { useState, useEffect } from 'react';
/* import Article from '../Components/Article'; */


function Headlines() {

    const [news, setNews] = useState([]);

    const NEWS_URL = "http://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=b20b0c325ae347edae7223c1f4f79f22";

    useEffect(() => {
      fetch(NEWS_URL)
      .then(raw => raw.json())
      .then(res => {setNews(res.articles)})

 
    }, []) 
    console.log(news);


    return (
        <div className="View-div">
            <ol>
           {news.map((news, index) => (
             <li key={index}>
                 <a href={news.url}>{news.title}</a>
             </li>  
           ))}
           </ol>
        </div>
    )
}
export default Headlines;