type Props = { params: { project: string } };

export default async function Post({ params }: Props) {
  const slug = params.project;

  const project = await getPost(slug);

  return <div>This Post</div>;
}
