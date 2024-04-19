import React from 'react';
import Form from "../../organism/form"; 
import './paiement.css'; 
import { Link } from "../../atom/link/link";

function PaymentTemplate({ onSubmit, cardNumber, onCardNumberChange, expiryDate, onExpiryDateChange, cvv, onCvvChange }) {
  
  const paymentFormProps = {
    buttonProps: {
      id: 'paymentButton',
      name: 'paymentButton',
      value: 'Payer',
      labelButton: 'Payer',
      onClick: onSubmit,
    },
    inputLabelProps: [
      {
        inputProps: {
          id: 'cardNumberInput',
          name: 'cardNumber',
          type: 'text',
          placeholder: 'Numéro de carte',
          value: cardNumber,
          onChange: onCardNumberChange,
        },
        labelProps: {
          id: 'cardNumberLabel',
          label: 'Numéro de carte',
          styleType: 'form label'
        },
        // Message d'erreur pour le numéro de carte
      },
      {
        inputProps: {
          id: 'expiryDateInput',
          name: 'expiryDate',
          type: 'text',
          placeholder: 'Date d\'expiration',
          value: expiryDate,
          onChange: onExpiryDateChange,
        },
        labelProps: {
          id: 'expiryDateLabel',
          text: 'Date d\'expiration',
          styleType: 'form label'
        },
        // Message d'erreur pour la date d'expiration
      },
      {
        inputProps: {
          id: 'cvvInput',
          name: 'cvv',
          type: 'password',
          placeholder: 'CVV',
          value: cvv,
          onChange: onCvvChange,
        },
        labelProps: {
          id: 'cvvLabel',
          text: 'CVV',
          styleType: 'form label'
        },
        // Message d'erreur pour le CVV
      }
    ],
    linkProps: {
      href: "/terms",
      labelLink: 'Termes et conditions',
      styleType: "terms-link"
    }
  };

  // Rendu de la template de paiement
  return (
    <div className="paymentTemplate">
      <div className="paymentContent">
        <div className="paymentForm">
          <h1> Paiement sécurisé </h1>
          {/* Utilisation du composant Form avec les props pour le formulaire de paiement */}
          <Form formProps={paymentFormProps} />
          <div className="paymentTerms">
            <p>En effectuant ce paiement, vous acceptez nos</p>
            <Link
              href="/terms"
              labelLink="Termes et conditions"
              styleType="terms-link"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentTemplate;
