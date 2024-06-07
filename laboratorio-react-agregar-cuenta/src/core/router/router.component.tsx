import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  AccountListPage,
  AccountPage,
  LoginPage,
  MovementListPage,
  TransferPage,
} from "@/pages";
import { appRoutes } from "./routes";
import { CreateAccountPage } from "@/pages/create-account/create-account.page";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={appRoutes.root} element={<LoginPage />} />
        <Route path={appRoutes.accountList} element={<AccountListPage />} />
        <Route path={appRoutes.editAccount} element={<AccountPage />} />
        <Route path={appRoutes.movements} element={<MovementListPage />} />
        <Route path={appRoutes.transfer} element={<TransferPage />} />
        <Route
          path={appRoutes.transferFromAccount}
          element={<TransferPage />}
        />
        <Route path={appRoutes.createAccount} element={<CreateAccountPage />} />
      </Routes>
    </BrowserRouter>
  );
};
