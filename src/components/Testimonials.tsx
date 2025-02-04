import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    text: "O curso é incrível! A didática do professor Victor é excepcional, consegui implementar IA em vários projetos da empresa e aumentei minha produtividade em 3x.",
    author: "Marina Costa",
    role: "Tech Lead",
    company: "Stone Pagamentos",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop"
  },
  {
    text: "A melhor parte do curso é que cada conceito é explicado com exemplos práticos. Comecei a usar IA nos meus projetos já na primeira semana de curso.",
    author: "Rafael Silva",
    role: "Senior Developer",
    company: "Nubank",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
  },
  {
    text: "Estou impressionado com a quantidade de projetos práticos. O curso realmente entrega o que promete, e o suporte é excepcional.",
    author: "André Santos",
    role: "Software Engineer",
    company: "iFood",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
  },
  {
    text: "Já fiz vários cursos de IA, mas este é diferente. O foco em casos práticos e a comunidade ativa fazem toda a diferença.",
    author: "Carla Mendes",
    role: "Full Stack Developer",
    company: "Zappts Technology",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
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
            Veja o que nossos alunos estão falando sobre o curso
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
                    {testimonial.role} · <span className="text-[#C2F52B]">{testimonial.company}</span>
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