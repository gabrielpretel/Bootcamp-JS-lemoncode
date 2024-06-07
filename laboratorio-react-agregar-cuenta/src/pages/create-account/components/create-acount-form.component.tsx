import React from "react";
import {
  AccountFormErrors,
  AccountVm,
  createEmptyAccountFormErrors,
  createEmptyAccountVm,
} from "../create-account.vm";
import classes from "./create-account-form.component.module.css";
import { validateForm } from "../validations";

interface Props {
  onCreate: (accountInfo: AccountVm) => void;
}

export const CreateAccountFormComponent: React.FC<Props> = (props) => {
  const { onCreate } = props;
  const [account, setAccount] = React.useState<AccountVm>(
    createEmptyAccountVm()
  );

  const [errors, setErrors] = React.useState<AccountFormErrors>(
    createEmptyAccountFormErrors()
  );

  const handleFieldChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formValidationResult = validateForm(account);
    setErrors(formValidationResult.errors);

    if (formValidationResult.succeeded) {
      onCreate(account);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={classes.formContainer}>
          <div>
            <label className={classes.medium}>Tipo de cuenta</label>
            <select
              onChange={handleFieldChange}
              name="type"
              className={classes.medium}
            >
              <option value="0">Seleccionar</option>
              <option value="1">Cuenta Corriente</option>
              <option value="2">Cuenta de Ahorro</option>
              <option value="3">Cuenta de Nómina</option>
            </select>
            {errors.type && <p className={classes.error}>{errors.type}</p>}
          </div>
          <div>
            <label htmlFor="" className={classes.medium}>
              Alias
            </label>
            <input
              type="text"
              onChange={handleFieldChange}
              name="name"
              className={classes.medium}
            />
            {errors.type && <p className={classes.error}>{errors.type}</p>}
          </div>
        </div>
        <div className={classes.buttonContainer}>
          <button type="submit" className={classes.button}>
            GUARDAR
          </button>
        </div>
      </form>
    </div>
  );
};
