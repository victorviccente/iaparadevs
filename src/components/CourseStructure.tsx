import { motion } from 'framer-motion';
import { BookOpen, Video, Folder, Headphones, Award, RefreshCw, Clock, Target, Shield, Gift } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    text: "10 módulos intensivos",
    description: "Conteúdo estruturado e progressivo",
    color: "from-blue-400 to-blue-600"
  },
  {
    icon: Video,
    text: "40 horas de conteúdo",
    description: "Aulas práticas e objetivas",
    color: "from-purple-400 to-purple-600"
  },
  {
    icon: Folder,
    text: "Projetos práticos",
    description: "Aplicações do mundo real",
    color: "from-green-400 to-green-600"
  },
  {
    icon: Headphones,
    text: "Suporte personalizado",
    description: "Tire suas dúvidas diretamente",
    color: "from-yellow-400 to-yellow-600"
  },
  {
    icon: Award,
    text: "Certificado reconhecido",
    description: "Valorize seu currículo",
    color: "from-red-400 to-red-600"
  },
  {
    icon: RefreshCw,
    text: "Acesso vitalício",
    description: "Incluindo atualizações",
    color: "from-indigo-400 to-indigo-600"
  },
  {
    icon: Clock,
    text: "Aprenda no seu ritmo",
    description: "Flexibilidade total",
    color: "from-pink-400 to-pink-600"
  },
  {
    icon: Target,
    text: "Mentoria focada",
    description: "Acompanhamento individual",
    color: "from-cyan-400 to-cyan-600"
  },
  {
    icon: Shield,
    text: "Garantia de 7 dias",
    description: "Satisfação garantida",
    color: "from-orange-400 to-orange-600"
  },
  {
    icon: Gift,
    text: "Bônus exclusivos",
    description: "Recursos adicionais",
    color: "from-teal-400 to-teal-600"
  }
];

const CourseStructure = () => {
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
            Estrutura do Curso
          </h2>
          <p className="text-blue-300 text-lg max-w-2xl mx-auto">
            Uma experiência de aprendizado completa e imersiva
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-gradient-to-br from-blue-900/40 to-blue-800/40 rounded-2xl p-6 shadow-xl border border-blue-700/30 backdrop-blur-sm"
            >
              <div className={`bg-gradient-to-br ${feature.color} p-3 rounded-xl mb-4`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{feature.text}</h3>
              <p className="text-blue-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Progress Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-600/20" />
            {[1, 2, 3].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-8`}
              >
                <div className="w-1/2 relative">
                  <div className={`absolute top-0 ${index % 2 === 0 ? '-right-6' : '-left-6'} w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center`}>
                    <span className="text-white font-bold">{step}</span>
                  </div>
                  <div className={`bg-gradient-to-br from-blue-900/40 to-blue-800/40 rounded-2xl p-6 shadow-xl border border-blue-700/30 backdrop-blur-sm ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                    <h4 className="text-xl font-bold text-white mb-2">Fase {step}</h4>
                    <p className="text-blue-300">
                      {step === 1 && "Fundamentos e conceitos básicos de IA"}
                      {step === 2 && "Implementação prática e projetos"}
                      {step === 3 && "Avançado e especialização"}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseStructure;