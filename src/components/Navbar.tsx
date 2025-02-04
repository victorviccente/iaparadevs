import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X } from 'lucide-react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, onClick }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector(href);
    onClick?.();
    
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.pageYOffset - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="block text-sm text-gray-200 hover:text-[#C2F52B] transition-colors"
    >
      {children}
    </a>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.pageYOffset - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="w-6 h-6 text-[#C2F52B]" />
            <span className="text-xl font-semibold text-white">
              <a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')}>IA PARA DEVS</a>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
          <NavLink href="#tecnologias">Tecnologias</NavLink>
            <NavLink href="#beneficios">Benefícios</NavLink>
            <NavLink href="#conteudo">Conteúdo</NavLink>
            <NavLink href="#depoimentos">Depoimentos</NavLink>
            <button className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium bg-[#C2F52B] text-black hover:bg-[#9CC621] transition-colors">
              <a href="#preco" onClick={(e) => handleSmoothScroll(e, '#preco')}>
                Começar agora
              </a>
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/90 backdrop-blur-sm">
          <div className="container mx-auto px-6 py-4 space-y-4">
          <NavLink href="#tecnologias" onClick={() => setIsMobileMenuOpen(false)}>
              Tecnologias
            </NavLink>
            <NavLink href="#beneficios" onClick={() => setIsMobileMenuOpen(false)}>
              Benefícios
            </NavLink>
            <NavLink href="#conteudo" onClick={() => setIsMobileMenuOpen(false)}>
              Conteúdo
            </NavLink>
            <NavLink href="#depoimentos" onClick={() => setIsMobileMenuOpen(false)}>
              Depoimentos
            </NavLink>
            <button className="w-full px-4 py-2 rounded-lg text-sm font-medium bg-[#C2F52B] text-black hover:bg-[#9CC621] transition-colors">
              <a href="#preco" onClick={(e) => handleSmoothScroll(e, '#preco')}>
                Começar agora
              </a>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;