import { motion } from 'framer-motion';
import { Sparkles, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-blue-950 -z-10" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537504-6427a16b0a28')] opacity-5 mix-blend-overlay bg-cover bg-fixed -z-20" />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-200 to-blue-400 text-transparent bg-clip-text">
                IA PARA DEVS
              </span>
            </div>
            <p className="text-blue-300 mb-6">
              Transformando desenvolvedores em mestres da Inteligência Artificial.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="bg-blue-800/30 p-2 rounded-full hover:bg-blue-700/30 transition-colors"
              >
                <Facebook className="w-5 h-5 text-blue-400" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="bg-blue-800/30 p-2 rounded-full hover:bg-blue-700/30 transition-colors"
              >
                <Twitter className="w-5 h-5 text-blue-400" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="bg-blue-800/30 p-2 rounded-full hover:bg-blue-700/30 transition-colors"
              >
                <Instagram className="w-5 h-5 text-blue-400" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="bg-blue-800/30 p-2 rounded-full hover:bg-blue-700/30 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-blue-400" />
              </motion.a>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-blue-300 hover:text-blue-200 transition-colors">
                <Mail className="w-5 h-5" />
                <a href="mailto:contato@iaparadevs.com">contato@iaparadevs.com</a>
              </div>
              <div className="flex items-center gap-3 text-blue-300 hover:text-blue-200 transition-colors">
                <Phone className="w-5 h-5" />
                <a href="tel:+551199999999">(11) 99999-9999</a>
              </div>
              <div className="flex items-center gap-3 text-blue-300">
                <MapPin className="w-5 h-5" />
                <span>São Paulo, SP</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-blue-300 hover:text-blue-200 transition-colors">
                  Sobre o Curso
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-300 hover:text-blue-200 transition-colors">
                  Grade Curricular
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-300 hover:text-blue-200 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-300 hover:text-blue-200 transition-colors">
                  Área do Aluno
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-blue-300 hover:text-blue-200 transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-300 hover:text-blue-200 transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-300 hover:text-blue-200 transition-colors">
                  Política de Reembolso
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-300 hover:text-blue-200 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-blue-800/50 pt-12 pb-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-semibold text-white mb-4">
              Receba novidades e conteúdo exclusivo
            </h3>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 bg-blue-900/30 border border-blue-700/30 rounded-full px-6 py-3 text-white placeholder-blue-400 focus:outline-none focus:border-blue-400"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300"
              >
                Inscrever
              </motion.button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-800/50 pt-8 text-center">
          <p className="text-blue-300">
            &copy; {new Date().getFullYear()} IA PARA DEVS. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;