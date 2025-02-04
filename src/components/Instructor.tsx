import React from 'react';
import { motion } from 'framer-motion';
import { Code, Terminal, Cpu, ArrowRight, Github, Linkedin } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import vv from '../assets/vvpodcast.png';

interface Achievement {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface AchievementCardProps {
  achievement: Achievement;
  index: number;
}

const achievements: Achievement[] = [
  { 
    icon: Code,
    title: "Instrutor em IA",
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
    description: "Profissional em modelos de aprendizado de máquina"
  }
];

const AchievementCard: React.FC<AchievementCardProps> = ({ achievement, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="flex items-start gap-4 p-6 rounded-2xl bg-black/80"
  >
    <div className="mt-1">
      <achievement.icon className="w-5 h-5 text-[#C2F52B]" />
    </div>
    <div>
      <h3 className="font-medium text-white mb-1">{achievement.title}</h3>
      <p className="text-gray-300 text-sm">{achievement.description}</p>
    </div>
  </motion.div>
);

const Instructor: React.FC = () => {
  return (
    <section id="instructor" className="py-24 bg-black">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Aprenda com quem está na linha de frente
          </h2>
          <p className="text-xl text-gray-300">
            Conheça seu instrutor e descubra como a experiência prática
            faz diferença no seu aprendizado
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative mb-12">
              <div className="relative">
                <img
                  src={vv}
                  alt="Professor Victor Vicente"
                  className="w-full aspect-square object-cover rounded-2xl"
                />
                <div className="absolute inset-0 rounded-2xl border border-white/10" />
              </div>
            </div>

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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:pt-12"
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Prof. Victor Vicente
                </h3>
                <p className="text-lg text-[#C2F52B] font-medium">
                  Profissional em Inteligência Artificial & Machine Learning
                </p>
              </div>
              
              <div className="space-y-4 text-gray-300">
                <p>
                  Pós-graduando em Inteligência Artificial com ênfase em Machine Learning,
                  desenvolvedor em IA e Python, e referência no desenvolvimento de soluções
                  inovadoras com tecnologias emergentes de IA.
                </p>
                <p>
                  Desenvolvedor focado na criação de SaaS (Software as a Service) e aplicações web
                  utilizando Inteligência Artificial. Atuo no desenvolvimento de soluções inovadoras
                  que combinam IA com as melhores práticas de programação moderna.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-8 py-8 border-y border-white/10">
                <div>
                  <div className="text-3xl font-bold text-white">4+</div>
                  <div className="text-sm text-gray-300 mt-1">Anos de experiência</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">20+</div>
                  <div className="text-sm text-gray-300 mt-1">Projetos entregues</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">600+</div>
                  <div className="text-sm text-gray-300 mt-1">Alunos formados</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-black bg-[#C2F52B] rounded-lg hover:bg-[#9CC621] transition-colors">
                  Ver currículo completo
                  <ArrowRight className="w-4 h-4" />
                </button>
                
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/victorviccente" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-12 h-12 rounded-lg border border-white/10 text-gray-300 hover:text-[#C2F52B] hover:border-[#C2F52B] transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/victorviccente"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="inline-flex items-center justify-center w-12 h-12 rounded-lg border border-white/10 text-gray-300 hover:text-[#C2F52B] hover:border-[#C2F52B] transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
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