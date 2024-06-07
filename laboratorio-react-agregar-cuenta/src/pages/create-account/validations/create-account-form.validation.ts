import { FormValidationResult } from "@/common/validations/validation.model";
import { AccountVm } from "../create-account.vm";
import {
  validateNameField,
  validateTypeField,
} from "./create-account-field.validation";

export const validateForm = (
  account: AccountVm
): FormValidationResult<AccountVm> => {
  const fieldValidationResults = [
    validateTypeField(account.type),
    validateNameField(account.name),
  ];

  return {
    succeeded: fieldValidationResults.every((f) => f.succeeded),
    errors: {
      type: fieldValidationResults[0].errorMessage ?? "",
      name: fieldValidationResults[1].errorMessage ?? "",
    },
  };
};
