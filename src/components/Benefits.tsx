import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Code, Brain, ChevronDown, LucideIcon } from 'lucide-react';

interface ContentItem {
  title: string;
  description: string;
}

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  content: ContentItem[];
}

interface FeatureCardProps {
  feature: Feature;
  isActive: boolean;
  onClick: () => void;
  isMobile: boolean;
  isOpen: boolean;
  onToggle: () => void;
}

const features: Feature[] = [
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

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, isActive, onClick, isMobile, isOpen, onToggle }) => {
  const handleClick = () => {
    if (isMobile) {
      onToggle();
    }
    onClick();
  };

  return (
    <motion.div className="w-full">
      <motion.button
        onClick={handleClick}
        className={`w-full text-left p-8 rounded-2xl transition-all duration-200 ${
          isActive ? 'bg-[#C2F52B] text-black shadow-lg' : 'bg-black/80 border border-white/10 hover:border-[#C2F52B]'
        }`}
      >
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className={`p-3 rounded-xl w-fit mb-4 ${
              isActive ? 'bg-black/20 text-black' : 'bg-black/40 text-[#C2F52B]'
            }`}>
              <feature.icon className="w-6 h-6" />
            </div>
            <h3 className={`text-xl font-semibold mb-2 ${
              isActive ? 'text-black' : 'text-white'
            }`}>
              {feature.title}
            </h3>
            <p className={`${
              isActive ? 'text-black/80' : 'text-gray-300'
            }`}>
              {feature.description}
            </p>
          </div>
          {isMobile && (
            <ChevronDown className={`w-5 h-5 transform transition-transform ${
              isOpen ? 'rotate-180' : ''
            } ${isActive ? 'text-black' : 'text-gray-400'}`} />
          )}
        </div>
      </motion.button>

      {isMobile && (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="p-6 pt-0">
                <div className="space-y-6 mt-6 border-t border-white/10 pt-6">
                  {feature.content.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                      className="flex items-center gap-4"
                    >
                      <div className="w-8 h-8 rounded-lg bg-black/40 flex items-center justify-center">
                        <feature.icon className="w-4 h-4 text-[#C2F52B]" />
                      </div>
                      <div>
                        <div className="font-medium text-white">{item.title}</div>
                        <div className="text-sm text-gray-300">{item.description}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </motion.div>
  );
};

const Benefits: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [openFeatureIndex, setOpenFeatureIndex] = useState<number | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleFeatureToggle = (index: number) => {
    setOpenFeatureIndex(openFeatureIndex === index ? null : index);
  };

  return (
    <section id='beneficios' className="relative py-24">
      {/* Background gradiente */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a237e] via-[#283593] to-[#1a237e] opacity-90" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at center, rgba(26,35,126,0.5) 0%, rgba(26,35,126,0.8) 50%, rgb(26,35,126) 100%)',
          }}
        />
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-white mb-4">
            Aprenda IA de forma prática
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Desenvolva habilidades práticas em IA com projetos reais e ferramentas modernas
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className={`grid ${!isMobile ? 'lg:grid-cols-3' : ''} gap-8 items-start mb-16`}>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <FeatureCard
                  feature={feature}
                  isActive={activeFeature === index}
                  onClick={() => setActiveFeature(index)}
                  isMobile={isMobile}
                  isOpen={openFeatureIndex === index}
                  onToggle={() => handleFeatureToggle(index)}
                />
              </motion.div>
            ))}
          </div>

          {!isMobile && (
            <motion.div
              key={activeFeature}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto bg-black/40 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden"
            >
              <div className="p-6">
                <div className="grid gap-6">
                  {features[activeFeature].content.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-lg bg-black/40 flex items-center justify-center">
                        {React.createElement(features[activeFeature].icon, {
                          className: "w-4 h-4 text-[#C2F52B]"
                        })}
                      </div>
                      <div>
                        <div className="font-medium text-white">{item.title}</div>
                        <div className="text-sm text-gray-300">{item.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Benefits;