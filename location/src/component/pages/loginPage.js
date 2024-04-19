import React, { useState } from "react";
import Login from "../template/login/login";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const base_url=process.env.BASE_URL;


function LoginPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in all required fields");
      return;
    }

    try {
     
      const response = await axios.post('http://localhost:3001/auth/login', {
        email,
        password,
      });
      console.log(response.data);

      navigate("/inscription");
      console.log(base_url)
    } catch (error) {
      console.error("Error during user login:", error);
    }
  };

  return (
    <div>
      <Login
        onEmailChange={handleChange}
        onPasswordChange={handleChange}
        onSubmit={onSubmit}
        email={email}
        password={password}
      />
    </div>
  );
}

export default LoginPage;
