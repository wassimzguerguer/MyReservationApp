import React, { useState } from "react";
import axios from "axios";
import Registre from "../template/registre/registre";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
    const navigate = useNavigate();
  

  const [formData, setFormData] = useState({
//name: "",
    email: "",
    password: "",
    //phoneNumber: "",
  });

  const {  email, password } = formData;


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      alert("Please fill in all required fields");
      return;
    }

    try {
      // Send a POST request to the backend API endpoint
      const response = await axios.post(
        "http://localhost:3001/users",
        {
          //name,
          email,
          password,
          //phoneNumber,
        }
      );

      console.log(response.data);

      navigate("/");
    } catch (error) {
      console.error("Error during user registration:", error);
    }
  };

  return (
    <div>
      <Registre
        onEmailChange={handleChange}
        onPasswordChange={handleChange}
        //onNameChange={handleChange}
        //onPhoneNumberChange={handleChange}
        
        onSubmit={handleSubmit}
        //name={name}
        email={email}
        password={password}
        //phoneNumber={phoneNumber} 
      />
    </div>
  );
}

export default RegisterPage;
