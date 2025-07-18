"use client";
import { useAtom } from "jotai";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import {
  OTPAtom,
  userOTPAtom,
  loadingAtom,
  UserOTPInputAtom,
} from "@/lib/atoms";
import { useEffect } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import axios from "axios";
import { set } from "mongoose";

export default function VerifyEmail() {
  const [OTP, setOTP] = useAtom(OTPAtom);
  const [userOTP, setUserOTP] = useAtom(UserOTPInputAtom);
  const [loading, setLoading] = useAtom(loadingAtom);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      console.log(userOTP);
      const userInfo = JSON.parse(localStorage.getItem("user") || "{}");
      const response = await axios.post("/api/signup/check-otp", {
        _id: userInfo._id,
        OTP: userOTP,
      });
      if (response.status === 200) {
        alert("OTP verified successfully!");
        window.location.href = "/dashboard";
      }
    } catch (err) {
      alert("Please try again");
    } finally {
      setLoading(false);
    }
  };

  const getOTP = async (id: string, email: string) => {
    const response = await axios.post("/api/signup/get-otp", {
      _id: id,
      email: email,
    });
    if (response.status === 201) {
      alert("User is already verified");
      window.location.href = "/dashboard";
      return;
    }
    setOTP(response.data.OTP);
  };

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("user") || "{}");
    if (userInfo.verified) {
      window.location.href = "/dashboard";
      return;
    }
    if (!userInfo._id) {
      console.log(userInfo);
      console.log(userInfo.email);
      alert("User ID is not available");
      return;
    }
    getOTP(userInfo._id, userInfo.email);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 flex items-center justify-center p-8">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-500 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="relative z-10 bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20 shadow-2xl max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Verify Your Account
          </h1>
          <p className="text-purple-200 text-lg">
            Enter the 6-digit code sent to your email
          </p>
        </div>

        {/* OTP Input */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-col gap-5">
            <InputOTP
              maxLength={6}
              pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
              onChange={(value) => setUserOTP(value)}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} className="text-white" />
                <InputOTPSlot index={1} className="text-white" />
                <InputOTPSlot index={2} className="text-white" />
                <InputOTPSlot index={3} className="text-white" />
                <InputOTPSlot index={4} className="text-white" />
                <InputOTPSlot index={5} className="text-white" />
              </InputOTPGroup>
            </InputOTP>
            {/* Actions */}
            <div className="text-center space-y-4">
              <button
                onClick={(e) => handleSubmit(e)}
                disabled={loading}
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 px-6 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg"
              >
                Verify Code
              </button>

              <p className="text-purple-200 text-sm">
                Didn't receive the code?
                <button className="text-purple-300 hover:text-white underline ml-1 transition-colors duration-300">
                  Resend
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
