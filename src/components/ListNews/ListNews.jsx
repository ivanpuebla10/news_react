import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import './ListNews.scss'


const ListNews = () => {
  const { news, getNews } = useContext(GlobalContext);
  useEffect(() => {
    getNews();
  }, []);
  const New = news.map((New) => {
    console.log(New)
    if(New.title && New.abstract) {
    return (
      <div className="new" key={New.id}>
        <h2>{New.title.toUpperCase()}</h2>
        <h3 className="section_container">Section: {New.section.toUpperCase()}</h3>
        <p className="subsection_container">Subsection: {New.subsection.toUpperCase()}</p>
        <p className="abstract_container">{New.abstract}</p>
        <img src={New.multimedia[1].url} /><br/>
        <a className="link_container" href="{New.url}">Link to the new</a><br/>
        <date className="date_container">{New.created_date}</date>
      </div>
    );
  }
  });
  return <div className="news_container">{New}</div>;
};

export default ListNews;