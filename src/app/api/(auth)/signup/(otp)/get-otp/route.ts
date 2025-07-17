import otpGenerator from "otp-generator";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { _id } = await req.json();
  if (!_id) {
    return NextResponse.json({ error: "User ID is required" }, { status: 400 });
  }
  const OTP = otpGenerator.generate(6, {
    upperCaseAlphabets: false,
    specialChars: false,
    lowerCaseAlphabets: false,
  });

  // Store OTP in redis
  console.log(_id);
  console.log(OTP);
}
