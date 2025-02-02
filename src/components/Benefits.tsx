import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code, Brain } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: "Fundamentos de IA",
    description: "Aprenda os conceitos fundamentais da Inteligência Artificial de forma prática e objetiva.",
    content: [
      { title: "Machine Learning", description: "Fundamentos e aplicações" },
      { title: "Deep Learning", description: "Redes neurais profundas" },
      { title: "NLP", description: "Processamento de linguagem natural" }
    ]
  },
  {
    icon: Code,
    title: "Github Copilot",
    description: "Aumente sua produtividade com o poder da IA direto no seu editor de código.",
    content: [
      { title: "Autocomplete", description: "Sugestões inteligentes de código" },
      { title: "Refatoração", description: "Melhoria automática de código" },
      { title: "Documentação", description: "Geração de documentação" }
    ]
  },
  {
    icon: BookOpen,
    title: "Projetos Práticos",
    description: "Aprenda com projetos reais e aplique seu conhecimento na prática.",
    content: [
      { title: "Sistema de Recomendação", description: "Machine Learning aplicado" },
      { title: "Chatbot", description: "Processamento de linguagem natural" },
      { title: "Análise de Sentimentos", description: "Classificação de texto" }
    ]
  }
];

const Benefits = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section className="py-24 bg-white relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Aprenda IA de forma prática
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Desenvolva habilidades práticas em IA com projetos reais e ferramentas modernas
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-start max-w-7xl mx-auto mb-16">
          {features.map((feature, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setActiveFeature(index)}
              className={`text-left p-8 rounded-2xl transition-all duration-200 ${
                activeFeature === index
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'hover:bg-gray-50'
              }`}
            >
              <div className={`p-3 rounded-xl w-fit mb-4 ${
                activeFeature === index
                  ? 'bg-blue-500/50 text-white'
                  : 'bg-blue-50 text-blue-600'
              }`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${
                activeFeature === index ? 'text-white' : 'text-gray-900'
              }`}>
                {feature.title}
              </h3>
              <p className={`${
                activeFeature === index ? 'text-blue-100' : 'text-gray-700'
              }`}>
                {feature.description}
              </p>
            </motion.button>
          ))}
        </div>

        {/* Content Preview */}
        <motion.div
          key={activeFeature}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
        >
          <div className="p-6">
            <div className="grid gap-6">
              {features[activeFeature].content.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                    {React.createElement(features[activeFeature].icon, {
                      className: "w-4 h-4 text-blue-600"
                    })}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{item.title}</div>
                    <div className="text-sm text-gray-600">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;