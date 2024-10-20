import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Welcome to the Integration App
      </h1>
      <nav className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <ul className="space-y-4">
          <li>
            <Link
              href="/integrations"
              className="block py-2 px-4 text-center text-white bg-blue-500 rounded hover:bg-blue-600 transition duration-200"
            >
              Integrations
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="block py-2 px-4 text-center text-white bg-green-500 rounded hover:bg-green-600 transition duration-200"
            >
              Submit Action
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
