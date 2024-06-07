import { REQUIRED_FIELD_MESSAGE } from "./validation.const";

export const buildValidationFieldResult = (errorMessage: string) => ({
  succeeded: false,
  errorMessage,
});

export const buildValidationSucceededResult = () => ({
  succeeded: true,
});

export const buildRequiredFieldValidationFailedResponse = () =>
  buildValidationFieldResult(REQUIRED_FIELD_MESSAGE);
