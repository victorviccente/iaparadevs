import React from 'react';
import { motion } from 'framer-motion';
import { Code, Terminal, Cpu, ArrowRight, Github, Linkedin } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Achievement {
  icon: LucideIcon;
  title: string;
  description: string;
}

const achievements: Achievement[] = [
  { 
    icon: Code,
    title: "Especialista em IA",
    description: "Desenvolvimento avançado com Python e frameworks de IA"
  },
  { 
    icon: Terminal,
    title: "Arquiteto de Software",
    description: "Experiência em arquitetura e desenvolvimento de SaaS"
  },
  { 
    icon: Cpu,
    title: "Machine Learning",
    description: "Especialista em modelos de aprendizado de máquina"
  }
];

interface AchievementCardProps {
  achievement: Achievement;
  index: number;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ achievement, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50"
  >
    <div className="mt-1">
      <achievement.icon className="w-5 h-5 text-blue-600" />
    </div>
    <div>
      <h3 className="font-medium text-gray-900 mb-1">{achievement.title}</h3>
      <p className="text-gray-600 text-sm">{achievement.description}</p>
    </div>
  </motion.div>
);

const Instructor = () => {
  return (
    <section id="instructor" className="py-24 bg-white">
      {/* Subtle grid background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Aprenda com quem está na linha de frente
          </h2>
          <p className="text-xl text-gray-600">
            Conheça seu instrutor e descubra como a experiência prática
            faz diferença no seu aprendizado
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          {/* Left Column - Image and Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative mb-12">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                  alt="Professor Victor Vicente"
                  className="w-full aspect-square object-cover rounded-2xl"
                />
                {/* Subtle border overlay */}
                <div className="absolute inset-0 rounded-2xl border border-gray-200" />
              </div>
            </div>

            {/* Achievement Cards */}
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <AchievementCard
                  key={index}
                  achievement={achievement}
                  index={index}
                />
              ))}
            </div>
          </motion.div>

          {/* Right Column - Bio and Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:pt-12"
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Prof. Victor Vicente
                </h3>
                <p className="text-lg text-blue-600 font-medium">
                  Especialista em Inteligência Artificial & Machine Learning
                </p>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <p>
                  Pós-graduando em Inteligência Artificial com ênfase em Machine Learning,
                  especialista em IA e Python, e referência no desenvolvimento de soluções
                  inovadoras com tecnologias emergentes de IA.
                </p>
                <p>
                  Desenvolvedor especializado na criação de SaaS (Software as a Service) e aplicações web
                  utilizando Inteligência Artificial. Atuo no desenvolvimento de soluções inovadoras
                  que combinam IA com as melhores práticas de programação moderna.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-8 py-8 border-y border-gray-100">
                <div>
                  <div className="text-3xl font-bold text-gray-900">7+</div>
                  <div className="text-sm text-gray-600 mt-1">Anos de experiência</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600 mt-1">Projetos entregues</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">1.5k+</div>
                  <div className="text-sm text-gray-600 mt-1">Alunos formados</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                  Ver currículo completo
                  <ArrowRight className="w-4 h-4" />
                </button>
                
                <div className="flex gap-4">
                  <button className="inline-flex items-center justify-center w-12 h-12 rounded-lg border border-gray-200 text-gray-600 hover:text-blue-600 hover:border-blue-600 transition-colors">
                    <Github className="w-5 h-5" />
                  </button>
                  <button className="inline-flex items-center justify-center w-12 h-12 rounded-lg border border-gray-200 text-gray-600 hover:text-blue-600 hover:border-blue-600 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Instructor;