import React from 'react';
import { motion } from 'framer-motion';
import { Star, Clock, Users, CheckCircle } from 'lucide-react';

export default function Hero() {
  const benefits = [
    'Desinchar em 7 dias',
    'Emagrecer com leveza',
    'Regular o intestino',
    'Reduzir celulites',
    'Melhorar metabolismo',
  ];

  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-neutral via-white to-neutral pt-20">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Star className="w-4 h-4 mr-2 text-yellow-500" />
              Protocolo Aprovado por 15 mil mulheres
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Transforme seu corpo em{' '}
              <span className="gradient-text">7 dias</span>
                

              Mais Leve, Saudável e Feliz!
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Você acorda se sentindo estufada? A calça aperta, a barriga parece pesada, o intestino não ajuda?
              <strong className="text-primary"> O Protocolo Desinchar</strong> foi criado para isso.
            </motion.p>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.a
                href=""
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-primary text-white text-lg font-bold rounded-full hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                QUERO COMEÇAR HOJE
              </motion.a>

              <motion.div
                className="flex items-center justify-center space-x-3 text-gray-600"
                whileHover={{ scale: 1.05 }}
              >
                <Clock className="w-5 h-5 text-primary" />
                <span className="font-medium">Resultados em 7 dias</span>
              </motion.div>
            </motion.div>

            <motion.div
              className="mt-8 flex items-center justify-center lg:justify-start space-x-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-gray-600 font-medium">+15.000 mulheres transformadas</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-primary rounded-3xl transform rotate-3"
                animate={{ rotate: [3, -3, 3] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              ></motion.div>

              <motion.img
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754612425649_fbjqxxg23la_Design-sem-nome-2024-12-16T142539.731.webp"
                alt="Protocolo Desinchar - Transformação em 7 dias"
                className="relative z-10 w-full h-auto rounded-3xl shadow-2xl hover-scale"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              />

              <motion.div
                className="absolute -top-4 -right-4 bg-yellow-400 text-black px-4 py-2 rounded-full font-bold text-sm shadow-lg z-20"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                🔥 RESULTADOS EM 7 DIAS
              </motion.div>
            </div>

            <motion.div
              className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl shadow-xl p-6 w-80"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <div className="text-center">
                <h3 className="font-bold text-lg mb-2">Garantia de 7 dias</h3>
                <p className="text-gray-600 text-sm">100% do seu investimento de volta se não ficar satisfeita!</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>
    </section>
   );
}