import React from 'react';
import Form from "../../organism/form"; 
import './registre.css';
import image from "../../../assets/image.jpg"
import { Link } from "../../atom/link/link"


function Registre({onEmailChange, onPasswordChange,onNameChange,onPhoneNumberChange, onSubmit , email, password,phoneNumber,name}) {
  const registerFormProps = {
    buttonProps: {
      id: 'registerButton',
      name: 'registerButton',
      value: "S'inscrire",
      labelButton: "S'inscrire",
      onClick: onSubmit,
    },
    inputLabelProps: [
        {
          inputProps: {
            id: 'nameInput',
            name: 'name',
            type: 'text',
            placeholder: 'Nom et prénom',
            onChange: onNameChange, 
            value: name, 

          },
          labelProps: {
              id: 'nameLabel',
              label: 'Nom et prénom', 
              styleType: 'form-label' 
            },
        },
        {
          inputProps: {
            id: 'emailInput',
            name: 'email',
            type: 'email',
            placeholder: 'Adresse e-mail',
            onChange: onEmailChange, 
            value: email, 
          },
          labelProps: {
              id: 'emailLabel',
              label: 'Adresse e-mail', 
              styleType: 'form-label' 
            },
           // Message d'erreur pour l'e-mail
        },
        {
          inputProps: {
            id: 'passwordInput',
            name: 'password',
            type: 'password',
            placeholder: 'Mot de passe',
            onChange: onPasswordChange, 
            value: password, 
          },
          labelProps: {
              id: 'passwordLabel',
              text: 'Mot de passe', 
              styleType: 'form-label' 
            },
           // Message d'erreur pour le mot de passe
        },
        {
          inputProps: {
            id: 'phoneNumber',
            name: 'phoneNumber',
            type: 'Number',
            placeholder: 'Votre numero',
            onChange: onPhoneNumberChange, 
            value: phoneNumber, 
          },
          labelProps: {
              id: 'passwordLabel',
              text: 'Mot de passe', 
              styleType: 'form-label' 
            },
           // Message d'erreur pour le mot de passe
        },
      ],
  };


  return (
    <div className="registerTemplate">
      <div className="registerContent">
        <div className="registerImage">
          <img src={image} alt="connexion" />
        </div>
        <div className="registerForm">
          <h1> Créez votre compte </h1>
          <Form formProps={registerFormProps} />
          <div className="register">
            <p>Déjà inscrit(e) ?</p>
            <Link
              href="/"
              labelLink="Accéder"
              styleType="register-link"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registre;
