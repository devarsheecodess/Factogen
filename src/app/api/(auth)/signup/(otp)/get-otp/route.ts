import otpGenerator from "otp-generator";
import { NextResponse } from "next/server";
import { redis } from "@/db/redis";
import nodemailer from "nodemailer";
import { connectToDB } from "@/db/mongodb";
import { users } from "@/db/schema/users";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASS,
  },
});

export async function POST(req: Request) {
  const { _id, email } = await req.json();

  if (!_id) {
    return NextResponse.json({ error: "User ID is required" }, { status: 400 });
  }

  await connectToDB();
  const isVerified = await users.findOne({ _id });
  if (isVerified?.verified) {
    return NextResponse.json(
      { error: "User is already verified" },
      { status: 201 }
    );
  }

  const OTP: Number = otpGenerator.generate(6, {
    upperCaseAlphabets: false,
    specialChars: false,
    lowerCaseAlphabets: false,
  });

  // Store OTP in redis
  await redis.hset("OTPs", { [_id]: OTP });

  const mailOptions = {
    from: process.env.NODEMAILER_USER,
    to: email,
    subject: "Your OTP Code for Factogen",
    text: `Your OTP is: ${OTP}. It expires in 5 minutes.`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, message: "OTP sent to email." });
  } catch (error) {
    console.error("Nodemailer Error:", error);
    return NextResponse.json({ success: false || "Error sending OTP." });
  }
}
