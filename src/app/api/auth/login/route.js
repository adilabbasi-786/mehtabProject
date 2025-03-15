import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import connectDB from "@/app/lib/db";
import Admin from "@/app/models/Admin";

export async function POST(request) {
  try {
    console.log("Login API called");
    await connectDB();
    console.log("Connected to database");

    const { username, password } = await request.json();
    console.log("Login attempt for username:", username);

    // Check if admin exists
    const admin = await Admin.findOne({ username });
    if (!admin) {
      console.log("Admin not found");
      return NextResponse.json(
        { error: "Invalid username or password" },
        { status: 401 }
      );
    }
    console.log("Admin found with ID:", admin._id);
    console.log("Stored password hash length:", admin.password.length);

    // Check password
    console.log("Comparing password...");
    const isPasswordCorrect = await bcrypt.compare(password, admin.password);
    console.log("Password comparison result:", isPasswordCorrect);

    if (!isPasswordCorrect) {
      console.log("Password incorrect");
      return NextResponse.json(
        { error: "Invalid username or password" },
        { status: 401 }
      );
    }

    // Create JWT Token
    console.log("Creating JWT token...");
    const token = jwt.sign(
      { id: admin._id, username: admin.username },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    console.log("Login successful, token created");
    return NextResponse.json({ message: "Login successful", token });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      {
        error: "Server error: " + error.message,
        stack: error.stack,
      },
      { status: 500 }
    );
  }
}
