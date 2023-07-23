import { getPosts } from "../../sanity/sanity-utils";

export default async function Posts() {
  const posts = await getPosts();

  return (
    <div>
      {posts.map((posts) => (
        <div key={posts._id}>{posts.name}</div>
      ))}
    </div>
  );
}
