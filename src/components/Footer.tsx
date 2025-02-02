import React from 'react';
import { Terminal } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-gray-400" />
            <span className="text-lg font-medium text-gray-900">
              IA PARA DEVS
            </span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} IA PARA DEVS. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;