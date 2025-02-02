import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Menu, X, Play } from 'lucide-react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

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

  return (
    <header className="relative min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-sm shadow-sm' : 'bg-white'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Terminal className="w-6 h-6 text-blue-600" />
              <span className="text-xl font-semibold text-gray-900">
                IA PARA DEVS
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <NavLink href="#beneficios">Benefícios</NavLink>
              <NavLink href="#conteudo">Conteúdo</NavLink>
              <NavLink href="#tecnologias">Tecnologias</NavLink>
              <NavLink href="#depoimentos">Depoimentos</NavLink>
              <button className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                Começar agora
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gray-700"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white">
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
              <button className="w-full px-4 py-2 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                Começar agora
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="flex-1 flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-8">
              {/* Main Headline */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight"
              >
                Desenvolva com
                <span className="text-blue-600"> IA</span>
                <br />
                de forma inteligente
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-gray-600 max-w-2xl mx-auto"
              >
                Aprenda a construir agentes autônomos, automatizar seu desenvolvimento
                e criar soluções inovadoras com Inteligência Artificial.
              </motion.p>

              {/* CTA Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <button className="w-full sm:w-auto px-8 py-4 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                  Começar Jornada
                </button>
                
                <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                  Ver demonstração
                  <Play className="w-4 h-4" />
                </button>
              </motion.div>

              {/* Social Proof */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="pt-12 grid grid-cols-2 md:grid-cols-3 gap-8 text-center"
              >
                <div>
                  <div className="text-4xl font-bold text-gray-900">1000+</div>
                  <div className="text-sm text-gray-600 mt-1">Alunos ativos</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gray-900">4.9/5</div>
                  <div className="text-sm text-gray-600 mt-1">Avaliação média</div>
                </div>
                <div className="col-span-2 md:col-span-1">
                  <div className="text-4xl font-bold text-gray-900">100%</div>
                  <div className="text-sm text-gray-600 mt-1">Online</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white">
        <div className="absolute h-full w-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>
    </header>
  );
};

// NavLink component
const NavLink: React.FC<NavLinkProps> = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="block text-sm text-gray-600 hover:text-gray-900 transition-colors"
  >
    {children}
  </a>
);

export default Header;