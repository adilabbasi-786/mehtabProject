import { NextResponse } from "next/server";
import connectDB from "@/app/lib/db";
import Admin from "@/app/models/Admin";
import mongoose from "mongoose";

export async function GET() {
  try {
    await connectDB();

    // Get database information
    const adminUsers = await Admin.find({}, { password: 0 }); // Exclude password from results
    const dbName = mongoose.connection.db.databaseName;
    const collections = await mongoose.connection.db
      .listCollections()
      .toArray();
    const collectionNames = collections.map((c) => c.name);

    // Check if admin exists
    const adminExists = await Admin.findOne({ username: "admin" });

    return NextResponse.json({
      database: {
        name: dbName,
        collections: collectionNames,
      },
      adminUsers: adminUsers,
      adminExists: !!adminExists,
      adminUsername: adminExists ? adminExists.username : null,
      // Don't return the actual password hash, just its length for debugging
      passwordHashLength: adminExists ? adminExists.password.length : null,
    });
  } catch (error) {
    console.error("Debug error:", error);
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 }
    );
  }
}
