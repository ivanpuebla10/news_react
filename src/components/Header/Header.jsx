import "./Header.scss";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const Header = () => {

  const [open, setOpen] = useState(true)
  const handleCLick = () => {
      setOpen(!open)
  }    
  const handleCLickTrue = () => {
      setOpen(true)
  }    

  return (
    <div className="header">
      <span>SPORTS</span>
      <div className='btn'>
     <div className='btn__burger' onClick={handleCLick}>
     </div>
      </div>
      <div  className={`${open ? "list" : "list list_active"}`}>
      <span onClick={handleCLickTrue}>
          <Link to="/">Home</Link>
      </span>
      <span onClick={handleCLickTrue}>
          <Link to="/news">News</Link>
      </span>
      <span onClick={handleCLickTrue}>
          <Link to="/form">Publish</Link>
      </span>
      </div>
    </div>
  );
};

export default Header;
