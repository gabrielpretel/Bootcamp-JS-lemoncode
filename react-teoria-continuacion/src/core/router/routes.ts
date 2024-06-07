export const routesPrefixes = {
  accountList: "/acount-list",
  movements: "/movements",
  transfer: "/transfer",
};

export const appRoutes = {
  root: "/",
  accountList: routesPrefixes.accountList,
  editAccount: "/edit-account/:id",
  movements: "/movements/:id",
  transfer: "/transfer",
  transferFromAccount: `${routesPrefixes.transfer}/:id`,
};
