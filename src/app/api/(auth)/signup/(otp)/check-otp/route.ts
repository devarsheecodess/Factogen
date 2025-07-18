import { NextResponse } from "next/server";
import { redis } from "@/db/redis";
import { connectToDB } from "@/db/mongodb";
import { users } from "@/db/schema/users";

export async function POST(req: Request) {
  const { _id, OTP } = await req.json();
  try {
    if (!_id || !OTP) {
      console.log("ID", _id, "OTP", OTP);
      return NextResponse.json(
        { error: "User ID and OTP are required" },
        { status: 400 }
      );
    }

    // Retrieve the stored OTP from Redis
    const storedOTP = await redis.hget("OTPs", _id);
    if (!storedOTP) {
      return NextResponse.json(
        { error: "OTP not found or expired" },
        { status: 404 }
      );
    }

    // Validate the OTP
    if (storedOTP !== Number(OTP)) {
      return NextResponse.json({ error: "Invalid OTP" }, { status: 400 });
    }

    await redis.hdel("OTPs", _id);
    await connectToDB();
    await users.findByIdAndUpdate({ _id }, { verified: true });

    await redis.hdel("userOTP", _id);

    return NextResponse.json(
      { message: "OTP verified successfully" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: "An error occurred while processing your request" },
      { status: 500 }
    );
  }
}
