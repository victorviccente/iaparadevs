import { motion } from 'framer-motion';
import { Sparkles, ChevronDown } from 'lucide-react';

const Header = () => {
  const scrollToNextSection = () => {
    const instructorSection = document.getElementById('instructor');
    instructorSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="relative min-h-screen flex flex-col">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-black">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a')] opacity-10 mix-blend-overlay bg-cover bg-center" />
      </div>

      {/* Navigation */}
      <nav className="relative container mx-auto px-4 py-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold flex items-center gap-2"
        >
          <Sparkles className="w-8 h-8 text-blue-400" />
          <span className="bg-gradient-to-r from-blue-200 to-blue-400 text-transparent bg-clip-text">
            IA PARA DEVS
          </span>
        </motion.div>
        
        <div className="hidden md:flex items-center gap-8">
          <motion.a
            href="#beneficios"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-blue-200 hover:text-white transition-colors"
          >
            Benefícios
          </motion.a>
          <motion.a
            href="#conteudo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-blue-200 hover:text-white transition-colors"
          >
            Conteúdo
          </motion.a>
          <motion.a
            href="#depoimentos"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-blue-200 hover:text-white transition-colors"
          >
            Depoimentos
          </motion.a>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
          >
            Inscreva-se Agora
          </motion.button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative flex-1 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-8"
            >
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-200 to-blue-400 text-transparent bg-clip-text">
                  Domine a Inteligência
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-300 to-blue-500 text-transparent bg-clip-text">
                  Artificial na Programação
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-200 max-w-2xl mx-auto">
                Transforme sua carreira dominando as mais avançadas técnicas de IA e 
                torne-se um desenvolvedor de elite no mercado.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg transition duration-300 shadow-lg w-full sm:w-auto"
                >
                  Começar Agora
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400/10 font-bold py-4 px-8 rounded-full text-lg transition duration-300 w-full sm:w-auto"
                >
                  Ver Demonstração
                </motion.button>
              </div>

              <div className="flex justify-center gap-8 pt-12">
                <div className="text-center">
                  <p className="text-3xl font-bold bg-gradient-to-r from-blue-200 to-blue-400 text-transparent bg-clip-text">
                    1000+
                  </p>
                  <p className="text-blue-300">Alunos</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold bg-gradient-to-r from-blue-200 to-blue-400 text-transparent bg-clip-text">
                    40h
                  </p>
                  <p className="text-blue-300">Conteúdo</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold bg-gradient-to-r from-blue-200 to-blue-400 text-transparent bg-clip-text">
                    10
                  </p>
                  <p className="text-blue-300">Módulos</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToNextSection}
      >
        <ChevronDown className="w-8 h-8 text-blue-400" />
      </motion.div>
    </header>
  );
};

export default Header;