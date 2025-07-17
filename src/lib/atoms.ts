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

export const OTPAtom = atom("");

export const userOTPAtom = atom({
  _id: "",
  name: "",
  email: "",
  verified: false,
});
