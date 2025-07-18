import { atom } from "jotai";

export const userAtom = atom({
  name: "",
  email: "",
  password: "",
});

export const loadingAtom = atom(false);

export const loginAtom = atom({
  email: "",
  password: "",
});

export const userOTPAtom = atom({
  _id: "",
  name: "",
  email: "",
  verified: false,
});

export const OTPAtom = atom(0);
export const UserOTPInputAtom = atom(0);
