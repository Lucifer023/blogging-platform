import Link from "next/link";
import posts from "../../data/posts.json";

const PostsListPage = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-extrabold text-white mb-8 text-center">Posts</h1>
        <ul className="space-y-6">
          {posts.map((post) => (
            <li
              key={post.id}
              className="p-6 bg-blue-50 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg border-l-4 border-blue-500"
            >
              <Link href={`/posts/${post.slug}`}>
                <h2 className="text-3xl font-semibold text-blue-600 hover:underline cursor-pointer mb-2 transition-colors duration-200">
                  {post.title}
                </h2>
              </Link>
              <p className="text-gray-800 mb-4">{post.content.slice(0, 150)}...</p>
              <p className="text-sm text-gray-600">{`By ${post.author} on ${new Date(post.date).toLocaleDateString()}`}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PostsListPage;
