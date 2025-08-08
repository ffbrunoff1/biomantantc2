import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Leaf, Shield, Award, Phone } from 'lucide-react'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section id="inicio" className="relative min-h-screen bg-gradient-hero overflow-hidden pt-32">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-32 h-32 bg-primary-200 rounded-full opacity-20"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-20 left-10 w-24 h-24 bg-primary-300 rounded-full opacity-30"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary-400 rounded-full opacity-25"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.div
                className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-primary-600 font-medium"
                whileHover={{ scale: 1.05 }}
              >
                <Leaf size={16} />
                <span>Soluções Sustentáveis</span>
              </motion.div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Transforme o seu projeto com{' '}
                <span className="gradient-text">
                  soluções sustentáveis
                </span>{' '}
                de contenção de solo!
              </h1>
              
              <p className="text-xl text-gray-600 max-w-lg">
                Biomanta de fibra de coco para controle de erosão e proteção ambiental. 
                Sustentabilidade que faz a diferença em todo o Brasil.
              </p>
            </motion.div>

            {/* Features */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <motion.div
                className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm p-4 rounded-lg"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.8)' }}
              >
                <div className="bg-primary-100 p-2 rounded-lg">
                  <Shield className="text-primary-600" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Proteção Total</h3>
                  <p className="text-sm text-gray-600">Controle eficaz de erosão</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm p-4 rounded-lg"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.8)' }}
              >
                <div className="bg-primary-100 p-2 rounded-lg">
                  <Leaf className="text-primary-600" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">100% Natural</h3>
                  <p className="text-sm text-gray-600">Fibra de coco biodegradável</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm p-4 rounded-lg"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.8)' }}
              >
                <div className="bg-primary-100 p-2 rounded-lg">
                  <Award className="text-primary-600" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Qualidade</h3>
                  <p className="text-sm text-gray-600">Resultados comprovados</p>
                </div>
              </motion.div>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="https://wa.me/5519983610058"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center space-x-2 text-lg px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone size={20} />
                <span>Fale no WhatsApp</span>
                <ArrowRight size={20} />
              </motion.a>
              
              <motion.a
                href="#produtos"
                className="btn-secondary inline-flex items-center justify-center space-x-2 text-lg px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Ver Produtos</span>
                <ArrowRight size={20} />
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">15+</div>
                <div className="text-sm text-gray-600">Anos de experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">1000+</div>
                <div className="text-sm text-gray-600">Projetos realizados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">100%</div>
                <div className="text-sm text-gray-600">Sustentável</div>
              </div>
            </motion.div>
          </div>

          {/* Images */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <motion.div
              className="relative z-10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754663622493_ghmdqniijoc_biomanta-506x372.jpg"
                alt="Biomanta de Fibra de Coco"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
            
            <motion.div
              className="absolute -bottom-6 -right-6 z-20"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754663623801_d3hi8n5lqx4_biomanta-obra.jpg"
                alt="Biomanta em Obra"
                className="w-48 h-32 object-cover rounded-xl shadow-xl border-4 border-white"
              />
            </motion.div>

            {/* Background decoration */}
            <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-primary rounded-2xl opacity-10 -z-10" />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-6 h-10 border-2 border-primary-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-600 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  )
}