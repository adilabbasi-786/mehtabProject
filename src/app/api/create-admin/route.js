import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectDB from "@/app/lib/db";
import Admin from "@/app/models/Admin";

export async function GET() {
  try {
    console.log("Create admin API called");
    await connectDB();
    console.log("Connected to database");

    // Delete any existing admin users to start fresh
    const deleteResult = await Admin.deleteMany({ username: "admin" });
    console.log("Delete result:", deleteResult);

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash("admin123", salt);
    console.log("Password hashed, length:", hashedPassword.length);

    // Create admin user
    const admin = new Admin({
      username: "admin",
      password: hashedPassword,
    });

    const savedAdmin = await admin.save();
    console.log("Admin saved successfully:", savedAdmin._id);

    // Verify the password works
    const adminFromDb = await Admin.findOne({ username: "admin" });
    const passwordCheck = await bcrypt.compare(
      "admin123",
      adminFromDb.password
    );
    console.log("Password verification:", passwordCheck);

    return NextResponse.json({
      message: "Admin user created successfully",
      adminId: savedAdmin._id,
      passwordVerified: passwordCheck,
      credentials: {
        username: "admin",
        password: "admin123",
      },
    });
  } catch (error) {
    console.error("Error creating admin user:", error);
    return NextResponse.json(
      {
        error: "Server error: " + error.message,
        stack: error.stack,
      },
      { status: 500 }
    );
  }
}
