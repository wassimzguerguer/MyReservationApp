import React from 'react';
import Form from "../../organism/form"; 
import './forgetPassword.css';
import { Link } from "../../atom/link/link"

function ForgetPassword() {
  const forgetPasswordFormProps = {
    buttonProps: {
      id: 'forgetPasswordButton',
      name: 'forgetPasswordButton',
      value: "Réinitialiser le mot de passe",
      labelButton: "Réinitialiser le mot de passe",
      styleType:".form-button"
    },
    inputLabelProps: [
      {
        inputProps: {
          id: 'emailInput',
          name: 'email',
          type: 'email',
          placeholder: 'Adresse e-mail',
        },
        labelProps: {
          id: 'emailLabel',
          label: 'Adresse e-mail', 
          styleType: 'form-label' 
        },
    
    // Ajoutez un message d'erreur vide
    errorMessage: '',
  }
        //error message
    
    ],
  };

  return (
    <div className="forgetPasswordTemplate">
      <div className="forgetPasswordContent">
        <div className="forgetPasswordForm">
          <h1> Réinitialiser le mot de passe </h1>
          <p>Insérez votre e-mail et vous recevrez la démarche à suivre pour récupérer votre mot de passe.

</p>
          <Form formProps={forgetPasswordFormProps} />
          <Link
            href="/"
            labelLink="Retourner à la page de connexion"
            styleType="return-link"
          />
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
