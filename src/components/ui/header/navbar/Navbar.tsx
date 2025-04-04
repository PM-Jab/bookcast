const Navbar = () => {
  return (
    <nav className="w-full bg-gray-800 p-4 fixed top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <a href="/">My App</a>
        </div>
        <div className="space-x-4">
          <a href="/home" className="text-gray-300 hover:text-white">
            Home
          </a>
          <a href="/library" className="text-gray-300 hover:text-white">
            Library
          </a>
          <a className="text-gray-300 hover:text-white ml-20">Icon</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
