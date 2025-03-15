import { NextResponse } from "next/server";
import connectDB from "@/app/lib/db";
import Blog from "@/app/models/Blog";
import { auth } from "@/app/middleware/auth";

// Get all blogs
export async function GET() {
  try {
    console.log("Fetching all blogs");
    await connectDB();
    const blogs = await Blog.find().sort({ createdAt: -1 });
    console.log(`Found ${blogs.length} blogs`);
    return NextResponse.json(blogs);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { error: "Failed to fetch blogs: " + error.message },
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
