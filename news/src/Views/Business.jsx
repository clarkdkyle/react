import React, { useState, useEffect } from 'react';

export default function Business() {
    const [business, setBusiness] = useState([]);

    const business_URL = "http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b20b0c325ae347edae7223c1f4f79f22";

    useEffect(() => {
      fetch(business_URL)
      .then(raw => raw.json())
      .then(res => {setBusiness(res.articles)})

 
    }, ) 
    console.log(business);


    return (
        <div className="View-div">
            <ol>
           {business.map((business, index) => (
             <li key={index}>
                 <a href={business.url}>{business.title}</a>
             </li>  
           ))}
           </ol>
        </div>
    )
}
