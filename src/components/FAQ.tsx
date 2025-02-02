import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Preciso ter experiência prévia em IA?",
    answer: "Não, o curso é projetado para desenvolvedores de todos os níveis. Começamos dos fundamentos e avançamos gradualmente, garantindo uma base sólida em IA e desenvolvimento.",
    category: "Pré-requisitos"
  },
  {
    question: "Quanto tempo tenho acesso ao curso?",
    answer: "Você terá acesso vitalício a todo o conteúdo do curso, incluindo todas as atualizações futuras. Não há limite de tempo para consumir o material, e você pode revisitar as aulas quando quiser.",
    category: "Acesso"
  },
  {
    question: "Como funciona o suporte durante o curso?",
    answer: "Oferecemos suporte multicanal: fórum exclusivo para alunos com respostas em até 24h, comunidade ativa no Discord, e mentorias semanais ao vivo com o Professor Victor para dúvidas e revisões de código.",
    category: "Suporte"
  },
  {
    question: "Como funciona a garantia de 7 dias?",
    answer: "Oferecemos uma garantia incondicional de 7 dias. Se você não ficar satisfeito por qualquer motivo, basta enviar um e-mail para suporte@iaparadevs.com.br e faremos o reembolso integral, sem questionamentos.",
    category: "Garantia"
  },
  {
    question: "Quais são as formas de pagamento?",
    answer: "Aceitamos todas as principais formas de pagamento: cartão de crédito em até 12x sem juros, PIX com 10% de desconto adicional, e boleto bancário. Todas as transações são seguras e processadas pela Stripe.",
    category: "Pagamento"
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white relative">
      {/* Subtle grid background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-600">
            Tire suas dúvidas sobre o curso e comece sua jornada
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-start justify-between gap-4 py-6 text-left"
              >
                <div>
                  <span className="block text-sm font-medium text-blue-600 mb-1">
                    {faq.category}
                  </span>
                  <span className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                    {faq.question}
                  </span>
                </div>
                <div className="flex-none pt-1">
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-gray-600">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Divider */}
              <div className="border-t border-gray-200" />
            </motion.div>
          ))}
        </div>

    
      </div>
    </section>
  );
};

export default FAQ;