export default function HomePage(): JSX.Element {
  return (
    <main className="container mx-auto py-10 text-center">
      <h1 className="text-5xl font-bold text-white-800 mb-6">Welcome to My Blog!</h1>
      <p className="text-lg text-white-600 mb-6">
        This is a simple blogging platform where you can read, create, and manage posts.
      </p>
      <a href="/posts" className="bg-blue-300 hover:bg-blue-400 text-gray-900 font-bold py-2 px-4 rounded">
        View Posts
      </a>
    </main>
  );
}