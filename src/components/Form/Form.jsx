import React, { useState } from "react";
import "./Form.css";
// import { useNavigate } from "react-router-dom";


export const Form = () => {
//   let navigate = useNavigate();
  const [data, setData] = useState({
    firstname: "",
    lastname:"",
    email: "",
    birthdate: ""
  });
  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("sending data..." + data.firstname + " " + data.lastname + " " +data.email+ " " +data.birthdate);
    // setTimeout(() => {
    //     navigate("/");
    //   }, 1000);
      
    let firstName = data.firstname;
    let lastName = data.lastname;
    let email = data.email;
    let date = data.birthdate;

    let dataBase = JSON.parse(localStorage.getItem('myform')) || [];

    const information = {
        firstName,
        lastName,
        email,
        date   
     }

     dataBase.push(information)


    localStorage.setItem('myform', JSON.stringify(dataBase));
  };

  return (
    <div className="form_container">
    <form id = "myform" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="firstname"
        onChange={handleInputChange}
        name="firstname"
        id="firstname"
      />
      <input
        type="text"
        placeholder="lastname"
        onChange={handleInputChange}
        name="lastname"
        id="lastname"
      />
      <input
        type="email"
        placeholder="email"
        onChange={handleInputChange}
        name="email"
        id="email"
      />
      <input
        type="date"
        placeholder="birthdate"
        onChange={handleInputChange}
        name="birthdate"
        id="birthdate"
      />
      
      <button type="submit">Send</button>
    </form>
    </div>
  );
};

export default Form;