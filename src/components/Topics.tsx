import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  MessageSquare,
  Brain,
  Zap,
  LucideIcon,
  MousePointer,
  BarChart3,
  Users,
  ChevronDown,
  Lock,
  Unlock,
} from "lucide-react";

interface Detail {
  title: string;
  description: string;
}

interface Topic {
  name: string;
  icon: LucideIcon;
  description: string;
  tag: string;
  details: Detail[];
}

interface TopicCardProps {
  topic: Topic;
  isActive: boolean;
  onClick: () => void;
  isMobile: boolean;
  isOpen: boolean;
  onToggle: () => void;
  isFirstTopic: boolean;
}

const topics: Topic[] = [
  {
    name: "Github Copilot",
    icon: Bot,
    description: "Aumente sua produtividade com o poder da IA no seu código",
    tag: "Produtividade",
    details: [
      {
        title: "Autocomplete Inteligente",
        description: "Sugestões de código contextual em tempo real",
      },
      {
        title: "Pair Programming",
        description: "Trabalhe junto com IA para resolver problemas",
      },
      {
        title: "Documentação Automática",
        description: "Gere documentação clara e precisa",
      },
    ],
  },
  {
    name: "ChatGPT",
    icon: MessageSquare,
    description:
      "Aprenda a utilizar o ChatGPT para resolver problemas complexos",
    tag: "IA Conversacional",
    details: [
      {
        title: "Prompts Avançados",
        description: "Técnicas de engenharia de prompts",
      },
      {
        title: "Resolução de Problemas",
        description: "Abordagem sistemática com IA",
      },
      {
        title: "Geração de Conteúdo",
        description: "Criação de textos e análises",
      },
    ],
  },
  {
    name: "Claude",
    icon: Brain,
    description: "Domine o Claude para análise avançada e geração de conteúdo",
    tag: "Análise",
    details: [
      {
        title: "Análise de Dados",
        description: "Processamento e insights de dados",
      },
      {
        title: "Escrita Técnica",
        description: "Documentação e relatórios técnicos",
      },
      {
        title: "Revisão de Código",
        description: "Análise e melhorias de código",
      },
    ],
  },
  {
    name: "BOLT",
    icon: Zap,
    description: "Acelere seu desenvolvimento com automação inteligente",
    tag: "Automação",
    details: [
      {
        title: "Fluxos de Trabalho",
        description: "Automação de processos repetitivos",
      },
      {
        title: "Integração Contínua",
        description: "Desenvolvimento mais rápido e eficiente",
      },
      {
        title: "Otimização de Código",
        description: "Melhorias automáticas de performance",
      },
    ],
  },
  {
    name: "Cursor",
    icon: MousePointer,
    description: "Otimize seu fluxo de trabalho com IA integrada",
    tag: "Produtividade",
    details: [
      {
        title: "Editor Inteligente",
        description: "Interface otimizada para desenvolvimento com IA",
      },
      {
        title: "Sugestões Contextuais",
        description: "Recomendações baseadas no seu código",
      },
      {
        title: "Integração com LLMs",
        description: "Acesso direto a modelos de linguagem",
      },
    ],
  },
  {
    name: "Mapify",
    icon: Users,
    description: "Visualize e planeje projetos com auxílio da IA",
    tag: "Planejamento",
    details: [
      {
        title: "Mapeamento Visual",
        description: "Criação de mapas mentais inteligentes",
      },
      {
        title: "Organização de Projetos",
        description: "Estruturação automática de ideias",
      },
      {
        title: "Planejamento Estratégico",
        description: "Sugestões de fluxos de trabalho",
      },
    ],
  },
  {
    name: "Gamma App",
    icon: BarChart3,
    description: "Crie apresentações profissionais automaticamente",
    tag: "Apresentações",
    details: [
      {
        title: "Design Automático",
        description: "Layouts profissionais gerados por IA",
      },
      {
        title: "Conteúdo Dinâmico",
        description: "Geração inteligente de conteúdo",
      },
      {
        title: "Personalização Avançada",
        description: "Adaptação ao seu estilo e marca",
      },
    ],
  },
  {
    name: "Ollama",
    icon: Users,
    description: "Execute modelos de IA localmente em seu ambiente",
    tag: "LLMs",
    details: [
      { title: "Modelos Locais", description: "Execute LLMs em sua máquina" },
      {
        title: "Personalização",
        description: "Ajuste os modelos às suas necessidades",
      },
      { title: "Privacidade", description: "Controle total sobre seus dados" },
    ],
  },
  {
    name: "Linkedin Com IA",
    icon: Users,
    description: "Otimize seu perfil profissional com IA",
    tag: "Marketing",
    details: [
      {
        title: "Otimização de Perfil",
        description: "Melhore sua visibilidade profissional",
      },
      {
        title: "Networking Inteligente",
        description: "Conexões estratégicas sugeridas",
      },
      {
        title: "Conteúdo Engajante",
        description: "Posts e artigos otimizados",
      },
    ],
  },
  {
    name: "Python Com IA",
    icon: Users,
    description: "Desenvolva aplicações inteligentes com Python",
    tag: "Desenvolvimento",
    details: [
      {
        title: "Integração com APIs",
        description: "Conexão com serviços de IA",
      },
      { title: "Machine Learning", description: "Desenvolvimento de modelos" },
      {
        title: "Automação Inteligente",
        description: "Scripts e processos otimizados",
      },
    ],
  },
];

const TopicCard: React.FC<TopicCardProps> = ({
  topic,
  isActive,
  onClick,
  isMobile,
  isOpen,
  onToggle,
}) => {
  const handleClick = () => {
    if (isMobile) {
      onToggle();
    }
    onClick();
  };

  const isActiveStyle = isMobile ? isOpen : isActive;

  return (
    <motion.div className="w-full">
      <motion.button
        onClick={handleClick}
        className={`w-full text-left p-6 rounded-2xl border transition-all duration-200 ${
          isActiveStyle
            ? "bg-blue-600 border-blue-500 shadow-lg"
            : "bg-white border-gray-200 hover:shadow-lg"
        } group relative`}
      >
        <div className="flex items-start gap-4">
          <div
            className={`p-3 rounded-xl ${
              isActiveStyle
                ? "bg-blue-500/50 text-white"
                : "bg-blue-50 text-blue-600"
            }`}
          >
            <topic.icon className="w-5 h-5" />
          </div>

          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              {topic.tag && (
                <span
                  className={`inline-block text-xs font-medium px-2 py-1 rounded-full ${
                    isActiveStyle
                      ? "bg-blue-500/50 text-white"
                      : "bg-blue-50 text-blue-600"
                  }`}
                >
                  {topic.tag}
                </span>
              )}

              {isMobile && (
                <div
                  className={`flex items-center gap-2 ${
                    isActiveStyle ? "text-white" : "text-gray-400"
                  }`}
                >
                  {isOpen ? (
                    <Unlock className="w-4 h-4" />
                  ) : (
                    <Lock className="w-4 h-4 group-hover:text-blue-500 transition-colors" />
                  )}
                  <ChevronDown
                    className={`w-5 h-5 transform transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
              )}
            </div>

            <div>
              <h3
                className={`text-lg font-semibold mb-2 ${
                  isActiveStyle ? "text-white" : "text-gray-900"
                }`}
              >
                {topic.name}
              </h3>

              <p className={isActiveStyle ? "text-blue-100" : "text-gray-600"}>
                {topic.description}
              </p>
            </div>
          </div>
        </div>
      </motion.button>

      {isMobile && (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="p-6 pt-0">
                <div className="space-y-6 mt-6 border-t pt-6">
                  {topic.details.map((detail, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center">
                        <topic.icon className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">
                          {detail.title}
                        </div>
                        <div className="text-sm text-gray-600">
                          {detail.description}
                        </div>
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

const Topics: React.FC = () => {
  const [activeTopic, setActiveTopic] = useState<number | null>(0);
  const [isMobile, setIsMobile] = useState(false);
  const [openTopicIndex, setOpenTopicIndex] = useState<number | null>(0);

  useEffect(() => {
    const checkMobile = () => {
      const isMobileView = window.innerWidth < 1024;
      setIsMobile(isMobileView);
      if (isMobileView) {
        setActiveTopic(null);
        setOpenTopicIndex(0);
      } else {
        setActiveTopic(0);
        setOpenTopicIndex(null);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleTopicToggle = (index: number) => {
    if (isMobile) {
      setOpenTopicIndex(openTopicIndex === index ? null : index);
      setActiveTopic(openTopicIndex === index ? null : index);
    }
  };

  return (
    <section id="tecnologias" className="py-24 bg-white relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            O que você vai aprender
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Domine as ferramentas mais poderosas de IA e transforme sua maneira
            de programar
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr,400px] gap-12">
          <div className="space-y-6">
            {topics.map((topic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TopicCard
                  topic={topic}
                  isActive={activeTopic === index}
                  onClick={() => !isMobile && setActiveTopic(index)}
                  isMobile={isMobile}
                  isOpen={openTopicIndex === index}
                  onToggle={() => handleTopicToggle(index)}
                  isFirstTopic={index === 0}
                />
              </motion.div>
            ))}
          </div>

          {!isMobile && activeTopic !== null && (
            <div className="lg:sticky lg:top-8 self-start">
              <motion.div
                key={activeTopic}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      {React.createElement(topics[activeTopic].icon, {
                        className: "w-5 h-5 text-blue-600",
                      })}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {topics[activeTopic].name}
                    </h3>
                  </div>

                  <div className="space-y-6">
                    {topics[activeTopic].details.map((detail, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center">
                          {React.createElement(topics[activeTopic].icon, {
                            className: "w-4 h-4 text-blue-600",
                          })}
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">
                            {detail.title}
                          </div>
                          <div className="text-sm text-gray-600">
                            {detail.description}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Topics;
