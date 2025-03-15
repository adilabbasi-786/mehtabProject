import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectDB from "@/app/lib/db";
import Admin from "@/app/models/Admin";

export async function GET() {
  try {
    await connectDB();

    // Delete existing admin users
    await Admin.deleteMany({ username: "admin" });

    // Create new admin user
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash("admin123", salt);

    const admin = new Admin({
      username: "admin",
      password: hashedPassword,
    });

    await admin.save();

    // Verify the new admin
    const newAdmin = await Admin.findOne({ username: "admin" });
    const isPasswordCorrect = await bcrypt.compare(
      "admin123",
      newAdmin.password
    );

    return NextResponse.json({
      message: "Admin user reset successfully",
      verification: {
        adminExists: !!newAdmin,
        passwordCorrect: isPasswordCorrect,
      },
      credentials: {
        username: "admin",
        password: "admin123",
      },
    });
  } catch (error) {
    console.error("Reset admin error:", error);
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 }
    );
  }
}
