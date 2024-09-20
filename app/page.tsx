export default function HomePage(): JSX.Element {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
          Welcome to My Blog!
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          This is a simple blogging platform where you can read, create, and
          manage posts.
        </p>
        <a
          href="/posts"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-200 shadow-md"
        >
          View Posts
        </a>
      </div>
    </main>
  );
}
