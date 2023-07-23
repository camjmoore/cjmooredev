import { getPosts } from "../../sanity/sanity-utils";
import Link from "next/link";

export default async function Posts() {
  const posts = await getPosts();

  return (
    <div>
      {posts.map((post) => (
        <Link href={`/posts/${post.slug}`} key={post._id}>
          {post.name}
        </Link>
      ))}
    </div>
  );
}
