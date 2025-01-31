import { motion } from 'framer-motion';
import { CheckCircle, TrendingUp, Lightbulb, Award, Users, Rocket } from 'lucide-react';

const benefits = [
  {
    title: "Aumente sua produtividade como desenvolvedor",
    description: "Automatize tarefas repetitivas e foque no que realmente importa",
    icon: TrendingUp,
    color: "from-green-400 to-green-600"
  },
  {
    title: "Crie soluções inovadoras com IA",
    description: "Desenvolva aplicações inteligentes que se destacam no mercado",
    icon: Lightbulb,
    color: "from-yellow-400 to-yellow-600"
  },
  {
    title: "Destaque-se no mercado de trabalho",
    description: "Domine habilidades altamente valorizadas e em crescente demanda",
    icon: Award,
    color: "from-purple-400 to-purple-600"
  },
  {
    title: "Aprenda com projetos práticos e reais",
    description: "Aplique seus conhecimentos em casos do mundo real",
    icon: Rocket,
    color: "from-red-400 to-red-600"
  },
  {
    title: "Networking com outros profissionais da área",
    description: "Conecte-se com uma comunidade ativa de desenvolvedores",
    icon: Users,
    color: "from-blue-400 to-blue-600"
  }
];

const Benefits = () => {
  return (
    <section id="beneficios" className="py-20 relative">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/50 to-black/50 -z-10" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a')] opacity-5 mix-blend-overlay bg-cover bg-fixed -z-20" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-200 to-blue-400 text-transparent bg-clip-text">
            Por que escolher este curso?
          </h2>
          <p className="text-blue-300 text-lg max-w-2xl mx-auto">
            Descubra como nossa metodologia única vai transformar sua carreira
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-blue-900/40 to-blue-800/40 rounded-2xl p-8 shadow-xl border border-blue-700/30 backdrop-blur-sm"
            >
              <div className="flex items-start gap-6">
                <div className={`bg-gradient-to-br ${benefit.color} p-3 rounded-xl`}>
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-white">{benefit.title}</h3>
                  <p className="text-blue-300 text-lg">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg transition duration-300 shadow-lg"
          >
            Comece Sua Jornada Agora
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;