export interface MovementVm {
  id: string;
  description: string;
  amount: string;
  balance: string;
  transaction: Date;
  realTransaction: Date;
  accountId: string;
}
export interface AccountVm {
  id: string;
  iban: string;
  type: string;
  name: string;
  balance: string;
  lastTransaction: Date;
}

export const defaultAccountItem: AccountVm = {
  id: "",
  iban: "",
  type: "",
  name: "",
  balance: "0",
  lastTransaction: new Date(""),
};
