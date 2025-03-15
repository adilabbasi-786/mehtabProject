import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "You Are Under Construction",
    date: "June 10, 2024",
    image: "",
    slug: "under-construction",
  },
  {
    id: 2,
    title: "Jesus at the Center",
    date: "June 3, 2024",
    image: "",
    slug: "jesus-at-the-center",
  },
  {
    id: 3,
    title: "Let's Grow",
    date: "May 27, 2024",
    image: "",
    slug: "lets-grow",
  },
];

export default function BlogsPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col"
          >
            {/* Image */}
            <div className="relative h-48 w-full">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-4 flex-grow">
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-500 text-sm mb-4">{post.date}</p>
              <Link
                href="#"
                className="text-purple-600 hover:text-purple-700 font-medium"
              >
                VIEW THESE RESOURCES
              </Link>
            </div>

            {/* Footer */}
            <div className="p-4 border-t">
              <Link href={`/blog/${post.slug}`}>
                <button className="w-full py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-100 transition">
                  Read Full Blog
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
