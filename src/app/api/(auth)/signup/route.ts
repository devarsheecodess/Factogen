import { users } from "@/db/schema/users";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { connectToDB } from "@/db/mongodb";

export async function POST(req: Request) {
  const { name, email, password } = await req.json();
  try {
    await connectToDB();

    const existingUser = await users.findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new users({
      name,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
