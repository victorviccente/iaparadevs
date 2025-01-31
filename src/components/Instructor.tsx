import { motion } from 'framer-motion';
import { Award, Star, Users, BookOpen } from 'lucide-react';

const achievements = [
  { icon: Star, text: "10 anos de experiência", color: "from-yellow-400 to-yellow-600" },
  { icon: Users, text: "Mais de 1000 alunos", color: "from-green-400 to-green-600" },
  { icon: BookOpen, text: "Autor best-seller", color: "from-purple-400 to-purple-600" }
];

const Instructor = () => {
  return (
    <section id="instructor" className="py-20 relative">
      {/* Background Elements */}
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
            Conheça seu instrutor
          </h2>
          <p className="text-blue-300 text-lg max-w-2xl mx-auto">
            Aprenda com quem está na linha de frente da revolução da IA
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                alt="Professor Victor Vicente"
                className="rounded-2xl w-72 h-72 object-cover shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-full shadow-lg">
                <Award className="w-8 h-8" />
              </div>
            </div>

            {/* Achievement Cards */}
            <div className="grid grid-cols-1 gap-4 mt-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4 bg-gradient-to-r from-blue-900/50 to-blue-800/50 p-4 rounded-xl border border-blue-700/30"
                >
                  <div className={`bg-gradient-to-br ${achievement.color} p-2 rounded-lg`}>
                    <achievement.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-blue-200">{achievement.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">Professor Victor Vicente</h3>
              <div className="space-y-4">
                <p className="text-blue-200 text-lg leading-relaxed">
                  Pós-graduando em Inteligência Artificial com ênfase em Machine Learning,
                  especialista em IA e Python, e referência no desenvolvimento de soluções
                  inovadoras com tecnologias emergentes.
                </p>
                <p className="text-blue-200 text-lg leading-relaxed">
                  Com mais de uma década de experiência na indústria e academia, 
                  o Prof. Victor combina conhecimento teórico profundo com aplicações
                  práticas do mundo real, preparando desenvolvedores para os desafios
                  mais complexos da era da IA.
                </p>
              </div>

              <div className="flex gap-4 pt-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300"
                >
                  Ver Currículo Completo
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400/10 font-bold py-3 px-6 rounded-full transition duration-300"
                >
                  LinkedIn
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Instructor;