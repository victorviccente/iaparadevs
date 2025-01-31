import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    text: "Este curso transformou minha carreira. Agora consigo criar soluções incríveis com IA!",
    author: "Maria S.",
    role: "Desenvolvedora Full Stack",
    company: "Google",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    rating: 5
  },
  {
    text: "O Professor Victor tem um conhecimento incrível e sabe transmitir de forma clara e objetiva.",
    author: "João P.",
    role: "Engenheiro de Software",
    company: "Microsoft",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    rating: 5
  },
  {
    text: "Melhor investimento que fiz na minha carreira. O curso é completo e muito prático.",
    author: "Ana L.",
    role: "Tech Lead",
    company: "Meta",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/50 to-black/50 -z-10" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a')] opacity-5 mix-blend-overlay bg-cover bg-fixed -z-20" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-200 to-blue-400 text-transparent bg-clip-text">
            O que dizem nossos alunos
          </h2>
          <p className="text-blue-300 text-lg max-w-2xl mx-auto">
            Histórias reais de transformação e sucesso
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-gradient-to-br from-blue-900/40 to-blue-800/40 rounded-2xl p-8 shadow-xl border border-blue-700/30 backdrop-blur-sm relative"
            >
              <Quote className="w-12 h-12 text-blue-400 mb-6 opacity-50" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-blue-200 text-lg mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-blue-400"
                />
                <div>
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-blue-400">{testimonial.role}</p>
                  <p className="text-blue-300 text-sm">{testimonial.company}</p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/10 to-transparent rounded-tr-2xl" />
            </motion.div>
          ))}
        </div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 text-center"
        >
          <div className="flex justify-center gap-12 flex-wrap">
            <div className="text-center">
              <p className="text-4xl font-bold bg-gradient-to-r from-blue-200 to-blue-400 text-transparent bg-clip-text">
                98%
              </p>
              <p className="text-blue-300">Satisfação</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold bg-gradient-to-r from-blue-200 to-blue-400 text-transparent bg-clip-text">
                1000+
              </p>
              <p className="text-blue-300">Alunos</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold bg-gradient-to-r from-blue-200 to-blue-400 text-transparent bg-clip-text">
                4.9/5
              </p>
              <p className="text-blue-300">Avaliação média</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;