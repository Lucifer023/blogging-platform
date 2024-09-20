// src/components/Navbar.tsx
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <Link
          href="/"
          className="text-2xl font-bold text-white hover:text-gray-300 transition duration-300"
        >
          My Blog
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link
            href="/"
            className="text-gray-200 hover:text-gray-300 transition duration-300"
          >
            Home
          </Link>
          <Link
            href="/posts"
            className="text-gray-200 hover:text-gray-300 transition duration-300"
          >
            Posts
          </Link>
        </div>
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            {/* Hamburger Icon Placeholder */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="h-1 bg-gray-600"></div>
    </nav>
  );
};

export default Navbar;
