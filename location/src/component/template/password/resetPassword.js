import React from 'react';
import Form from "../../organism/form"; 
import './resetPassword.css'; // Assurez-vous d'avoir un fichier CSS correspondant

function ResetPassword() {
  const resetPasswordFormProps = {
    buttonProps: {
      id: 'resetPasswordButton',
      name: 'resetPasswordButton',
      value: "Récupérer le mot de passe",
      labelButton: "C'est parti !",
    },
    inputLabelProps: [
      {
        inputProps: {
          id: 'motInput',
          name: 'password',
          type: 'password',
          placeholder: 'Nouveau mot de passe',
        },
        labelProps: {
          id: 'passwordLabel',
          label: 'Nouveau mot de passe', 
          styleType: 'form-label' 
        },
        errorMessage: '', // Message d'erreur vide
      },
    ],
  };

  return (
    <div className="resetPasswordTemplate">
      <div className="resetPasswordContent">
        <div className="resetPasswordForm">
          <h1>Récupération du mot de passe</h1>
          <p>Tapez le nouveau mot de passe.</p>
          <Form formProps={resetPasswordFormProps} />
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
