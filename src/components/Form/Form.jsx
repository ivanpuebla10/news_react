import React, { useState } from "react";
import "./Form.css";
import { useNavigate } from "react-router-dom";


export const Form = () => {
  let navigate = useNavigate();
  const [data, setData] = useState({
    title: "",
    section:"",
    subcategory: "",
    abstract: ""
  });
  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("sending data..." + data.title + " " + data.section + " " +data.subcategory+ " " +data.abstract);
    setTimeout(() => {
        navigate("/");
      }, 1000);
      
    let title = data.title;
    let section = data.section;
    let subcategory = data.subcategory;
    let abstract = data.abstract;

    let dataBase = JSON.parse(localStorage.getItem('myform')) || [];

    const information = {
      title,
      section,
      subcategory,
      abstract   
     }

     dataBase.push(information)


    localStorage.setItem('myform', JSON.stringify(dataBase));
  };

  return (
    <div className="form_container">
    <form id = "myform" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        onChange={handleInputChange}
        name="title"
        id="title"
      />
      <input
        type="text"
        placeholder="Section"
        onChange={handleInputChange}
        name="section"
        id="subsection"
      />
      <input
        type="text"
        placeholder="Subsection"
        onChange={handleInputChange}
        name="subsection"
        id="subsection"
      />
      <input
        type="text"
        placeholder="Abstract"
        onChange={handleInputChange}
        name="abstract"
        id="abstract"
      />
      
      <button type="submit">Send</button>
    </form>
    </div>
  );
};

export default Form;