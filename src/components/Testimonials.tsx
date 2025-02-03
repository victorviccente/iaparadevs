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
    <section id='depoimentos' className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Amado por desenvolvedores
          </h2>
          <p className="text-lg text-gray-600">
            Veja o que nossos alunos estão falando sobre o curso
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
            >
              <p className="text-gray-600 mb-6">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-medium text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-gray-500">
                    {testimonial.role} · <span className="text-blue-600">{testimonial.company}</span>
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