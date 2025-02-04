import React from 'react';
import { motion } from 'framer-motion';
import { Play, ChevronDown } from 'lucide-react';
import Navbar from './Navbar';

const Hero = () => {
  const scrollToNextSection = () => {
    const viewportHeight = window.innerHeight;
    window.scrollTo({ top: viewportHeight, behavior: 'smooth' });
  };

  return (
    <header id='home' className="relative min-h-screen flex flex-col">
      <div className="absolute inset-0 -z-10">
        {/* Background com gradiente em vez de vídeo */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a237e] via-[#283593] to-[#1a237e] opacity-90" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at center, rgba(26,35,126,0.5) 0%, rgba(26,35,126,0.8) 50%, rgb(26,35,126) 100%)',
            }}
          />
        </div>
      </div>

      <Navbar />

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

export default Hero;