import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function WritingPage() {
  const posts = getAllPosts();

  return (
    <div className="animate-in">
      <h1 className="page-title">Writing</h1>
      <div>
        {posts.map((post, index) => (
          <Link
            key={post.slug}
            href={`/writing/${post.slug}`}
            className="post-item"
            style={{ animationDelay: `${index * 0.03}s` }}
          >
            <h2 className="post-title">{post.title}</h2>
            <time className="post-date">{post.date}</time>
          </Link>
        ))}
      </div>
    </div>
  );
}
