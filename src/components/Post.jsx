export default function Post({ title, content }) {
  return (
    <article className="mb-8">
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      <p className="mt-2 text-gray-300">{content}</p>
    </article>
  );
}
