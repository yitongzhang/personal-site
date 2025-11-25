import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function WritingPage() {
  const posts = getAllPosts();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Writing</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug}>
            <Link href={`/writing/${post.slug}`} className="group">
              <h2 className="text-xl font-semibold mb-2 group-hover:text-gray-600 transition-colors">
                {post.title}
              </h2>
              <time className="text-sm text-gray-500">{post.date}</time>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
