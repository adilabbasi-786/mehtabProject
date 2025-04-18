import { NextResponse } from "next/server";
import connectDB from "@/app/lib/db";
import Blog from "@/app/models/Blog";

// GET /api/blogs/[id]
export async function GET(request, context) {
  const { params } = context; // Access params from context

  try {
    console.log("Fetching blog with ID:", params.id);
    await connectDB();

    const blog = await Blog.findById(params.id);

    if (!blog) {
      console.log("Blog not found with ID:", params.id);
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    console.log("Blog found:", blog.title);
    return NextResponse.json(blog);
  } catch (error) {
    console.error("Error fetching blog:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog: " + error.message },
      { status: 500 }
    );
  }
}

// DELETE /api/blogs/[id]
export async function DELETE(request, context) {
  const { params } = context;

  try {
    await connectDB();
    const blog = await Blog.findByIdAndDelete(params.id);

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Blog deleted successfully" });
  } catch (error) {
    console.error("Error deleting blog:", error);
    return NextResponse.json(
      { error: "Failed to delete blog: " + error.message },
      { status: 500 }
    );
  }
}
