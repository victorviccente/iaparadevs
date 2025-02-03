import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Menu, X, Play, ChevronDown } from 'lucide-react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="block text-sm text-gray-200 hover:text-[#C2F52B] transition-colors"
  >
    {children}
  </a>
);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNextSection = () => {
    const viewportHeight = window.innerHeight;
    window.scrollTo({ top: viewportHeight, behavior: 'smooth' });
  };

  return (
    <header className="relative min-h-screen flex flex-col">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source 
            src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-futuristic-elements-12810-large.mp4" 
            type="video/mp4" 
          />
        </video>
      </div>

      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Terminal className="w-6 h-6 text-[#C2F52B]" />
              <span className="text-xl font-semibold text-white">
                <a href="#">IA PARA DEVS</a>
              </span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <NavLink href="#beneficios">Benefícios</NavLink>
              <NavLink href="#conteudo">Conteúdo</NavLink>
              <NavLink href="#tecnologias">Tecnologias</NavLink>
              <NavLink href="#depoimentos">Depoimentos</NavLink>
              <button className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium bg-[#C2F52B] text-black hover:bg-[#9CC621] transition-colors">
                <a href="#preco">Começar agora</a>
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
              <NavLink href="#beneficios" onClick={() => setIsMobileMenuOpen(false)}>
                Benefícios
              </NavLink>
              <NavLink href="#conteudo" onClick={() => setIsMobileMenuOpen(false)}>
                Conteúdo
              </NavLink>
              <NavLink href="#tecnologias" onClick={() => setIsMobileMenuOpen(false)}>
                Tecnologias
              </NavLink>
              <NavLink href="#depoimentos" onClick={() => setIsMobileMenuOpen(false)}>
                Depoimentos
              </NavLink>
              <button className="w-full px-4 py-2 rounded-lg text-sm font-medium bg-[#C2F52B] text-black hover:bg-[#9CC621] transition-colors">
                Começar agora
              </button>
            </div>
          </div>
        )}
      </nav>

      <div className="flex-1 flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-8">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight"
              >
                Desenvolva com
                <span className="text-[#C2F52B]"> IA</span>
                <br />
                de forma inteligente
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-gray-300 max-w-2xl mx-auto"
              >
                Aprenda a construir agentes autônomos, automatizar seu desenvolvimento
                e criar soluções inovadoras com Inteligência Artificial.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <button className="w-full sm:w-auto px-8 py-4 rounded-lg font-medium bg-[#C2F52B] text-black hover:bg-[#9CC621] transition-colors">
                  <a href="#preco">Começar Jornada</a>
                </button>
                
                <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-medium text-white hover:bg-white/10 transition-colors">
                  Ver demonstração
                  <Play className="w-4 h-4" />
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <motion.button
        onClick={scrollToNextSection}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-[#C2F52B] hover:text-[#9CC621] transition-colors"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.button>
    </header>
  );
};

export default Header;