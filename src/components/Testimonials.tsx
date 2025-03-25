import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    text: "O curso superou todas as minhas expectativas! A forma como o professor explica é tão clara que consegui aplicar IA em projetos reais logo nas primeiras aulas, triplicando minha eficiência no trabalho.",
    author: "Camila Torres",
    role: "Líder Técnica",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
  },
  {
    text: "O que mais me impressionou foi a praticidade. Cada conceito vem com exemplos que dá para usar na hora. Já na primeira semana, estava implementando IA nos meus projetos pessoais.",
    author: "Vitória Silva",
    role: "Desenvolvedora Sênior",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop"
  },
  {
    text: "Nunca vi um curso tão completo assim. Os projetos práticos são incríveis e o suporte é fora de série. Sinto que aprendi em meses o que levaria anos sozinha.",
    author: "Gabriel Souza",
    role: "Engenheiro de Software",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop"
  },
  {
    text: "Já tinha feito outros cursos de IA, mas este se destaca de verdade. A abordagem prática e a comunidade engajada me ajudaram a dar um salto na carreira.",
    author: "Larissa Mendes",
    role: "Desenvolvedora Full Stack",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop"
  }
];

const Testimonials = () => {
  return (
    <section id='depoimentos' className="relative py-24">
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
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Amado por desenvolvedores
          </h2>
          <p className="text-lg text-gray-300">
            Veja o que nossos alunos estão dizendo sobre o curso
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <p className="text-gray-300 mb-6">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-medium text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-gray-400">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;