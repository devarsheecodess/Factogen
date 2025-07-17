import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { _id, OTP } = await req.json();
  try {
    // Connect to redis
    // Check OTP corresponding to id
    // true ? success : failed
  } catch (err) {
    return NextResponse.json(
      { message: "An error occurred while processing your request" },
      { status: 500 }
    );
  }
}
