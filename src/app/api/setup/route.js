import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectDB from "@/app/lib/db";
import Admin from "@/app/models/Admin";

export async function GET() {
  try {
    console.log("Setup API called");
    await connectDB();
    console.log("Connected to database");

    // Check if admin already exists
    const adminExists = await Admin.findOne({ username: "admin" });
    console.log("Admin exists check:", !!adminExists);

    if (adminExists) {
      return NextResponse.json({ message: "Admin user already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash("admin123", salt);
    console.log("Password hashed");

    // Create admin user
    const admin = new Admin({
      username: "admin",
      password: hashedPassword,
    });

    await admin.save();
    console.log("Admin saved successfully");

    return NextResponse.json({
      message: "Admin user created successfully",
      credentials: {
        username: "admin",
        password: "admin123",
      },
    });
  } catch (error) {
    console.error("Error creating admin user:", error);
    return NextResponse.json(
      { error: "Server error: " + error.message },
      { status: 500 }
    );
  }
}
