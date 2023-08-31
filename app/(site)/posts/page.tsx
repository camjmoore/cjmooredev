import { getPosts } from "@/sanity/sanity-utils";
import Link from "next/link";

export default async function Posts() {
  const posts = await getPosts();

  return (
    <div className="flex flex-col">
      <h1 className="self-start px-3 py-1 w-full bg-abyss2 bg-opacity-60 backdrop-blur-sm rounded-md">
        Posts
      </h1>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <Link
              href={`/posts/${post.slug}`}
              className="flex items-center ml-6 mt-8 rounded-sm"
            >
              <p className="text-md min-w-[70px]">
                {post._createdAt.toString().substring(5, 10)}
              </p>
              <h2 className="px-2 w-4/5 bg-abyss2 bg-opacity-60 rounded-sm">
                {post.name}
              </h2>
            </Link>
            <div className="flex pl-24">
              {post.tags.map((tag, index) => (
                <small key={index} className="px-1 mx-1 my-1 text-ignis1">
                  {`#${tag}`}
                </small>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
