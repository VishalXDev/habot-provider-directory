import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Habot Directory
        </Link>
        <nav className="text-sm text-gray-600 hidden sm:block">
          <Link href="/" className="hover:text-blue-500 transition">
            Home
          </Link>
        </nav>
      </div>
    </header>
  );
}
