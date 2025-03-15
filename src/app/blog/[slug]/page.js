"use client";

import { useState, useEffect } from "react";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import TopHeader from "@/app/components/top-header";
import Image from "next/image";
import Link from "next/link";

export default function BlogPost({ params }) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchBlogPost();
  }, []);

  const fetchBlogPost = async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/blogs/${params.slug}`);

      if (!res.ok) {
        if (res.status === 404) {
          throw new Error("Blog post not found");
        }
        throw new Error("Failed to fetch blog post");
      }

      const data = await res.json();
      setPost(data);
      setError("");
    } catch (error) {
      console.error("Error fetching blog post:", error);
      setError(
        error.message || "Failed to load blog post. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <>
        <TopHeader />
        <Header />
        <div className="container mx-auto py-12 max-w-4xl px-4 flex justify-center">
          <div className="text-xl">Loading blog post...</div>
        </div>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <TopHeader />
        <Header />
        <div className="container mx-auto py-12 max-w-4xl px-4">
          <div className="bg-red-100 text-red-700 p-6 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-2">Error</h2>
            <p>{error}</p>
            <Link href="/blog">
              <button className="mt-4 text-indigo-600 hover:text-indigo-700">
                ← Back to Blogs
              </button>
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (!post) {
    return (
      <>
        <TopHeader />
        <Header />
        <div className="container mx-auto py-12 max-w-4xl px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Blog post not found</h2>
            <Link href="/blog">
              <button className="text-indigo-600 hover:text-indigo-700">
                ← Back to Blogs
              </button>
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <TopHeader />
      <Header />
      <article className="container mx-auto py-12 max-w-4xl px-4">
        <div className="space-y-8">
          <Link href="/blog">
            <button className="text-indigo-600 hover:text-indigo-700 mb-4">
              ← Back to Blogs
            </button>
          </Link>

          <div className="relative h-[400px] w-full">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl font-bold">{post.title}</h1>
            <p className="text-gray-600">
              {new Date(post.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <div
              className="prose prose-lg max-w-none blog-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}
