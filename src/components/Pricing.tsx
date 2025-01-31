import { motion } from 'framer-motion';
import { Sparkles, Check, Shield } from 'lucide-react';

const features = [
  "Acesso vitalício ao conteúdo",
  "40 horas de vídeo aulas",
  "Projetos práticos",
  "Suporte personalizado",
  "Certificado de conclusão",
  "Atualizações gratuitas",
  "Comunidade exclusiva",
  "Bônus especiais"
];

const Pricing = () => {
  return (
    <section className="py-20 relative">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/50 to-black/50 -z-10" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537504-6427a16b0a28')] opacity-5 mix-blend-overlay bg-cover bg-fixed -z-20" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-200 to-blue-400 text-transparent bg-clip-text">
            Invista no seu futuro agora
          </h2>
          <p className="text-blue-300 text-lg max-w-2xl mx-auto">
            Transforme sua carreira com um investimento que vale a pena
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/40 rounded-2xl p-8 md:p-12 shadow-xl border border-blue-700/30 backdrop-blur-sm">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left Column - Features */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <Sparkles className="w-8 h-8 text-blue-400" />
                  <h3 className="text-2xl font-bold text-white">O que está incluído</h3>
                </div>
                
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <Check className="w-5 h-5 text-blue-400 flex-shrink-0" />
                      <span className="text-blue-200">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Right Column - Pricing */}
              <div className="flex flex-col justify-center">
                <div className="text-center mb-8">
                  <p className="text-2xl mb-2">
                    De <span className="line-through text-blue-400">R$ 397</span>
                  </p>
                  <div className="relative inline-block">
                    <p className="text-6xl font-bold text-white mb-2">R$ 297</p>
                    <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-sm font-bold py-1 px-3 rounded-full transform rotate-12">
                      25% OFF
                    </div>
                  </div>
                  <p className="text-blue-300">ou 12x de R$ 29,70</p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-full text-xl transition duration-300 shadow-lg mb-6"
                >
                  Garantir minha vaga com desconto!
                </motion.button>

                <div className="flex items-center justify-center gap-2 text-blue-300">
                  <Shield className="w-5 h-5" />
                  <span className="text-sm">7 dias de garantia incondicional</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;