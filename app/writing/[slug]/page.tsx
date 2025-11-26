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
    <article className="animate-in">
      <Link href="/writing" className="back-link mb-12 inline-block">
        Writing
      </Link>
      <header className="mb-12">
        <h1 className="page-title !mb-3">{post.title}</h1>
        <time className="post-date">{post.date}</time>
      </header>
      <div
        className="prose-custom"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </article>
  );
}
