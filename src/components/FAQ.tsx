import { motion } from 'framer-motion';
import { HelpCircle, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: "Preciso ter experiência prévia em IA?",
    answer: "Não, o curso é projetado para desenvolvedores de todos os níveis. Começamos do básico e avançamos gradualmente, garantindo que você aprenda de forma sólida e consistente."
  },
  {
    question: "Quanto tempo tenho acesso ao curso?",
    answer: "Você terá acesso vitalício ao conteúdo do curso, incluindo todas as atualizações futuras. Uma vez que você se matricula, pode assistir às aulas quantas vezes quiser."
  },
  {
    question: "Há suporte para dúvidas durante o curso?",
    answer: "Sim, oferecemos suporte personalizado através de um fórum exclusivo para alunos, onde o Professor Victor responde às dúvidas regularmente. Além disso, temos uma comunidade ativa de alunos que compartilham experiências e conhecimentos."
  },
  {
    question: "Como funciona a garantia de 7 dias?",
    answer: "Se você não ficar satisfeito com o curso por qualquer motivo, basta nos enviar um e-mail em até 7 dias após a compra e faremos o reembolso integral, sem questionamentos."
  },
  {
    question: "Posso pagar em parcelas?",
    answer: "Sim, oferecemos parcelamento em até 12x sem juros nos principais cartões de crédito. Também aceitamos PIX e boleto bancário para pagamento à vista com desconto adicional."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 relative">
      {/* Background with animated gradient */}
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
            Perguntas Frequentes
          </h2>
          <p className="text-blue-300 text-lg max-w-2xl mx-auto">
            Tire suas dúvidas sobre o curso
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-blue-900/40 to-blue-800/40 rounded-2xl shadow-xl border border-blue-700/30 backdrop-blur-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <HelpCircle className="w-6 h-6 text-blue-400 flex-shrink-0" />
                  <h3 className="text-xl font-bold text-white">{faq.question}</h3>
                </div>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-blue-400" />
                ) : (
                  <Plus className="w-5 h-5 text-blue-400" />
                )}
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-6 text-blue-300">
                  {faq.answer}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Support Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 text-center"
        >
          <p className="text-blue-300 mb-4">
            Ainda tem dúvidas? Entre em contato conosco
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400/10 font-bold py-3 px-6 rounded-full transition duration-300"
          >
            Falar com um especialista
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;