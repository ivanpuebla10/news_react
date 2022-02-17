import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import './ListNews.css'

const ListNews = () => {
  const { news, getNews } = useContext(GlobalContext);
  useEffect(() => {
    getNews();
  }, []);
  const New = news.map((New) => {
    console.log(New)
    // New.title && New.abstract ? expr1 : expr2 
    return (
      <div className="new" key={New.id}>
        <h2>{New.title.toUpperCase()}</h2>
        <h3>Section: {New.section}</h3>
        <h4>Subsection: {New.subsection}</h4>
        <p>{New.abstract}</p>
        <img src={New.multimedia[1].url} /><br/>
        <h4>{New.url}</h4>
        <date>{New.created_date}</date>
      </div>
    );
  });
  return <div className="characters">{New}</div>;
};

export default ListNews;