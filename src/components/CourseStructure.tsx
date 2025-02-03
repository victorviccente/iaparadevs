import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Book, Code, Brain, Bot, Rocket, Terminal, Linkedin, Map, Play, ChevronDown } from 'lucide-react';

interface Module {
  id: string;
  title: string;
  icon: React.ElementType;
  description: string;
  content: string[];
}

interface ModuleCardProps {
  module: Module;
  isSelected: boolean;
  onClick: () => void;
  isMobile: boolean;
}

const modules: Module[] = [
  {
    id: 'mod1',
    title: 'Introdução ao Curso',
    icon: Book,
    description: 'Fundamentos e conceitos iniciais de IA',
    content: [
      'Introdução ao Curso',
      'Quem é o seu professor',
      'O que vai ter no curso',
      'Definição Básica de IA',
      'Relevância atual'
    ]
  },
  {
    id: 'mod2',
    title: 'Fundamentos de IA e ML',
    icon: Brain,
    description: 'Machine Learning e Deep Learning',
    content: [
      'Machine Learning',
      'Deep Learning',
      'Rede Neural',
      'Processamento de Linguagem Natural',
      'Impacto no Mercado'
    ]
  },
  {
    id: 'mod3',
    title: 'Soft Skills e Mitos sobre IA',
    icon: Bot,
    description: 'Habilidades essenciais e desmistificação',
    content: [
      'Soft Skills na Era da IA',
      'Mitos e Verdades sobre IA'
    ]
  },
  {
    id: 'mod4',
    title: 'GitHub e VsCode',
    icon: Code,
    description: 'Github Copilot e ambiente de desenvolvimento',
    content: [
      'Orientações Github e VsCode',
      'Primeiros passos com o Github Copilot',
      'Usando o Github Copilot dentro do Ambiente de Código',
      'Como estudar com usando o Copilot',
      'Desafio e Explicação do Desafio'
    ]
  },
  {
    id: 'mod5',
    title: 'Ferramentas de Desenvolvimento',
    icon: Terminal,
    description: 'Mapify e Gamma',
    content: [
      'Conhecendo o Mapify',
      'Usando o Mapify e suas funcionalidades',
      'Criando a conta e o Projeto no Gamma',
      'Funcionalidades no Gamma',
      'Gamma junto com o Canva'
    ]
  },
  {
    id: 'mod6',
    title: 'Projeto de Landing Page e Deploy',
    icon: Rocket,
    description: 'V0.DEV e deploy de projetos',
    content: [
      'Conhecendo o V0.DEV',
      'Iniciando Projeto Landing Page e vendo o Deploy',
      'Publish e Deploy',
      'Integração V0 e VsCode',
      'Integração V0 e Bolt',
      'Rodando o Projeto Localmente',
      'Desafio Portfólio V0 + Bolt'
    ]
  },
  {
    id: 'mod7',
    title: 'LinkedIn e Aplicações Profissionais',
    icon: Linkedin,
    description: 'Otimizando seu perfil profissional',
    content: [
      'Aprimorando seu LinkedIn com IA',
      'Visão geral do LinkedIn',
      'Linkedin Learning',
      'Finalizando módulo de LinkedIN'
    ]
  },
  {
    id: 'mod8',
    title: 'Projeto de Tasks com Cursor',
    icon: Code,
    description: 'Desenvolvimento completo de aplicação',
    content: [
      'Instalando o Cursor',
      'Conhecendo o Cursor',
      'Apresentando Projeto Tasks',
      'Explicando o Backend',
      'Detalhando o Backend + API',
      'Detalhando o FrontEnd + Git + Local',
      'Aplicando o Cursor no Design do Tasks',
      'Aplicando o Cursor no Python da Aplicação',
      'Aplicando o Claude dentro da aplicação',
      'Subindo Projeto pro Github + Validação'
    ]
  },
  {
    id: 'mod9',
    title: 'SyTI WorkFlow e ML',
    icon: Map,
    description: 'Projeto de Machine Learning',
    content: [
      'Apresentação SyTI WorkFlow',
      'Introdução ao Projeto de ML',
      'Explicando o Código de Previsão de Casas',
      'Formatando a Planilha e Recebendo as Previsões',
      'Como Funciona o RandomForest'
    ]
  }
];

const ModuleCard: React.FC<ModuleCardProps> = ({ module, isSelected, onClick, isMobile }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    } else {
      onClick();
    }
  };

  return (
    <div id='conteudo' className="w-full">
      <button
        onClick={handleClick}
        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
          isSelected && !isMobile
            ? 'bg-blue-600 text-white'
            : 'text-gray-400 hover:bg-gray-800'
        }`}
      >
        <div className="flex items-center gap-3 flex-1">
          <module.icon className="w-5 h-5" />
          <span className="font-medium">{module.title}</span>
        </div>
        {isMobile && (
          <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        )}
      </button>

      <AnimatePresence>
        {(isMobile && isOpen) && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden bg-gray-800/30 rounded-lg mt-2"
          >
            <div className="p-4 space-y-4">
              <div className="mb-4">
                <h3 className="text-lg font-medium text-white mb-1">
                  {module.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {module.description}
                </p>
              </div>
              {module.content.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  className="flex items-center gap-3 p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-500">
                    <Play className="w-4 h-4" />
                  </div>
                  <span className="text-white">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CourseStructure: React.FC = () => {
  const [selectedModule, setSelectedModule] = useState(modules[0]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="py-24 bg-[#0A0F1D] relative">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a223f_1px,transparent_1px),linear-gradient(to_bottom,#1a223f_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Estrutura do Curso
          </h2>
          <p className="text-lg text-gray-400">
            Conteúdo completo e atualizado
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-[#0F1729] rounded-2xl shadow-xl overflow-hidden border border-gray-800">
            <div className={`${!isMobile ? 'grid md:grid-cols-[280px,1fr]' : ''}`}>
              <div className={`${!isMobile ? 'border-r border-gray-800' : ''}`}>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-6">
                    <Terminal className="w-5 h-5 text-blue-500" />
                    <span className="font-medium text-white">IA para Devs</span>
                  </div>
                  
                  <nav className="space-y-2">
                    {modules.map((module) => (
                      <ModuleCard
                        key={module.id}
                        module={module}
                        isSelected={selectedModule.id === module.id}
                        onClick={() => setSelectedModule(module)}
                        isMobile={isMobile}
                      />
                    ))}
                  </nav>
                </div>
              </div>

              {!isMobile && (
                <div className="p-8">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedModule.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="mb-8">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {selectedModule.title}
                        </h3>
                        <p className="text-gray-400">
                          {selectedModule.description}
                        </p>
                      </div>

                      <div className="space-y-4">
                        {selectedModule.content.map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: index * 0.05 }}
                            className="flex items-center gap-3 p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors"
                          >
                            <div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-500">
                              <Play className="w-4 h-4" />
                            </div>
                            <span className="text-white">{item}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseStructure;