import React from 'react';
import { Terminal } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 bg-black border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-[#C2F52B]" />
            <span className="text-lg font-medium text-white">
              IA PARA DEVS
            </span>
          </div>

          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} IA PARA DEVS. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;