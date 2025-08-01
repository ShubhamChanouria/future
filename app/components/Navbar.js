export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-8 py-4 bg-white shadow-md z-50">
      <div className="text-xl font-semibold text-gray-800">FUTURE</div>
      <button className="md:hidden">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </nav>
  );
}