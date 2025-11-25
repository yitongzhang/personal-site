import { getPostBySlug, getAllPosts } from "@/lib/posts";
import Link from "next/link";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  return (
    <article>
      <Link
        href="/writing"
        className="text-sm text-gray-500 hover:text-gray-700 mb-8 inline-block"
      >
        ← Back to writing
      </Link>
      <h1 className="text-3xl font-bold mb-2 mt-4">{post.title}</h1>
      <time className="text-sm text-gray-500 block mb-8">{post.date}</time>
      <div
        className="prose prose-gray max-w-none"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </article>
  );
}
