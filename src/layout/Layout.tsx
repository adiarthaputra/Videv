import React from 'react';
import { FaPlayCircle, FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useLayout } from '../context/LayoutContext'; // Import hook

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const navigate = useNavigate();
  const { showSearch } = useLayout(); // Gunakan konteks untuk mendapatkan status

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedSearch = searchTerm.trim();
    if (trimmedSearch) {
      navigate(`/search?search=${trimmedSearch}`);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#2C3539]">
      <header className="bg-[#232B2B] fixed top-0 left-0 w-full p-4 text-gray-300 flex items-center justify-between shadow-lg z-50">
        <Link to="/" className="flex items-center flex-shrink-0">
          <FaPlayCircle className="mr-3 text-[#64748B]" size={24} />
          <h1 className="text-xl font-bold text-gray-200">Videy Streaming Best</h1>
        </Link>
        
        {/* Tampilkan form pencarian hanya jika showSearch bernilai true */}
        {showSearch && (
          <div className="w-full max-w-sm ml-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search other videos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#344040] text-gray-200 rounded-full py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-[#64748B]"
              />
              <button type="submit" className="absolute right-0 top-0 mt-2 mr-3 text-gray-500 hover:text-gray-300">
                <FaSearch />
              </button>
            </form>
          </div>
        )}
      </header>

      <main className="flex-1 text-gray-200 pt-20">
        {children}
      </main>

      <footer className="bg-[#232B2B] p-4 text-gray-400 text-center">
        <p>© {new Date().getFullYear()} Lulu Stream. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;