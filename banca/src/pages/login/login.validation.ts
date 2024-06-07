import {
  CredentialsFormErrors,
  createEmptyCredentialsFormErrors,
} from "./login.vm";

interface ValidationResult {
  succeeded: boolean;
  errors: CredentialsFormErrors;
}

export const validateForm = (
  credentials: CredentialsFormErrors
): ValidationResult => {
  let validationResult: ValidationResult = {
    succeeded: true,
    errors: createEmptyCredentialsFormErrors(),
  };

  if (!credentials.user.trim()) {
    // Si el campo de usuario está en blanco
    validationResult.errors = {
      ...validationResult.errors,
      user: "Debe informar el campo usuario.",
    };

    validationResult.succeeded = false;
  }

  if (!credentials.password.trim()) {
    //Si el campo de contraseña está en blanco
    validationResult.errors = {
      ...validationResult.errors,
      password: "Debe informar el campo contraseña.",
    };

    validationResult.succeeded = false;
  }

  return validationResult;
};
