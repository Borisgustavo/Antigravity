
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e5e7eb] dark:border-b-[#283039] px-4 py-3 bg-white/90 dark:bg-[#111418]/90 backdrop-blur-md lg:px-10">
      <div className="flex items-center gap-8">
        <Link to="/" className="flex items-center gap-4 text-gray-900 dark:text-white group">
          <div className="size-8 text-primary flex items-center justify-center transition-transform group-hover:rotate-12">
            <span className="material-symbols-outlined text-3xl">radar</span>
          </div>
          <h2 className="text-gray-900 dark:text-white text-xl font-display font-bold leading-tight tracking-[-0.015em]">AHORALAIA</h2>
        </Link>
        <div className="hidden lg:flex items-center gap-9">
          <Link
            className={`${isActive('/') ? 'text-primary' : 'text-gray-600 dark:text-white'} text-sm font-medium leading-normal hover:text-primary transition-colors`}
            to="/"
          >Inicio</Link>
          <Link
            className={`${isActive('/timeline') ? 'text-primary' : 'text-gray-600 dark:text-white'} text-sm font-medium leading-normal hover:text-primary transition-colors`}
            to="/timeline"
          >Historia IA</Link>
          <Link
            className={`${isActive('/directory') ? 'text-primary' : 'text-gray-600 dark:text-white'} text-sm font-medium leading-normal hover:text-primary transition-colors`}
            to="/directory"
          >Divulgadores</Link>
          <Link
            className={`${isActive('/courses') ? 'text-primary' : 'text-gray-600 dark:text-white'} text-sm font-medium leading-normal hover:text-primary transition-colors`}
            to="/courses"
          >Cursos IA</Link>
        </div>
      </div>

      <div className="flex flex-1 justify-end gap-4 lg:gap-8">
        <label className="hidden md:flex flex-col min-w-40 h-10 max-w-64">
          <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
            <div className="text-[#9dabb9] flex border-none bg-gray-100 dark:bg-[#283039] items-center justify-center pl-4 rounded-l-lg border-r-0">
              <span className="material-symbols-outlined text-lg">search</span>
            </div>
            <input
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-0 border-none bg-gray-100 dark:bg-[#283039] h-full placeholder:text-[#9dabb9] px-4 rounded-l-none pl-2 text-base font-normal"
              placeholder="Buscar noticias..."
            />
          </div>
        </label>


        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-900 dark:text-white p-2"
          onClick={toggleMenu}
        >
          <span className="material-symbols-outlined text-2xl">
            {isMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-[#111418] border-b border-gray-200 dark:border-[#283039] shadow-lg lg:hidden flex flex-col p-4 gap-4 animate-in slide-in-from-top-2 duration-200">
          <label className="flex md:hidden flex-col h-10 w-full">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
              <div className="text-[#9dabb9] flex border-none bg-gray-100 dark:bg-[#283039] items-center justify-center pl-4 rounded-l-lg border-r-0">
                <span className="material-symbols-outlined text-lg">search</span>
              </div>
              <input
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-0 border-none bg-gray-100 dark:bg-[#283039] h-full placeholder:text-[#9dabb9] px-4 rounded-l-none pl-2 text-base font-normal"
                placeholder="Buscar noticias..."
              />
            </div>
          </label>

          <nav className="flex flex-col gap-2">
            <Link
              className={`p-3 rounded-lg ${isActive('/') ? 'bg-primary/10 text-primary' : 'text-gray-600 dark:text-white hover:bg-gray-100 dark:hover:bg-[#283039]'} text-base font-medium transition-colors`}
              to="/"
              onClick={closeMenu}
            >Inicio</Link>
            <Link
              className={`p-3 rounded-lg ${isActive('/timeline') ? 'bg-primary/10 text-primary' : 'text-gray-600 dark:text-white hover:bg-gray-100 dark:hover:bg-[#283039]'} text-base font-medium transition-colors`}
              to="/timeline"
              onClick={closeMenu}
            >Historia IA</Link>
            <Link
              className={`p-3 rounded-lg ${isActive('/directory') ? 'bg-primary/10 text-primary' : 'text-gray-600 dark:text-white hover:bg-gray-100 dark:hover:bg-[#283039]'} text-base font-medium transition-colors`}
              to="/directory"
              onClick={closeMenu}
            >Divulgadores</Link>
            <Link
              className={`p-3 rounded-lg ${isActive('/courses') ? 'bg-primary/10 text-primary' : 'text-gray-600 dark:text-white hover:bg-gray-100 dark:hover:bg-[#283039]'} text-base font-medium transition-colors`}
              to="/courses"
              onClick={closeMenu}
            >Cursos IA</Link>
          </nav>


        </div>
      )}
    </header>
  );
};

export default Header;
