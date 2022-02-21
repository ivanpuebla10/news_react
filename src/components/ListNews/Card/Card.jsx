import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../../context/GlobalState";
import './Card.scss'

const Card = () => {
  const { news, getNews } = useContext(GlobalContext);
  useEffect(() => {
    getNews();
  }, []);
  const New = news.map((New) => {
    console.log(New)
    if(New.title && New.abstract) {
    return (
      <div className="new" key={New.id}>
        <div className="letter-container">
        <date className="date_container">{New.created_date}</date>
        <p className="subsection_container">Subsection: {New.subsection.toUpperCase()}</p>
        <h2>{New.title.toUpperCase()}</h2>
        <p className="abstract_container">{New.abstract}</p>
        <a className="link_container" href={New.url}>Link to the new</a><br/>
        </div>
        <img src={New.multimedia[1].url} /><br/>
      </div>
    );
  }
  });
  return <div className="news_container">{New}</div>;
};

export default Card;