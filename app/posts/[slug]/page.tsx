import posts from "@/data/posts.json";

interface PostPageProps {
  params: {
    slug: string;
  };
}

export default function PostDetailPage({ params }: PostPageProps): JSX.Element {
  const { slug } = params;

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <p className="text-center text-red-500">Post not found.</p>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-6">
      <div className="max-w-3xl mx-auto p-6 bg-blue-50 rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          {post.title}
        </h1>
        <p className="text-sm text-gray-500 mb-4">
          {`By ${post.author} on ${new Date(post.date).toLocaleDateString()}`}
        </p>
        <p className="text-gray-700 leading-relaxed">{post.content}</p>
        <div className="flex justify-between items-center mt-6">
          <a
            href="/posts"
            className="flex items-center text-blue-600 hover:bg-blue-100 rounded-lg px-4 py-2 transition duration-200 shadow-md"
          >
            Back to Posts
          </a>
        </div>
      </div>
    </div>
  );
}
