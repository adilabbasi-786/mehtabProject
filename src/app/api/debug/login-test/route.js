import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectDB from "@/app/lib/db";
import Admin from "@/app/models/Admin";

export async function GET() {
  try {
    await connectDB();

    // Check if admin exists
    const admin = await Admin.findOne({ username: "admin" });

    if (!admin) {
      return NextResponse.json(
        {
          error: "Admin user not found",
          action: "Please visit /admin/setup to create an admin user",
        },
        { status: 404 }
      );
    }

    // Test password comparison with the known password
    const testPassword = "admin123";
    const isPasswordCorrect = await bcrypt.compare(
      testPassword,
      admin.password
    );

    return NextResponse.json({
      adminExists: true,
      username: admin.username,
      passwordTest: {
        testPassword: testPassword,
        passwordHashLength: admin.password.length,
        isPasswordCorrect: isPasswordCorrect,
      },
      nextSteps: isPasswordCorrect
        ? "Password is correct. You should be able to log in with these credentials."
        : "Password is incorrect. You may need to recreate the admin user.",
    });
  } catch (error) {
    console.error("Login test error:", error);
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 }
    );
  }
}
