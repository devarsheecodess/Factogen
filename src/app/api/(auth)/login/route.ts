import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { connectToDB } from "@/db/mongodb";
import { users } from "@/db/schema/users";

export async function POST(req: Request) {
  const { email, password } = await req.json();
  try {
    await connectToDB();
    console.log(email);
    const user = await users.findOne({ email });
    console.log(user);
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { message: "Invalid password" },
        { status: 401 }
      );
    }
    return NextResponse.json(
      { message: "Login successful", user: user },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
