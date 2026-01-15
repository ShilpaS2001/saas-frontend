export default function Navbar() {
  return (
    <header className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <h1 className="text-xl font-bold text-gray-900">
          SaaS
        </h1>

        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          <a href="#" className="hover:text-gray-900">Features</a>
          <a href="#" className="hover:text-gray-900">Pricing</a>
          <a href="#" className="hover:text-gray-900">About</a>
        </nav>

        <button className="px-4 py-2 text-sm rounded-md bg-primary text-white hover:bg-blue-700">
          Get Started
        </button>

      </div>
    </header>
  );
}
