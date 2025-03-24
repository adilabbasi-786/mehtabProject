import { NextResponse } from "next/server";
import connectDB from "@/app/lib/db";
import Blog from "@/app/models/Blog";
import { auth } from "@/app/middleware/auth";

// Get all blogs
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get("limit")) || 0;

    await connectDB();

    let query = Blog.find().sort({ createdAt: -1 });

    if (limit > 0) {
      query = query.limit(limit);
    }

    const blogs = await query;

    return NextResponse.json(blogs);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}

// Create new blog (protected)
export const POST = auth(async (req) => {
  try {
    console.log("Creating new blog");
    await connectDB();

    const { title, content, image } = await req.json();
    console.log("Blog data received:", {
      title,
      imageProvided: !!image,
      contentLength: content?.length,
    });

    // Validate required fields
    if (!title || !title.trim()) {
      return NextResponse.json({ error: "Title is required" }, { status: 400 });
    }

    if (!content || !content.trim()) {
      return NextResponse.json(
        { error: "Content is required" },
        { status: 400 }
      );
    }

    if (!image) {
      return NextResponse.json({ error: "Image is required" }, { status: 400 });
    }

    // Create the blog
    const blog = await Blog.create({
      title: title.trim(),
      content,
      image,
    });

    console.log("Blog created successfully with ID:", blog._id);
    return NextResponse.json(blog);
  } catch (error) {
    console.error("Error creating blog:", error);
    return NextResponse.json(
      { error: "Failed to create blog: " + error.message },
      { status: 500 }
    );
  }
});
