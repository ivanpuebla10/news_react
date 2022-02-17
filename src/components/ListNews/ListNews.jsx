import "./ListNews.css";
import axios from "axios";
import React, { useState, useEffect } from "react";



const ListNews = () => {
  //inicializamos estado
  const [menus, setMenus] = useState([]);
  //funcion que hace la peticion axios y setea los menus
  const getMenus = async () => {
    try {
      const response = await axios.get(
        "https://restaurant-api-ejercicios.herokuapp.com/menus"
      );
      setMenus(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  //con useEffect cuando se monta el componente llama a la funcion de arriba
  useEffect(() => {
    getMenus();
  }, []);
  // variable que reccore los menus y me los devuelve de uno en uno
  const menu = menus.map((menu) => {
    return (
      <div className="menu_container" key={menu._id}>
        
        <h2>{menu.name}</h2>
        <h3>{menu.description}</h3>
        <h3>{menu.pricing[0].priceString}</h3>
      </div>
    );
  });
  return <div className ="principal">
    {/* <h1>OUR MENUS</h1> */}
    {menu}
    </div>;
};

export default ListNews;
