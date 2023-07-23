import { getPost } from "../../../sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

type Props = { params: { post: string } };

export default async function Post({ params }: Props) {
  const slug = params.post;

  const post = await getPost(slug);

  return (
    <div>
      <header>
        <h1>{post.name}</h1>
      </header>
      <div>
        <PortableText value={post.content} />
      </div>
    </div>
  );
}
