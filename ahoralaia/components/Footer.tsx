
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-background-dark border-t border-gray-200 dark:border-[#283039] py-10 px-4 md:px-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <h3 className="text-gray-900 dark:text-white text-2xl font-display font-bold">No te pierdas nada.</h3>
            <p className="text-gray-500 dark:text-[#9dabb9]">Recibe el resumen semanal de IA curado por expertos de AHORALAIA.</p>
          </div>
          <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
            <input 
              className="bg-gray-100 dark:bg-[#283039] text-gray-900 dark:text-white px-4 py-3 rounded-lg w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-primary" 
              placeholder="tu@email.com" 
              type="email"
            />
            <button className="bg-primary hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-lg transition-colors whitespace-nowrap">
              Suscribirse Gratis
            </button>
          </div>
        </div>
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 dark:text-[#5d6b79] gap-4">
          <div className="flex gap-6">
            <a className="hover:text-gray-600 dark:hover:text-gray-300" href="#">Sobre AHORALAIA</a>
            <a className="hover:text-gray-600 dark:hover:text-gray-300" href="#">Privacidad</a>
            <a className="hover:text-gray-600 dark:hover:text-gray-300" href="#">API</a>
          </div>
          <p>© 2024 AHORALAIA. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
