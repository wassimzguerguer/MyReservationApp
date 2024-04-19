import React from 'react';
import Form from "../../organism/form"; 
import './login.css';
import image from "../../../assets/image.jpg"
import {Link} from "../../atom/link/link"

function Login({onEmailChange, onPasswordChange, onSubmit , email, password}) {
 const loginFormProps = {
    
    buttonProps: {
      
      id: 'loginButton',
      name: 'loginButton',
      value: 'Se connecter',
      labelButton: 'Se connecter',
      onClick: onSubmit,
    },
    
    inputLabelProps: [
    
      {
        inputProps: {
          id: 'emailInput',
          name: 'email',
          type: 'email',
          placeholder: 'Adresse e-mail',
          value: email, 
          onChange: onEmailChange, 
        },
        labelProps: {
            id: 'emailLabel',
            name: 'password',
            type: 'password',
            
            label: 'Adresse e-mail', 
            styleType: 'forml label' 
          },
         
      },
    
      {
        inputProps: {
          id: 'passwordInput',
          name: 'password',
          type: 'password',
          placeholder: 'Mot de passe',
          value: password, 
          onChange: onPasswordChange,
        },
        labelProps: {
            id: 'passwordLabel',
            text: 'Mot de passe', 
            styleType: 'form label' 
          },
        
            // Message d'erreur pour le mot de passe
      }
    ],
    linkProps: { 
      href: "/mot-de-passe-oublie", 
      labelLink: 'Mot de passe oublié ?', 
      styleType: "forgotPassword"
    }
   
  };

  return (
    <div className="loginTemplate">
      <div className="loginContent">
        <div className="loginImage">
          <img src={image} alt="connexion" />
        </div>
        <div className="loginForm">
          <h1> Connectez-vous à votre compte </h1>
          <Form formProps={loginFormProps} />
          <div className="register">
            <p>Vous n'avez pas de compte ?</p>
            <Link
              href="/inscription"
                labelLink="Créer un compte"
                 styleType="register-link"
                 />
            </div>
          
        </div>
      </div>
    </div>

  );
}

export default Login;
