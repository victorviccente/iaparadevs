import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const features = [
  "Acesso vitalício ao conteúdo",
  "Projetos práticos guiados",
  "Suporte na comunidade Discord",
  "Certificado de conclusão",
  "Updates gratuitos",
  "Garantia de 7 dias"
];

const Pricing = () => {
  return (
    <section id='preco' className="py-24 relative bg-black">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Comece sua jornada em IA
          </h2>
          <p className="text-lg text-gray-300">
            Transforme sua carreira com as habilidades mais demandadas do mercado
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-lg mx-auto"
        >
          <div className="relative rounded-2xl bg-black/80 border border-white/10 p-8">
            {/* Promotion badge */}
            <div className="absolute top-6 right-6">
              <div className="px-3 py-1 text-sm font-medium text-black bg-[#C2F52B] rounded-full">
                33% OFF
              </div>
            </div>

            {/* Pricing */}
            <div className="text-center mb-8">
              <div className="text-gray-400 text-sm line-through mb-2">
                R$ 597
              </div>
              <div className="text-4xl font-bold text-white mb-2">
                R$ 397
              </div>
              <div className="text-sm text-gray-400">
                ou 12x de R$ 33,08
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#C2F52B] flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a 
              href="https://pay.kiwify.com.br/JE6szBY" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full bg-[#C2F52B] text-black rounded-lg py-4 font-medium hover:bg-[#9CC621] transition-colors text-center"
            >
              Garantir minha vaga com desconto
            </a>

            {/* Guarantee text */}
            <div className="mt-4 text-center">
              <p className="text-gray-400 text-sm">
                7 dias de garantia incondicional. Cancele a qualquer momento.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;