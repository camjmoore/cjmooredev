import { getPosts } from "@/sanity/sanity-utils";
import Link from "next/link";

export default async function Posts() {
  const posts = await getPosts();

  return (
    <div className="flex flex-col">
      <h2 className="self-start pl-1 text-4xl text-zinc-400 font-semibold">
        Posts
      </h2>

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
              <h3 className="px-2 text-xl w-full bg-slate-800 backdrop-blur-md rounded-sm">
                {post.name}
              </h3>
            </Link>
            <div className="flex justify-end pl-6">
              {post.tags.map((tag, index) => (
                <small
                  key={index}
                  className="px-1 mx-1 mt-4 rounded-sm bg-gray-900"
                >
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
