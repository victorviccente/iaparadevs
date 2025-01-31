import { motion } from 'framer-motion';
import { Bot, MessageSquare, Brain, Zap, MousePointer, Map, BarChart3, Drama as Llama, Users, Phone as Python } from 'lucide-react';

const topics = [
  {
    name: "Github Copilot",
    icon: Bot,
    description: "Aumente sua produtividade com o poder da IA no seu código",
    color: "from-emerald-500 to-emerald-600"
  },
  {
    name: "ChatGPT",
    icon: MessageSquare,
    description: "Aprenda a utilizar o ChatGPT para resolver problemas complexos",
    color: "from-blue-500 to-blue-600"
  },
  {
    name: "Claude",
    icon: Brain,
    description: "Domine o Claude para análise avançada e geração de conteúdo",
    color: "from-purple-500 to-purple-600"
  },
  {
    name: "BOLT",
    icon: Zap,
    description: "Acelere seu desenvolvimento com automação inteligente",
    color: "from-yellow-500 to-yellow-600"
  },
  {
    name: "Cursor",
    icon: MousePointer,
    description: "Otimize seu fluxo de trabalho com IA integrada",
    color: "from-red-500 to-red-600"
  },
  {
    name: "Mapify",
    icon: Map,
    description: "Visualize e planeje projetos com auxílio da IA",
    color: "from-green-500 to-green-600"
  },
  {
    name: "Gamma App",
    icon: BarChart3,
    description: "Crie apresentações profissionais automaticamente",
    color: "from-indigo-500 to-indigo-600"
  },
  {
    name: "Ollama",
    icon: Llama,
    description: "Execute modelos de IA localmente em seu ambiente",
    color: "from-pink-500 to-pink-600"
  },
  {
    name: "Linkedin Com IA",
    icon: Users,
    description: "Otimize seu perfil profissional com IA",
    color: "from-cyan-500 to-cyan-600"
  },
  {
    name: "Python Com IA",
    icon: Python,
    description: "Desenvolva aplicações inteligentes com Python",
    color: "from-orange-500 to-orange-600"
  }
];

const Topics = () => {
  return (
    <section id="conteudo" className="py-20 relative">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/50 to-black/50 -z-10" />
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iI2ZmZiI+PC9yZWN0Pgo8cmVjdCB3aWR0aD0iNDIuNDIiIGhlaWdodD0iNDIuNDIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMwLDMwKSByb3RhdGUoNDUpIiBmaWxsPSIjMDAwIj48L3JlY3Q+Cjwvc3ZnPg==')] bg-repeat -z-20" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-200 to-blue-400 text-transparent bg-clip-text">
            O que você vai aprender
          </h2>
          <p className="text-blue-300 text-lg max-w-2xl mx-auto">
            Domine as ferramentas mais poderosas de IA e transforme sua maneira de programar
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-gradient-to-br from-blue-900/40 to-blue-800/40 rounded-2xl p-8 shadow-xl border border-blue-700/30 backdrop-blur-sm"
            >
              <div className={`bg-gradient-to-br ${topic.color} p-4 rounded-xl inline-block mb-6`}>
                <topic.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{topic.name}</h3>
              <p className="text-blue-300">
                {topic.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Topics;