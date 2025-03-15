import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import TopHeader from "@/app/components/top-header";
import Image from "next/image";
import Link from "next/link";
const getBlogPost = (slug) => {
  // This would typically fetch from a CMS or database
  // For demo purposes, we'll return static data
  return {
    title: "You Are Under Construction",
    date: "June 10, 2024",
    image: "",
    content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
      eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
      in culpa qui officia deserunt mollit anim id est laborum.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
      eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
      in culpa qui officia deserunt mollit anim id est laborum.


        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
      eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
      in culpa qui officia deserunt mollit anim id est laborum.
    `,
  };
};

export default function BlogPost({ params }) {
  const post = getBlogPost(params.slug);

  return (
    <>
      <TopHeader />
      <Header />
      <article className="container mx-auto py-12 max-w-4xl">
        <div className="space-y-8">
          <Link href="/blog">
            <button variant="ghost" className="mb-4">
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
            <p className="text-muted-foreground">{post.date}</p>
            <div className="prose prose-lg dark:prose-invert">
              {post.content.split("\n\n").map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}
