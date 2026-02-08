import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-background-dark border-t border-gray-200 dark:border-[#283039] py-10 px-4 md:px-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Newsletter section removed per user request */}
        </div>
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 dark:text-[#5d6b79] gap-4">
          <div className="flex gap-6">
            <a className="hover:text-gray-600 dark:hover:text-gray-300" href="#">Sobre AHORALAIA</a>
            <Link className="hover:text-gray-600 dark:hover:text-gray-300" to="/terminos">Términos Legales</Link>
            <a className="hover:text-gray-600 dark:hover:text-gray-300" href="#">API</a>
          </div>
          <p>© 2024 AHORALAIA. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
