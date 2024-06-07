export interface AccountVm {
  type: string;
  name: string;
}

export const createEmptyAccountVm = (): AccountVm => ({
  type: "",
  name: "",
});

export interface AccountFormErrors {
  type: string;
  name: string;
}

export const createEmptyAccountFormErrors = (): AccountVm => ({
  type: "",
  name: "",
});
